const cloneSymbol = Symbol('clone');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const CloningClass = this.constructor[cloneSymbol] || this.constructor;
    return new CloningClass(this._brand, this._motor, this._color);
  }
}

Car[cloneSymbol] = Car;

export default Car;
