export class Transaction {
  transactionAmount: number;
  transactionDate: Date;
  constructor(amount: number, date: Date) {
    this.transactionAmount = amount;
    this.transactionDate = date;
  }
}
