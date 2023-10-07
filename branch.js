export class Branch {
  constructor(name) {
    this.branchName = name;
    this.customers = [];
  }
  getName() {
    return this.branchName;
  }
  getCustomers() {
    return this.customers;
  }
  addCustomer(customer) {
    const findCustomer = this.customers.find((cst) => {
      cst.getId() === customer.getId();
    });
    if (!findCustomer) {
      this.customers.push(customer);
      return true;
    } else {
      return false;
    }
  }

  addCustomerTransaction(customerId, amount) {
    const customer = this.customers.find((cst) => cst.getId() === customerId);
    if (customer) {
      customer.addTransaction(amount);
      return true;
    } else {
      return false;
    }
  }
}
