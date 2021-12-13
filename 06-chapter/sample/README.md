- **저자가 가장 많이 사용하는 리팩터링**
  1. 함수 추출하기
  2. 변수 추출하기
  3. 함수 인라인하기
  4. 변수 인라인하기
  5. 함수 선언바꾸기
  6. 변수 이름 바꾸기
  7. 변수 캡슐화하기 (5,6과 연관이 깊다)
  8. 매개변수 객체 만들기
  9. 여러 함수를 클래스로 묶기
  10. 여러 함수를 변환 함수로 묶끼
  11. 단계 쪼개기

---

## 6.1 함수 추출하기

**목적과 구현을 분리하여 합리적으로 코드를 분리하자**

**함수를 짧게 만들면 함수 호출이 많아질까?**

→ 함수가 짧으면 캐싱하기 쉬워서 컴파일러가 최적화 할 때 유리할 떄가 많다.

⇒ 성능 최적화는 항상 일반 지침을 따르는 것이 좋다

1. 하지 마라
2. 아직 하지마라

- **짧은 함수의 이점은 이름이 잘 지어져야만 발휘된다.**

> **절차**
>
> 1. 함수를 새로 만들고 목적을 잘 들어내는 이름을 붙인다.
>    1. 매우 간단해도 목적이 더 잘 드러나는 이름으로 붙일 수 있으면 추출한다
>    2. 이름이 떠오르지 않는다면 추출하면 안된다는 신호이다.
>    3. 중첨 함수를 지원하는 언어는 중첩시킨다.
> 2. 추출할 코드를 원본 함수에서 복사해서 새 함수에 붙인다.
> 3. 추출한 코드에서 원본 함수의 지역 변수를 참조하거나 유효범위를 벗어나느 변수가 없는지 검사한다.
> 4. 변수를 모두 처리하고 컴파일
> 5. 추출 코드 중 새로 만든 함수를 호출하는 문자로 바꾼다
> 6. 비슷한 코드가 존재하는지 확인

### 예시1 : 유효 범위가 벗어나는 변수가 없을 때

```jsx
function printOwing(invoice) {
  let outstanding = 0;

  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
  //미해결 채무 계산
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  //마감일을 기록
  const today = Clock.today();
  // Cock.today는 Clck Wrapper로서 시스템 시계를 감싼다.
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30,
  );
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString("en-US")}`);
}
```

### 예시2 : 지역 변수를 사용할 때

- 매개변수로 넘기면 된다

```jsx
function printOwing(invoice) {
  let outstanding = 0;

  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
  //미해결 채무 계산
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  //마감일을 기록
  recordDueDate(clock, invoice);
}
function recordDueDate(clock, invoice) {
  const today = clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30,
  );
}

function printDetails(invoice, outstanding, console) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString("en-US")}`);
}
```

### 예시3 : 지역 변수를 사용할 때

1. 간단한 경우

   → 변수가 추출된 코드 안에서만 사용

   → 문장 슬라이드하기 를 활용하여 변수 조작을 한곳에서 처리

2. 특이한 경우

   → 변수가 추출된 함수에서 사용

   → 대입된 새 값 반환

```jsx
function printBanner(console) {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

function printDetails(invoice, outstanding, console) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString("en-US")}`);
}

function recordDueDate(clock, invoice) {
  const today = clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30,
  );
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function printOwing(invoice, console, clock) {
  printBanner(console);
  const outstanding = calculateOutstanding(invoice);
  recordDueDate(clock, invoice);
  printDetails(invoice, outstanding, console);
}
```

### 예시3 : 지역 변수의 값을 변경할 때

```jsx
function printBanner(console) {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

function printDetails(invoice, outstanding, console) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString("en-US")}`);
}

function recordDueDate(clock, invoice) {
  const today = clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30,
  );
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function printOwing(invoice, clock) {
  printBanner();
  const outstanding = calculateOutstanding(invoice);
  recordDueDate(clock, invoice);
  printDetails(invoice, outstanding);
}
```

## 6.2 함수 인라인하기

이 책은 목적이 분명히 드러나는 이름의 짤막한 함수를 이용하기를 권한다.

하지만, 쓸데없는 간접 호출은 거슬릴 뿐이다.

→ 간접 호출이 과하면 인라인 대상이 된다.

**과한 간접호출**

```jsx
function getRating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries() {
  return driver.numberOfLateDeliveries > 5;
}
```

**인라인하기**

```jsx
function getRating(driver) {
  return driver.numberOfLateDeliveries > 5;
}
```

> **절차**
>
> 1. 다형 메서드인지 확인
>
>    → 서브 클래스에서 오버라이드하는 경우 인라인 X
>
> 2. 인라인할 함수 호출하는 곳을 모두 찾는다
> 3. 각 호출문을 본문으로 교체
> 4. 교체할 때 마다 테스트한다.
>
>    → 인라인 작업을 한번에 할 필요는 없다.
>
> 5. 함수 정의를 삭제한다.

**핵심**

— 항상 단계를 잘게 나눠서 처리해야 한다.

— 함수를 작게 만들어두면 인라인을 단번에 처리 할 수 있을 때가 많다.

## 6.3 변수 추출하기

**지역 변수 활용**

- 표현식이 너무 복잡해서 어려울 때 활용한다.
- 지역 변수를 쪼개 관리하면 쉬워진다.
- 복잡한 로직을 구성하는 단계마다 이름을 붙인다.
  ⇒ 코드의 목적을 명확하게 드러낼 수 있다.
- 변수 추출은 표현식에 이름을 붙이고 싶다는 뜻이다.
  **⇒ 변수가 아닌 주로 함수로 추출해야한다.**
- 문맥을 넓히면 다른 코드에서 사용 할 수 있으므로, 표현식을 중복 작성하지 않아도 된다.
  ⇒ 중복이 적으면서 의도가 잘 드러나야 한다.

**단점**

- 할일이 늘어난다.
  ⇒ 많이 늘어날 거 같으면, 질의 함수로 바꾸기를 적용할 때까지 둔다
  ⇒ 간단히 처리가능하면 클래스 내에 함수 추출하기를 적용한다.

**예시**

```jsx
function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(basePrice * 0.01, 100);
  return basePrice - quantityDiscount + shipping;
}
```

**예시 Class version**

```jsx
class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }
  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }
  get price() {
    return this.basePrice - this.quantityDiscount - this.shipping;
  }
  get basePrice() {
    return this.quantity * this.itemPrice;
  }
  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }
  get shipping() {
    return Math.min(this.basePrice - 0.1, 100);
  }
}
```

**Class Version**

→ 객체의 장점을 볼 수 있다.

→ 특정 로직과 데이터를 외부에 공유하려 할 떄, 문맥이 되어준다.
