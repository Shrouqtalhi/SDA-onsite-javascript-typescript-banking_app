import { Transaction } from "./transaction.js";

export class Customer {
  constructor(id, name) {
    this.customerId = id;
    this.customerName = name;
    this.transaction = [];
  }
  getName() {
    return this.customerName;
  }
  getId() {
    return this.customerId;
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
      return "The balance cannot be negative";
    }
  }
  addTransaction(amount) {
    const transaction = new Transaction(amount, new Date());
    this.transaction.push(transaction);
    return true;
  }
}
