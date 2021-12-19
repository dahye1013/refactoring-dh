import { organization } from "../sample/7-1-레코드캡슐화하기";

const organizationName = "Acme Gooseberries";

describe("[Chpater07.1 레코드 캡슐화]", () => {
  test("", () => {
    let result = `<h1>${organization.name}</h1>`; //읽기
    organization.name = organizationName; //쓰기
  });
});
