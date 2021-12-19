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


