class CarBuilder {
    // Tu código aquí 👇
    constructor() {
      this.year = 0;
      this.model = '';
      this.brand = '';
      this.color = '';
      this.price = 0;
      this.isAvailable = null;
    }
    setYear(year) {
      this.year = year;
      return this;
    }
    setModel(model) {
      this.model = model;
      return this;    
    }
    setBrand(brand) {
      this.brand = brand;
      return this;
    }
    setColor(color) {
      this.color = color;
      return this;
    }
    setPrice(price) {
      this.price = price;
      return this;
    }
    setIsAvailable(is) {
      this.isAvailable = is;
      return this;
    }
    build() {
      return {
        year: this.year,
        model: this.model,
        brand: this.brand,
        color: this.model,
        price: this.price,
        isAvailable: this.isAvailable
      };
    }
  }

  /************************************ */

  const car = new CarBuilder()
  .setYear(2021)
  .setModel("Model X")
  .setBrand("Tesla")
  .setColor("Red")
  .setPrice(50000)
  .setIsAvailable(false)
  .build()

  console.log(car)


  /*
    {
    year: 2021,
    model: 'Model X',
    brand: 'Tesla',
    color: 'Model X',
    price: 50000,
    isAvailable: false
    }
  */