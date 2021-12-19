import {
  organization,
  getRawDataOfOrganization,
  //
  customerData,
  compareUsage,
} from "../sample/7-1-레코드캡슐화하기";

const organizationName = "Acme Gooseberries";

describe("[Chpater07.1 레코드 캡슐화]", () => {
  describe("07-1-1 간단한 레코드 캡슐화", () => {
    test("기본 레코드 - Before Refactoring", () => {
      expect(organization.name).toEqual(organizationName);
    });
    test("상수 캡슐화하기 - After Refactoring", () => {
      expect(getRawDataOfOrganization().name).toEqual(organizationName); //쓰기
    });
  });

  describe("07-1-2 중첩된 레코드 캡슐화", () => {
    test("기본 레코드 - Before Refactoring", () => {
      const amount = 10;
      const customerID = 1920;
      const year = 2016;
      const month = 3;
      customerData[customerID].usages[year][month] = amount; //쓰기
      expect(compareUsage(customerID, year, month).laterAmount).toEqual(amount);
    });
  });

  //
});
