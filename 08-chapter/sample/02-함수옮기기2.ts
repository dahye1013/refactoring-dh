interface IAccountType {
  isPremium: boolean;
  name: string;
}

export class Account {
  public type: IAccountType;
  public _daysOverdrawn: number;

  constructor(accountType: IAccountType, daysOverdrawn: number) {
    this.type = accountType;
    this._daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge(): number {
    if (this.type.isPremium) {
      const baseCharge: number = 10;
      if (this.daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (this.daysOverdrawn - 7) * 0.85;
    } else return this.daysOverdrawn * 1.75;
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

