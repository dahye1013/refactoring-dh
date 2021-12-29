# 8장 함수 옮기기

## 8-1 함수 옮기기

좋은 소프트웨어 설계의 핵심은 모듈화가 얼마나 잘 되어 있는가를 뜻하는 **모듈성**이다.

**모듈성을 높이면?**

- 모듈성은 어딘가를 수정하려고 할 떄 해당 기능과 깊이 관련된 작은 일부만 이해해도 가능하게 해주는 능력이다.

  → 서로 연관된 요소들을 함께 묶고, 연결 관계를 쉽게 찾고 이해할 수 있게해준다.

- 객체 지향 프로그래밍의 핵심 모듈화 컨텍스트는 **클래스**이다.
- 자신이 속한 모듈 A의 요소들보다 다른 모듈 B의 요소들을 더 ㅁ낳이 참조한다면 모듈 B로 옮겨줘야 마땅하다.
  → **캡슐화**가 좋아지면 세부사항에 덜 의지한다.

**함수를 옮길지 말지?**

→ 현재 컨텍스트와 후보 컨텍스트를 둘러보자

## 8-2 필드 옮기기

프로그램의 진짜 힘은 데이터 구조에서 나온다.

→적합한 데이터 구조를 활용하면, 코드는 자연스럽게 단순하고 직관적으로 짜여진다.

⇒ 데이터 구조가 적절치 않음을 깨닫게 되면 곧바로 수정해야한다.

- 한 레코드를 변경하려 할 때 다른 레코드의 필드까지 변경해야 한다면 필드의 위치가 잘못 된 것이다.

**클래스는 함수가 곁들여진 레코드이다.**

→ 접근자 메서드 뒤에 감춰져 있으므로 클래스에곁들여진 함수들은 데이터를 옮기는 작업을 쉽게 해준다.

## 8-3 문장을 함수로 옮기기

중복제거는 코드를 건강하게 하는 가장 효과적인 방법 중 하나다.

→ 반복되면 피호출 함수로 합치는 방법을 궁리한다.

⇒ 수정할 일이 생기면 한 곳만 수정하면 된다.

⇒ 나중에 여러 변형으로 나눠야하는 순간에 `문장을 호출한 곳으로 옮기기`를 적용한다.

## 8-4 문장을 호출한 곳으로 옮기기

함수는 프로그래머가 쌓아 올리는 추상화의 기본 빌딩 블록이다.

→ 여러 곳에서 사용하던 기능이 일부 호출자에게는 다르게 동작해야한다면 둘 이상의 역할을 수행하도록 바뀐다.

⇒ `문장 슬라이드`로 함수의 시작 혹은 끝으로 옮기고 문장을 호출하는 곳으로 리팩토링해야한다.

## 8-5 인라인 코드를 함수 호출로 바꾸기

함수를 방복하는대신 함수 호출로 변경하면 코드를 이해하기 쉬워진다.

→ 이때 인라인 동작을 바뀌지 않아야한다.

→ 인라인 함수 이름을 잘 지었다면 판단에도 도움이 된다.

```jsx
//리팩토링 전
{
  let appliesToMass = false;
  const states = ["MA", "JJ"];
  for (const s of states) {
    if (s === "MA") appliesToMass = true;
  }
}
//리팩토링 후
{
  const states = ["MA", "JJ"];
  const appliesToMass = states.includes["MA"];
}
```

## 8-6 문장슬라이드하기

관련된 코드가 모여있으면 이해하기 쉽다.

가장 흔한 사례는 변수를 선언하고 사용할 때이다.

보통 함수 추출하기 준비 단계로 활용된다.

→ 코드들이 모여있지 않으면 함수 추출하기 어렵다.

## 8-7 반복문 쪼개기

- 반복문 하나에서 두 가지 일을 수행하는 경우가 있다.

  → 반복문을 수정할 떄마다 두가지 일을 모두 잘 이해하고 진행해야 한다.

  ⇒ 반복문을 분리하면 사용하기 쉬워진다.

- 리팩터링과 최적화를 구분하자
  → 반복문을 두번 실행해야하므로 불편해하는 사람도 있지만 최적화는 코드 정리후 수행하면 된다.

## 8-8 반복문을 파이프라인으로 바꾸기

컬렉션 파이프 라인을 처리하면 처리 과정의 일력의 연산으로 표현할 수 있다.

→ 컬렉션을 입력받아 다른 컬렉션을 내뱉는다.

ex) map, filter

## 8-9 죽은코드 제거하기

쓰이지 않는 코드가 있다고 시스템이 크게 느려지지는 않지만,

(최선 컴파일러는 코드를 제거해주기도 한다)

**동작을 이해하는데 걸림돌이 된다**.

- 코드가 더 이상 사용되지 않으면 지워야한다.
  → 혹시 필요해져도 버전 관리 시스템을 활용하면 된다.