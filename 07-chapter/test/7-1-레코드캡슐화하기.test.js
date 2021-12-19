import {
  organization,
  getRawDataOfOrganization,
} from "../sample/7-1-레코드캡슐화하기";

const organizationName = "Acme Gooseberries";

describe("[Chpater07.1 레코드 캡슐화]", () => {
  test("기본 레코드", () => {
    let result = `<h1>${organization.name}</h1>`; //읽기
    expect(organization.name).toEqual(organizationName); //쓰기
  });
  test("상수 캡슐화하기", () => {
    let result = `<h1>${organization.name}</h1>`; //읽기
    expect(getRawDataOfOrganization().name).toEqual(organizationName); //쓰기
  });
});
