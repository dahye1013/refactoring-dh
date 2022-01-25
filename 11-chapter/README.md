# 11장 API 리팩토링

좋은 API는 **데이터를 갱신하는 함수**와 **그저 조회만하는 함수**를 명확하게 구분한다.

- 두 기능이 섞여 있다면?
  → `**질의 함수와 변경 함수 분리하기**`를 적용하여 갈라야 한다,
- 값 하나 떄문에 여러 개로 나뉜 함수
  → `**함수 매개 변수화하기**`를 통해 합칠 수 있다.
- 어떤 매개변수는 그저 함수의 동작 모드를 전환하는 용도로만 쓰이는 경우,
  →이럴 떄는 **`플래그 인수 제거하기`**를 적용하면 좋다.
- 데이터 구조가 함수 사이를 건너 다니면서 필요 이상으로 분해 될 때
  → `**객체 통채로 넘기기`\*\*
  → 상황이 바뀌면 `**질의 함수로 바꾸기**`, 질의함수를 `**매개변수로 바꾸기로 균형점**`을 바꾼다,
- 클래스는 대표적인 모듈이다. 내가 만든 객체가 되도록 불변이길 원한다면?
  → **`세터제거하기`**
- 새로운 객체를 만들어 반환하려 하는데, 생성자 능력만으로 부족할 때?
  → `**생성자를 팩터리 함수로 만들기**`
- 수많은 데이터를 받는 복잡한 함수를 잘게 쪼개는 방법
  **→ `함수를 명력문으로 바꾸기`**
  **⇒** 나중에 객체로 변환하여 함수 추출하기 편해진다.
  함수가 단순화되어 명령 객체가 필요 없어지면, `**명령을 함수로 바꾸기**` 로 함수로 되돌릴 수 있다.

---

## 11.1 질의 함수와 변경 함수 분리하기

- 외부에서 관찰 할 수 있는 **겉보기 부수효과**가 전혀 없이 값을 반환해주는 함수를 추구해야한다

  → 겉보기 부수효과가 있는 함수와 없는 함수를 명확히 구분하는 것이 좋다.

  ⇒ 질의 함수는(읽기 함수)는 모두 부수효과가 없어야 한다는 규칙

  - **명령-질의(command-query separation)이라고도 한다.**

- 값을 반환하면서 부수효과가 있는 함수를 발견하면, 상태를 변경하는 부분과 질의하는 부분을 무조건 분리하는 것이 좋다!

```jsx
//리팩토링 전
{
  function getTotalOutstandingAndSendBill() {
    const result = customer.invoices.reduce((total, each) => each.amount + total, 0);
    sendBill();
    return result;
  }

  function sendBill() {
    emailGateway.send(formatBill(customer));
  }
}
//리팩토링 후 - 부수효과 제거
{
  function getTotalOutstandingAndSendBill() {
    const result = customer.invoices.reduce((total, each) => each.amount + total, 0);
  }

  function sendBill() {
    emailGateway.send(formatBill(customer));
  }
}
```

## 11.2 함수 매개변수화하기

- 두 함수의 로직이 아주 비슷하고, 리터럴 값만 다르다면?
  → 다른 값만 매개변수로 받아 처리하는 함수를 하나로 합쳐서 중복을 없앤다.
  ⇒ 함수의 유용성이 커진다.

```jsx
//리팩토링 전
{
  function tenPercentRaise(aPerson) {
    aPerson.salary = aPerson.salary.multiply(1.1);
  }

  function fivePercentRaise(aPerson) {
    aPerson.salary = aPerson.salary.multiply(1.05);
  }
}
//리팩토링 후 - 다른 값만 매개변수 처리
{
  function raise(aPerson, factor) {
    aPerson.salary = aPerson.salary.multiply(1 + factor);
  }
}
```
