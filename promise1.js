const fs = require("fs");
function readcustomers(resolve, reject) {
  fs.readFile(
    "C:\\Node-js-Projects\\projects\\program1\\data.txt",
    "utf-8",
    (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    },
  );
}

function success(data) {
  console.log("Success:", data);
} //  => success
function failure(error) {
  console.error("Failure:", error);
} //  => Failure

// readcustomers(success, failure);
// Promise => هو وعد بتنفيذ كود لم يتم تنفيذه (وصل استلام للكود)
const promise1 = new Promise(readcustomers);
let promise2 = promise1.then(success, failure);
console.log("last line of code"); // executed first because of async nature of promise
