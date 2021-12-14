describe("[Chpate6.19ver] check reading unchanged", () => {
  it("1 is number", () => {
    assert.equal(typeof 1, Number);
  });
});

// describe("[Chpate6.19ver] check reading unchanged", () => {
//   it("check reading unchanged", () => {
//     const baseReading = {
//       customer: "ivan",
//       quantity: 10,
//       month: 5,
//       year: 2017,
//     };
//     const oracle = JSON.parse(JSON.stringify(baseReading));
//     function enrichReading(original) {
//       let result = JSON.parse(JSON.stringify(original));
//       result.baseCharge = calculateBaseCharge(result);
//       result.basicChargeAmount = calculateBaseCharge(result);
//       //미가공 측정값에 기본 소비량을 부가 정보로 붙인다
//       return result;
//     }
//     function calculateBaseCharge(aReading) {
//       return baseRate(aReading.month, aReading.year);
//     }
//     enrichReading(baseReading);
//     assert.equal(baseReading, oracle);
//   });
// });
