// Ex1
/*
let fs = require("fs");

process.nextTick(() => {
  console.warn("nextTick before timer");
});

setTimeout(
  function () {
    fs.readFile("./data.txt", { encoding: "utf-8" }, function (err, data) {
      console.log(data);
    });
    process.nextTick(function () {
      console.warn("nextTick after timer");
    });
  },

  100,
);

process.nextTick(() => {
  console.warn("nextTick after the timer");
});
*/

// Ex2

let fs = require("fs");

process.nextTick(() => {
  console.warn("nextTick before timer");
});

setTimeout(
  function () {
    setImmediate(function () {
      console.warn(" setImmediate: after timer");
    });
    fs.readFile("./data.txt", { encoding: "utf-8" }, function (err, data) {
      console.log(data);
    });
    process.nextTick(function () {
      console.warn("nextTick after timer");
    });
  },

  100,
);

process.nextTick(() => {
  console.warn("nextTick after the timer");
});
