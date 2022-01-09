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

  //미확인고객여부
  get isUnknow() {
    return false;
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

class UnKnownCustomer {
  get isUnKnown() {
    return true;
  }
}

const isUnknown = (arg) => {
  if (!(arg instanceof Customer) || arg === "unknown") {
    throw new Error(`잘못된 값과 비교 <${arg}>`);
  }
  return arg === "unknown";
};

const client1 = () => {
  const customer = new Site().customer;
  //...
  let customerName;
  if (isUnknown(customer)) customerName = "occupant";
  else customerName = customer.name;
};
const client2 = () => {
  const customer = new Site().customer;
  const plan = isUnknown(customer) ? registry.billingPlans.basic : customer.billingPlan;
};
const client3 = () => {
  const customer = new Site().customer;
  if (!isUnknown(customer)) customer.billingPlan = "new Plan";
};
const client4 = () => {
  const customer = new Site().customer;
  const weeksDelinquent = isUnknown(customer) ? 0 : customer.paymentHsitry.weeksDelinquentInLastYear;
};
