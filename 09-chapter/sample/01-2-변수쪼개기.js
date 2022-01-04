{
  //1. inputValue 쪼개기
  //2. 변수 이름 바꾸기
  const discount = (OriginalinputValue, quantity) => {
    //매개 변수는 call-by-value 방식 -> 호출자에 영향 없음

    let result = OriginalinputValue; //입력값에 기초하여 결과값을 누적 계산 사실을 명시적으로 표현
    if (inputValue > 50) result = result - 2;
    if (quantity > 100) result = result - 1;
    return result;
  };
  console.log(discount(40, 90));
  console.log(discount(70, 90));
  console.log(discount(70, 110));
}
