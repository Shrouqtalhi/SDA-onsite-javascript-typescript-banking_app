import { Customer } from "./customer.js";

export class Branch {
  branchName: string;
  customers: Customer[];
  constructor(name: string) {
    this.branchName = name;
    this.customers = [];
  }
  getName(): string {
    return this.branchName;
  }
  getCustomers(): Customer[] {
    return this.customers;
  }
  addCustomer(customer: Customer): boolean {
    const findCustomer = this.customers.find(
      (cst) => cst.getId() === customer.getId()
    );

    if (!findCustomer) {
      this.customers.push(customer);
      return true;
    } else {
      return false;
    }
  }

  addCustomerTransaction(customerId: number, amount: number): boolean {
    const customer = this.customers.find((cst) => cst.getId() === customerId);
    if (customer) {
      customer.addTransaction(amount);
      return true;
    } else {
      return false;
    }
  }
}
