{
  class Customer {
    constructor(name, discountRate) {
      this._name = name;
      this._discountRate = discountRate;
      this._setDiscountRate(discountRate);
      this._contract = new CustomerContract(this.dateToday());
    }

    get discountRate() {
      return this._discountRate;
    }
    _setDiscountRate(aNumber) {
      this._discountRate = aNumber;
    }
    becomePreferred() {
      this._setDiscountRate(this._contract.discountRate + 0.03);
    }

    applyDiscount(amount) {
      return amount.subtract(amount.multiply(this._contract.discountRate));
    }

    dateToday() {
      return new Date();
    }
  }

  class CustomerContract {
    constructor(startDate, discountRate) {
      this._startDate = startDate;
      this._discountRate = discountRate;
    }

    //public setter 방지
    get discountRate() {
      return this._discountRate;
    }
    set discountRate(arg) {
      this._discountRate = arg;
    }
  }
}

{
  class Account {
    constructor(number, type, interestRate) {
      this._number = number;
      this._type = type;
      this._interestRate = interestRate;
    }

    get interestRate() {
      return this.interestRate;
    }
  }

  class AccountType {
    constructor(nameString) {
      this._name = nameString;
    }
  }
}
