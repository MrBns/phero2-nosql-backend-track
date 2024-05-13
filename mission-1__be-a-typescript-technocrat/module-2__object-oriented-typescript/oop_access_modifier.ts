access_modifier: {
  // Access Modifier;
  /** | Here is 4 access Modifier;
   *  (public) -> this property will be accessible by class instance;
   *  (protected) - will be accessible within own and child class. but can't access from instance;
   *  (private) -  This only available whithin itself class. event cannot be accessible from component instance;
   *  (readonly) - this is a modifier which will throw error if you try to assign value from class instance;
   */
  class BankAccount {
    public readonly id: BigInteger;
    public name: string;
    protected _balance: number;

    constructor(id: BigInteger, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBalance() {
      return this._balance;
    }
  }
}
