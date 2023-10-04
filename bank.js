class Bank {
  constructor(name) {
    this.BankName = name;
    this.branches = [];
  }
  addBranch(branch) {
    const findBank = this.branches.find((bank) => {
      bank.name === branch.name;
    });
    if (!findBank) {
      return this.branches.push(branch);
    } else {
      return false;
    }
  }
  addCustomerTransaction(branch, customerId, amount) {
    this.branch = branch;
    this.amount = amount;
    this.customerId = customerId;
  }
  findBranchByName(branchName) {
    const findBanch = this.branches.find((branch) => {
      branchName.name === branch.name;
    });
    if (!findBanch) {
      return this.branches;
    } else {
      return null;
    }
  }
}
const b = new Bank("alrajhi");
b.findBranchByName("alrajhi");
console.log(b);
