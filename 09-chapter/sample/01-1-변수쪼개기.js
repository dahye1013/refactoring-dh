{
  const scenario = {
    primaryForce: 100,
    secondaryForce: 10,
    mass: 10,
    delay: 40,
  };

  function distanceTravelled(scenario, time) {
    let result;
    //(첫 번째 대입)
    //1. 용도에 적합한 '변수 이름 바꾸기'
    //2. const로 다시 대입하지 못하도록 방지
    const primaryAccleration = scenario.primaryForce / scenario.mass; // (a = F / m)
    let primaryTime = Math.min(time, scenario.delay);
    result = 0.5 * primaryAccleration * primaryTime ** 2;
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) {
      //(두 번째 대입)
      //1. 용도에 적합한 '변수 이름 바꾸기'
      //-> 변수명이 아예 사라진다.
      let secondaryAccleration = primaryAccleration * scenario.delay;
      primaryAccleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
      result += secondaryAccleration * secondaryTime + 0.5 * primaryAccleration * secondaryTime ** 2;
    }
    return result;
  }

  console.log(distanceTravelled(scenario, 100));
}
