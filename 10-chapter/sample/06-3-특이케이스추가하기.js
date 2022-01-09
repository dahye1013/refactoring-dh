/**
 * 변화 단계를 추가하면, 같은 아이디어를 레코드에 적용할 수 있다.
 */

const RECORDS = [
  {
    name: "애크미 보스턴",
    location: "Malden MA",
    customer: {
      name: "애크미 산업",
      billingPlan: "plan-451",
      paymentHistory: {
        weeksDelinquentInLastYear: 7,
      },
    },
  },
  {
    name: "물류창고 15",
    location: "Malden MA",
    customer: "unknown",
  },
];

const registry = { billingPlans: { basic: "" } };
const acquireSiteData = () => RECORDS[0];

const client1 = () => {
  const site = acquireSiteData();
  const customer = site.customer;
  //...
  let customerName;
  if (customer === "unknown") customerName = "occupant";
  else customerName = customer.name;
};
const client2 = () => {
  const plan = customer === "unknown" ? registry.billingPlans.basic : customer.billingPlan;
};
const client3 = () => {
  const weeksDelinquent = customer === "unknown" ? 0 : customer.paymentHsitry.weeksDelinquentInLastYear;
};
