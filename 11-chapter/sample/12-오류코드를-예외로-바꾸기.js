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

//[예외 핸들러]
// - 콜스택 상위에 해당 예외처리 할 예외 핸들러 작성
// - 처음에는 모든 예외를 던진다.
// - 적절 처리하는 핸들러 존재하면, 지금 콜스택도 처리하도록 확장한다.
let status;
try {
  state = calculateShippingCosts(orderData);
} catch (e) {
  throw e;
}

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
