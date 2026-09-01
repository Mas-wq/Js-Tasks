let person = {
  name: "ali",
  age: 20,
  class: {
    name: "class 1",
    teacher: "Mr/ali",
  },
};

let new_person = { ...person };
new_person.name = "ahmed";
new_person.age = 25;
new_person.class.name = "class2";
new_person.class.teacher = "Mr/ahmed";

console.log(person,person.class);
console.log(new_person,new_person.class);


/*

we learn that when we use the spread operator to copy an object, it creates a shallow copy.
This means that while the top-level properties are copied, nested objects (like `class` in this case) are still referenced. 
Therefore, changes made to the nested object in `new_person` also affect the original `person` object. 

*/
