class Customer {
  constructor(id, name) {
    this.coutomerId = id;
    this.costomerName = name;
    this.transaction = [];
  }
  getName() {
    return this.costomerName;
  }
  getId() {
    return this.coutomerId;
  }
  getTransaction() {
    return this.transaction;
  }
  getBalance() {
    const balance = this.transaction.reduce(
      (total, tran) => total + tran.amount,
      0
    );
    if (balance > 0) {
      return balance;
    } else {
      return 0;
    }
  }
  addTransaction(amount) {
    this.transaction.push(amount);
    return true;
  }
}

const c = new Customer(1, "shrouq");
console.log(c);

console.log(c.getTransaction());
