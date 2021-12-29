class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(this.dateToday());
  }

  get discountRate() {
    return this._discountRate;
  }

  becomePreferred() {
    this._discountRate + 0.03;
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }

  dateToday() {
    return new Date();
  }
}

class CustomerContract {
  constructor(startDate) {
    this._startDate = startDate;
  }
}
