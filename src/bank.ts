import { Branch } from "./branch";
import { Customer } from "./customer";
export class Bank {
  private name: string;
  private branches: Branch[];

  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }

  addBranch(branch: Branch): boolean {
    const findBranch = this.branches.find(
      (b) => b.getName() === branch.getName()
    );
    if (!findBranch) {
      this.branches.push(branch);
      return true;
    } else {
      return false;
    }
  }

  addCustomer(branch: Branch, customer: Customer): boolean {
    const foundBranch = this.branches.find(
      (b) => b.getName() === branch.getName()
    );
    if (foundBranch) {
      return foundBranch.addCustomer(customer);
    } else {
      return false;
    }
  }

  addCustomerTransaction(
    branch: Branch,
    customerId: string,
    amount: number
  ): boolean {
    const foundBranch = this.branches.find(
      (b) => b.getName() === branch.getName()
    );
    if (foundBranch) {
      return foundBranch.addCustomerTransaction(customerId, amount);
    } else {
      return false;
    }
  }

  findBranchByName(branchName: string): Branch[] | null {
    const matchedBranches = this.branches.filter(
      (b) => b.getName() === branchName
    );
    return matchedBranches.length > 0 ? matchedBranches : null;
  }

  checkBranch(branch: Branch): boolean {
    return this.branches.includes(branch);
  }

  listCustomers(branch: Branch, includeTransactions: boolean): void {
    const customers = branch.getCustomers();
    console.log(`Customers in branch ${branch.getName()}:`);
    customers.forEach((customer) => {
      console.log(
        `Customer ID: ${customer.getId()}, Name: ${customer.getName()}`
      );
      if (includeTransactions) {
        const transactions = customer.getTransaction();
        console.log("Transactions:");
        transactions.forEach((transaction) => {
          console.log(
            `Amount: ${transaction.transactionAmount}, Date: ${transaction.transactionDate}`
          );
        });
      }
    });
  }
}
