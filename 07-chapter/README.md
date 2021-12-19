## 들어가며

- **모듈을 분리하는 가장 중요한 기준?**

  ⇒ 드러내지 않아야 할 비밀을 얼마나 잘 숨기느냐에 있다.

  - 대표적인 방법
    1. 레코드 캡슐화하기
    2. 컬렉션 캡슐화하기

- **클래스는 본래 정보를 숨기는 용도로 설계 되었다.**

  - 여러 함수를 클래스에 묶기(6.9장)
  - 클래스 추출하기(7.5장)
  - 클래스 인라인하기(7.6장)

- **클래스는 연결 관계를 숨기는 데도 유용하다**

  - 위임 숨기기(7.7장)
    → 하지만, 너무 많이 숨기면 인터페이스가 비대해진다.
    ⇒ 중개자 제거하기(7.8장)을 이용할 수 있다.

- **가장 큰 캡슐화 단위는 클래스와 모듈이지만 함수도 구현을 캡슐화 한다.**
  → 알고리즘을 통째로 바꿔야 할 떄가 있는데, 함수 추출하기(6.1장)로 알고리즘 전체를 함수 하나에 담은 뒤 알고리즘 교체하기(7.9장) 에 적용하면 된다.

## 7.1장 레코드 캡슐화하기

대부분의 프로그래밍 언어는 데이터 레코드는 표현하는 구조를 제공한다.

→ 직관적인 방식으로 묶으면 각각을 취급할 때보다 의미있는 단위로 전달한다.

**단순한 레코드의 단점**

→ 값을 명확히 구분해야 하는 점이 번거롭다.

⇒ 객체를 사용하면 어떻게 저장했는지 숨긴 채 각 메서드로 제공가능하다.

**레코드 두가지 구조**

1. 필드 이름을 노출하는 형태
2. 원하는 이름을 쓸 수 있는 형태

   → 주로 라이브러리에서 해쉬, 맵, 해쉬맵, 딕셔너리, 연관 배열로 제공한다.

- 코드를 작성하나보면 중첩된 리스트나 해쉬맵을 받아서 JSON이나 XML 포멧으로 직렬화 할 떄가 많다.
  ⇒ 이런 구조 역시 캡슐화 할 수 있다.
  ⇒ 데이터 수정이 쉬워진다.

> **절차**
>
> 1. 레코드를 담은 변수를 캡슐화 한다.
>
>    → 레코드를 캡슐화하는 함수 이름을 검색하기 쉽게 지어준다.
>
> 2. 레코드를 감싼 단순한 클래스로 해당 변수의 내용을 교체한다.
> 3. 테스트한다.
> 4. 원본 레코드 대신 새로 정의한 클래스 타입의 객체를 반환하는 함수들을 새로 만든다.
> 5. 레코드를 반호나하는 예전 함수를 사용하는 코드를 새 함수를 사용하도록 바꾼다.
> 6. 클래스에서 원본 데이터를 반환하는 접근자와 원본 레코드를 반환하는 함수들을 제거한다.
> 7. 테스트한다.
> 8. 레코드의 필드도 데이터 구조인 중첩 구조라면 레코드 캡슐하기를 재귀적으로 적용한다.

## 7.2 컬렉션 캡슐화하기

**가변데이터 캡슐화 장점**

- 데이터 구조가 언제 어떻게 수정되는지 파악하기 쉽다.
- 필요한 시점에 데이터 구조를 변경하기 쉽다.

**클래스 컬렉션**

— 유의할 점 : 컬렉션 변수 접근을 캡슐화하면서 게터가 컬렉션을 반환하면, 컬렉션 원소가 바뀐다.

- **변경방식 -** 컬렉션을 감싼 클랙스에 add() , remove() 와 같은 컬렉션 변경자 메서드를 만든다.
- 컬렉션 게터가 원본 컬렉션을 반환하지 않도록 만들어서 실수 방지
  - 컬렉션을 읽기 전용으로만 사용한다.
    → 이터레이터나 열거형 객체 기반 라이브러리도 유사한 방법을 사용한다.
    → 컬렉션 게터를 제공하되 내부 컬렉션 복제본을 반환하도록 한다.