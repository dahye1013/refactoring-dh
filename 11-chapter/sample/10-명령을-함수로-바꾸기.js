class ChargeCalculator {
  consturoctor(customer, usage, provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }
  get baseCharge() {
    return this._customer.baseRate * this._usage;
  }
  get charge() {
    return this.baseCharge + this._provider.connectionCharge;
  }
}

const charge = (customer, usage, provider) =>
  new ChargeCalculator(customer, usage, provider).charge;

//호출자
const monthCharge = charge(customer, usage, provider).charge;
