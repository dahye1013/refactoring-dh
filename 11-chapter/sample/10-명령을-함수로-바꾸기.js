class ChargeCalculator {
  consturoctor(customer, usage, provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }
  //[함수선언바꾸기]
  //- 생성자 전달 모든 데이터 주 메소드로 이동
  //- 필드 대신 전달받은 매개변수 사용
  charge(customer, usage, provider) {
    const baseCharge = customer * usage; //보조함수 인라인
    return baseCharge + provider;
  }
}

const charge = (customer, usage, provider) =>
  new ChargeCalculator(customer, usage, provider).charge(
    customer,
    usage,
    provider
  );

//호출자
const monthCharge = charge(customer, usage, provider).charge;
