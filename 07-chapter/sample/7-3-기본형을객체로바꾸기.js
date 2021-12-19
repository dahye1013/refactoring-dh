class Priority {
  toString() {
    return this._value;
  }

  constructor(value) {
    this._value = value;
  }
  toString() {
    return this._value;
  }
}

export class Order {
  constructor(data) {
    this._priority = new Priority(data.priority);
  }

  // 변수캡슐화
  get priority() {
    return this._priority;
  }

  get priorityString() {
    return this._priority.toString(); //우선순위를 표현하는 문자열 - 함수 선언바꾸기
  }

  set priorityString(value) {
    this._priority = new Priority(value);
  }
}

const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

//클라이언트 코드
export const highPriorityCount = orders.filter((o) =>
  o.priority.higherThan(new Priority("normal")),
).length;
