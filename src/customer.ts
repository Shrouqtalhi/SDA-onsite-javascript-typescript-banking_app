import { Transaction } from "./transaction.js";

export class Customer {
  customerId: number;
  customerName: string;
  transactions: Transaction[];
  constructor(id: number, name: string) {
    this.customerId = id;
    this.customerName = name;
    this.transactions = [];
  }
  getName(): string {
    return this.customerName;
  }
  getId(): number {
    return this.customerId;
  }
  getTransaction(): Transaction[] {
    return this.transactions;
  }
  getBalance(): number | string {
    const balance = this.transactions.reduce(
      (total, tran) => total + tran.transactionAmount,
      0
    );
    if (balance > 0) {
      return balance;
    } else {
      return "The balance cannot be negative";
    }
  }
  addTransaction(amount: number): boolean {
    const transaction = new Transaction(amount, new Date());
    this.transactions.push(transaction);
    return true;
  }
}
