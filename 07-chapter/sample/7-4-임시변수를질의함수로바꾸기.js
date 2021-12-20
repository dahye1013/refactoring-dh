class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }
  get price() {
    //1.읽기전용 var -> const
    // const basePrice = this.basePrice;
    // const discountFactor = 0.98;
    // if (this.basePrice > 1000) discountFactor -= 0.03;

    return this.basePrice * this.discountFactor;
  }

  //2.Getter로 추출
  get basePrice() {
    return this._quantity * this._item.price;
  }

  get discountFactor() {
    var discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return discountFactor;
  }
}
