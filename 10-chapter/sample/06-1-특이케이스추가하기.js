const registry = { billingPlans: { basic: "" } };

class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return _customer;
  }
}

class Customer {
  constructor(name, billingPlan, paymentHistory) {
    this._name = name;
    this._billingPlan = billingPlan;
    this._paymentHistory = paymentHistory;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    return this._billingPlan;
  }

  set billingPlan(arg) {
    this._billingPlan = arg;
  }

  get paymentHistory() {
    return this._paymentHistory;
  }
}

const client1 = () => {
  const customer = new Site().customer;
  //...
  let customerName;
  if (customer === "unknown") customerName = "occupant";
  else customerName = customer.name;
};
const client2 = () => {
  const customer = new Site().customer;
  const plan = customer === "unknown" ? registry.billingPlans.basic : customer.billingPlan;
};
const client3 = () => {
  const customer = new Site().customer;
  if (customer !== "unknown") customer.billingPlan = "new Plan";
};
const client4 = () => {
  const customer = new Site().customer;
  const weeksDelinquent = customer === "unknown" ? 0 : customer.paymentHsitry.weeksDelinquentInLastYear;
};
