getter_setter: {
  /**
   * Getter and Setter
   */
  class BankAccount {
    public readonly id: bigint;
    public name: string;
    protected _balance: number;

    constructor(id: bigint, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    //Getter;
    get balance() {
      return this._balance;
    }
    set balance(amount: number) {
      this._balance = this.balance + amount;
    }
    get accountNo() {
      return BigInt.asIntN(64, this.id);
    }

    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // public getBalance() {
    //   return this._balance;
    // }
  }

  const account = new BankAccount(BigInt(100) + 10n, "nazmul", 50);
  console.log(account.accountNo);
}
