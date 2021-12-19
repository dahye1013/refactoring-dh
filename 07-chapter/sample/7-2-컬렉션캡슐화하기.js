class Person {
  constructor(name) {
    this._name = name;
    this._course = [];
  }
  get name() {
    return this._name;
  }
  get course() {
    return this._course;
  }
  set course(aList) {
    this.course = aList;
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() {
    return this._name;
  }
  get isAdvanced() {
    return this._isAdvanced;
  }
}

// Person이 제공하는 수업 컬렉션 수업 정보는 얻는다.
const aPerson = new Person();
const numAdvancedCourses = aPerson.course.filter((c) => c.isAdvanced).length;

/**
 * 필드가 접근자 메소드로 보호 받고 있으나
 * 세터를 이용해서 컬렉션을 수정 할 수 있다.
 * 하위 코드 방식으로 컬렉션을 마음대로 수정할 수 있다.
 */
const basicCourseNames = readBasicCourse(fileName);

for (const name of basicCourseNames(filename)) {
  aPerson.course.push(new Course(name, false));
}
