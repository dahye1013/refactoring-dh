class ChargeCalculator {
  consturoctor(customer, usage, provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }
  get charge() {
    const baseCharge = this._customer.baseRate * this._usage; //보조함수 인라인
    return baseCharge + this._provider.connectionCharge;
  }
}

const charge = (customer, usage, provider) =>
  new ChargeCalculator(customer, usage, provider).charge;

//호출자
const monthCharge = charge(customer, usage, provider).charge;
