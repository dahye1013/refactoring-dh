//투자 등급
const rating = (voyage, history) => {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > vr + chr * 2) return "A";
  else return "B";
};

//항해 경로 위험요소
const voyageRisk = (voyage) => {
  let result = 1;
  if (voyage.length > 4) result += 2;
  if (voyage.length > 8) result += voyage.length - 8;
  if (["china", "east-indies"].includes(voyage.zone)) result += 4;
  return Math.max(result, 0);
};

//선장의 항해 이력 위험요소
const captainHistoryRisk = (voyage, history) => {
  let result = 1;
  if (history.length < 5) result += 4;
  result += history.filter((v) => v.profit < 0).length;
  if (voyage.zone === "china" && hasChina(history)) result -= 2;
  return Math.max(result, 0);
};

//중국 경유 여부
const hasChina = (history) => history.some((v) => v.zone === "china");

//수익 요인
const voyageProfitFactor = (voyage, history) => {
  let result = 2;
  if (voyage.zone === "china") result += 1;
  if (voyage.zone === "east-indies") result += 1;
  if (voyage.zone === "china" && hasChina(history)) {
    result += 3;
    if (history.length > 10) result += 1;
    if (voyage.length > 12) result += 1;
    if (voyage.length > 18) result -= 1;
  } else {
    if (history.length > 8) result += 1;
    if (voyage.length > 14) result -= 1;
  }
  return result;
};

/** [테스트] ********************************************************************************************** */

//샘플데이터
const voyage = { zone: "west-indies", length: 10 };
const histories = [
  { zone: "east-indies", profit: 5 },
  { zone: "west-indies", profit: 15 },
  { zone: "china", profit: -2 },
  { zone: "west-africa", profit: 7 },
];

const myRating = rating(voyage, histories);
console.info({
  voyageRisk: voyageRisk(voyage),
  captainHistoryRisk: captainHistoryRisk(voyage, histories),
  voyageProfitFactor: voyageProfitFactor(voyage, histories),
  myRating,
});

/**
결과
{ voyageRisk: 5,
captainHistoryRisk: 6,
voyageProfitFactor: 2,
myRating: 'B' }

 */
