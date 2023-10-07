import { Branch } from "./branch.js";
import { Customer } from "./customer.js";
import { Transaction } from "./transaction.js";

class Bank {
  constructor(name) {
    this.BankName = name;
    this.branches = [];
  }

  addBranch(branch) {
    const findBranch = this.branches.find((b) => {
      b.name === branch.name;
    });
    if (!findBranch) {
      this.branches.push(branch);
      return true;
    } else {
      return false;
    }
  }

  addCustomer(branch, customer) {
    const branchIndex = this.branches.findIndex(
      (b) => b.name === branch.getName()
    ); // Assuming 'getName' returns the branch name

    if (branchIndex !== -1) {
      const branch = this.branches[branchIndex];
      return branch.addCustomer(customer);
    }

    return false;
  }

  addCustomerTransaction(branch, customerId, amount) {
    const branchIndex = this.branches.findIndex(
      (b) => b.getName() === branch.getName()
    );
    if (branchIndex !== -1) {
      const branch = this.branches[branchIndex];
      return branch.addCustomerTransaction(customerId, amount);
    }
    return false; // Branch not found
  }

  findBranchByName(branchName) {
    const matchedBranches = this.branches.filter(
      (b) => b.getName() === branchName
    );
    return matchedBranches.length > 0 ? matchedBranches : null;
  }

  checkBranch(branch) {
    return this.branches.includes(branch);
  }

  listCustomers(branch, includeTransactions) {
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
