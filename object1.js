//  object introduction  //

let car = {
  manufacturer: "Toyota",
  model: "Camry",
  motor_capacity: 1500,
  motor_tech: "VVT-i",
  motor_power: 160,
  motor_torque: 200,
  color: "Red",

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
car.printinfo();
