/**[Class]********************************************************************************************** */
class Rating {
  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }
  get value() {
    const vpf = this.voyageProfitFactor;
    const vr = this.voyageRisk;
    const chr = this.captainHistoryRisk;
    if (vpf * 3 > vr + chr * 2) return "A";
    else return "B";
  }

  //항해 경로 위험요소
  get voyageRisk() {
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if (["china", "east-indies"].includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }

  //수익 요인
  get voyageProfitFactor() {
    let result = 2;
    if (this.voyage.zone === "china") result += 1;
    if (this.voyage.zone === "east-indies") result += 1;
    result += this.voyageAndHistoryProfitFactor;
    return result;
  }

  get voyageAndHistoryProfitFactor() {
    let result = 0;
    if (this.history.length > 8) result += 1;
    if (this.voyage.length > 14) result -= 1;
    return result;
  }

  //선장의 항해 이력 위험요소
  get captainHistoryRisk() {
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter((v) => v.profit < 0).length;
    return Math.max(result, 0);
  }
  //중국 경유 여부
  get hasChina() {
    return this.history.some((v) => v.zone === "china");
  }
}

/**[subClass]---------------------------------------------------------------- */
// 변형동작 - 슈퍼 클래스와의 차이를 표현해야하는 서브클래스에서만 신경쓰도록 한다.
class ExperiencedChinaRating extends Rating {
  //override
  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }
  //override
  get voyageAndHistoryProfitFactor() {
    let result = 0;
    result += 3;
    if (this.history.length > 10) result += 1;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result;
  }
}

/************************************************************************************************ */

//투자 등급
const rating = (voyage, history) => {
  return createRating(voyage, history).value; //팩터리함수
};

const createRating = (voyage, history) => {
  if (voyage.zone === "중국" && history.some((v) => "china" === v.zone)) return new ExperiencedChinaRating(voyage, history).value;
  return new Rating(voyage, history).value;
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

const ratingData = new Rating(voyage, histories);
const myRating = createRating(voyage, histories);
console.info({
  voyageRisk: ratingData.voyageRisk,
  captainHistoryRisk: ratingData.captainHistoryRisk,
  voyageProfitFactor: ratingData.voyageProfitFactor,
  myRating,
});

/**
결과
{ voyageRisk: 5,
captainHistoryRisk: 6,
voyageProfitFactor: 2,
myRating: 'B' }

 */
