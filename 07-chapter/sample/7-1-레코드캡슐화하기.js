class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  set name(aString) {
    this._name = aString;
  }
  get name() {
    return this._name;
  }
  get country() {
    return this._country;
  }
  set country(value) {
    this._country = value;
  }
}

export const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

/**
 * 상수 캡슐화하기
 * @returns
 */
export function getRawDataOfOrganization() {
  return organization;
}

// --------------------------------------------------------------

export let customerData = {
  1920: {
    name: "martin",
    id: "1920",
    usages: {
      2016: {
        1: 50,
        2: 55, // 나머지 달 생략
      },
      2015: {
        1: 70,
        2: 63, // 나머지 달 생략
      },
    },
  },
};
const amount = 10;
//쓰기 - customerData[customerID].usages[year][month] = amount;
//읽기
export function compareUsage(customerID, laterYear, month) {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier =
    getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

function setRawDataOfCustomers(arg) {
  customerData = arg;
}

class CustomerData {
  constructor(data) {
    this._data = data;
  }
}

function getCustoemrData() {
  return customerData;
}
export function getRawDataOfCustomers() {
  return customerData._data;
}

setRawDataOfCustomer(customerData);
function setRawDataOfCustomer(arg) {
  customerData = new CustomerData(arg);
}
