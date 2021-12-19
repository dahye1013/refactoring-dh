import {
  organization,
  getRawDataOfOrganization,
  //
  customerData,
  compareUsage,
  getRawDataOfCustomers,
} from "../sample/7-1-레코드캡슐화하기";

const organizationName = "Acme Gooseberries";

describe("[Chpater07.1 레코드 캡슐화]", () => {
  let amount,
    customerID,
    year,
    month = "";

  beforeEach(() => {
    amount = 10;
    customerID = 1920;
    year = 2016;
    month = 3;
  });

  describe("07-1-1 간단한 레코드 캡슐화", () => {
    test("기본 레코드 - Before Refactoring", () => {
      expect(organization.name).toEqual(organizationName);
    });
    test("상수 캡슐화하기 - After Refactoring", () => {
      expect(getRawDataOfOrganization().name).toEqual(organizationName); //쓰기
    });
  });

  describe("07-1-2 중첩된 레코드 캡슐화", () => {
    test("변수캡슐화", () => {
      getRawDataOfCustomers()[customerID].usages[year][month] = amount; //쓰기
      expect(compareUsage(customerID, year, month).laterAmount).toEqual(amount); //읽기
    });
  });

  //
});
