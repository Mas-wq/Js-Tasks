// Create a Function return object (car) .
function createcar(manufacturer, model, capacity, tech, power, torque, color) {
    let car = {
      manufacturer: manufacturer,
      model: model,
      motor_capacity: capacity,
      motor_tech: tech,
      motor_power: power,
      motor_torque: torque,
      color: color,

      printinfo: function () {
        let info =
          "Manufacturer : " +
          this.manufacturer +
          "\n Model : " +
          this.model +
          " \n Motor capacity :" +
          this.motor_capacity +
          "\n Motor tech : " +
          this.motor_tech +
          "\n Motor Power : " +
          this.motor_power +
          "\n Motor Torque : " +
          this.motor_torque +
          "\n Color :" +
          this.color;
        console.log(info);
        console.log("==================================");
      },
    };
    return car;
  }

  let car1 = createcar(
    "Toyota",
    "Camry",
    "2.5L",
    "VVT-i",
    "203hp",
    "184 lb-ft",
    "Blue"
  );
  let car2 = createcar(
    "Honda",
    "Accord",
    "1.5L",
    "VTEC",
    "192hp",
    "192 lb-ft",
    "Red"
  );
  let car3 = createcar(
    "Ford",
    "Mustang",
    "5.0L",
    "V8",
    "450hp",
    "410 lb-ft",
    "Black"
  );

  car1.printinfo();
  car2.printinfo();
  car3.printinfo();
