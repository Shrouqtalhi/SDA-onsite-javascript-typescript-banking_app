class Branch {
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
      return this.customers.push(customer);
    } else {
      return false;
    }
  }
  addCustomerTransaction(customerId, amount) {
    this.customerId = customerId;
    this.amount = amount;
  }
}

const branch = new Branch("Rajhi");

console.log(branch);
