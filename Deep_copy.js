let person = {
  name: "ali",
  age: 20,
  class: {
    name: "class 1",
    teacher: "Mr/ali",
  },
};

let new_person = structuredClone(person);
new_person.name = "ahmed";
new_person.age = 25;
new_person.class.name = "class2";
new_person.class.teacher = "Mr/ahmed";

console.log(person, person.class);
console.log(new_person, new_person.class);

/*

we learn that when we use the structuredClone function to copy an object, it creates a deep copy.
This means that all levels of the object are copied, including nested objects. 
Therefore, changes made to the nested object in `new_person` do not affect the original `person` object.

*/
