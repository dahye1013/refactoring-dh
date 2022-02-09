/**
 * Test Case - country가 불일치
 */
const orderData = {
  country: "KO",
};

const countryData = {
  shippingRules: {
    KOR: 82,
  },
};

class ShippingRules {
  constructor(data) {
    this.data = data;
  }
}

const errorList = [];
const state = calculateShippingCosts(orderData);
if (state < 0) errorList.push({ order: orderData, errorCode: state });

function localShippingRules(country) {
  const data = countryData.shippingRules[country];
  if (data) return new ShippingRules(data);
  else return -23;
}
function calculateShippingCosts(order) {
  // ...
  const shippingRules = localShippingRules(order.country);
  if (shippingRules < 0) return shippingRules; // 오류 전파
  // ...
}
