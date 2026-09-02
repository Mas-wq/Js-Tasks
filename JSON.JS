let json_data = `
{
  "name" : "person name",
  "birth_year" : 2000,
  "id": 101,
  "class" : {
    "id": 22,
    "name" : "math"
  }
}
`;

console.log(json_data);
console.log(typeof json_data); // "string"

// Transform the string into a JavaScript object using JSON.parse
let parsed_data = JSON.parse(json_data);
console.log(parsed_data);
console.log(typeof parsed_data); // "object"

// Now we can access the properties of the object
console.log(parsed_data.name);
console.log(parsed_data.class.name);

// Here if you want to convert the object back to a string, you can use JSON.stringify
let back_to_string = JSON.stringify(parsed_data, null, 2);
console.log(back_to_string);
console.log(typeof back_to_string); // "string"
