// let math = require("./ourmath"); // inmporting ourmath.js

// console.log(math.fact(5));
// console.log(math.circ(5));

// bulit in modules
let os = require("os");

console.log("OS: ", os.platform(), os.arch());
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.uptime() / 60 / 60);
