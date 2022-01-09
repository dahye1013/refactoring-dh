//샘플 데이터
const birds = [
  { name: "EuropeanSwallow", type: "EuropeanSwallow" },
  { name: "AfricanSwallow1", type: "AfricanSwallow", numberOfCoconuts: 2 },
  { name: "AfricanSwallow2", type: "AfricanSwallow", numberOfCoconuts: 4 },
  { name: "NorwegianBlueParrot1", type: "NorwegianBlueParrot", isNailed: false, voltage: 3000 },
  { name: "NorwegianBlueParrot2", type: "NorwegianBlueParrot", isNailed: true, voltage: 50 },
];

/**
 * Speed 계산 로직
 * @param {*} birds
 * @returns
 */
const speed = (birds) => new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
const airSpeedVelocity = (bird) => {
  switch (bird.type) {
    case "EuropeanSwallow":
      return 35;
    case "AfricanSwallow":
      return 40 - 2 * bird.numberOfCoconuts;
    case "NorwegianBlueParrot":
      return bird.isNailed ? 0 : 10 + bird.voltage / 10;
    default:
      return null;
  }
};

/**
 * plumage 계산 로직
 * @param {*} birds
 * @returns
 */
const plumage = (bird) => {
  switch (bird.type) {
    case "EuropeanSwallow":
      return "average";
    case "AfricanSwallow":
      return bird.numberOfCoconuts > 2 ? "tired" : "average";
    case "NorwegianBlueParrot":
      return bird.voltage > 100 ? "scorched" : "beautiful";
    default:
      return "unknown";
  }
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
