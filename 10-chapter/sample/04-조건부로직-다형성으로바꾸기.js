//샘플 데이터
const birds = [
  { name: "EuropeanSwallow", type: "EuropeanSwallow" },
  { name: "AfricanSwallow1", type: "AfricanSwallow", numberOfCoconuts: 2 },
  { name: "AfricanSwallow2", type: "AfricanSwallow", numberOfCoconuts: 4 },
  { name: "NorwegianBlueParrot1", type: "NorwegianBlueParrot", isNailed: false, voltage: 3000 },
  { name: "NorwegianBlueParrot2", type: "NorwegianBlueParrot", isNailed: true, voltage: 50 },
];

/************************************************************************************************ */
//Bird Class
class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    switch (this.type) {
      case "EuropeanSwallow":
        return "average";
      case "AfricanSwallow":
        return this.numberOfCoconuts > 2 ? "tired" : "average";
      case "NorwegianBlueParrot":
        return this.voltage > 100 ? "scorched" : "beautiful";
      default:
        return "unknown";
    }
  }

  get airSpeedVelocity() {
    switch (this.type) {
      case "EuropeanSwallow":
        return 35;
      case "AfricanSwallow":
        return 40 - 2 * this.numberOfCoconuts;
      case "NorwegianBlueParrot":
        return this.isNailed ? 0 : 10 + this.voltage / 10;
      default:
        return null;
    }
  }
}

//Bird subclass - 종별 서브 클래스
class EuropeanSwallow extends Bird {}
class AfricanSwallow extends Bird {}
class NorwegianBlueParrot extends Bird {}

/************************************************************************************************ */
// 서브클래스 인스턴스를 생성할 팩터리 함수
const createBird = (bird) => {
  switch (bird.type) {
    case "EuropeanSwallow":
      return new EuropeanSwallow(bird);
    case "AfricanSwallow":
      return new AfricanSwallow(bird);
    case "NorwegianBlueParrot":
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
};

/**
 * Speed 계산 로직
 * @param {*} birds
 * @returns
 */
const speed = (birds) => new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
const airSpeedVelocity = (bird) => {
  //   return new Bird(bird).airSpeedVelocity;
  return createBird(bird).airSpeedVelocity;
};

/**
 * plumage 계산 로직
 * @param {*} birds
 * @returns
 */
const plumage = (bird) => {
  //   return new Bird(bird).plumage;
  return createBird(bird).plumage;
};
const plumages = (birds) => {
  return new Map(birds.map((b) => [b.name, plumage(b)]));
};

console.log(speed(birds));
/**
     * Spped 결과
     * 
     * Map { 'EuropeanSwallow' => 35,
      'AfricanSwallow1' => 36,
      'AfricanSwallow2' => 32,
      'NorwegianBlueParrot1' => 310,
      'NorwegianBlueParrot2' => 0 }
      ​​​​​at ​​​​​​​​speed(birds)​​​
     * 
     */
console.log(plumages(birds));
/**
     * plumage 결과
     * Map { 'EuropeanSwallow' => 'average',
      'AfricanSwallow1' => 'average',
      'AfricanSwallow2' => 'tired',
      'NorwegianBlueParrot1' => 'scorched',
      'NorwegianBlueParrot2' => 'beautiful' }
      ​​​​​at ​​​​​​​​plumages(birds)
     */
