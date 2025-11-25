/*

let object = {};

object.name = "Ali";
object.info = "car";
object.prtintinfo = function () {
  console.log(this.name + " has a " + this.info);
};
object.prtintinfo(); // we use a dot notation to acess the properties and methods of the object

// we have another way to acess the properties and methods of the object using bracket notation
let object2 = {};
object2["name"] = "Ahmed";
object2["info"] = "bike";
console.log(object2["name"] + " has a " + object2["info"]);
let prop = "info";
console.log(object2[prop]); // Reading property using a variable

//write
object2["name"] = "Omar";
console.log(object2["name"]);


*/

// Constructor Function

// Private if u want then don't use this keyword

let itemname = "phone";

function Person(name, age, salary, job, city, country) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.job = job;
  this.city = city;
  this.country = country;
  this.print = function () {
    let info =
      this.name +
      " is " +
      this.age +
      " years old, works as a " +
      this.job +
      " in " +
      this.city +
      ", " +
      this.country +
      " and earns $" +
      this.salary;
    console.log(info);
  };
}

let Person1 = new Person(
  "Mahmoud",
  "20",
  "20000",
  "Back-end dev",
  "Cario",
  "Egypt"
);
Person1.print();
console.log(Person1);
