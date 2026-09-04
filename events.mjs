/*
EventEmitter               
     │
     ├── emit()     → "الحدث حصل"
     │
     └── on()      (listener) → "أنا مهتم بالحدث ده"

*/
import { EventEmitter } from "events";
const event_one = new EventEmitter();
const event_two = new EventEmitter();
// We can create any number of events (objects) using the EventEmitter class.
// Every EventEmitter object has its own listeners and events.
function GAC() {
  console.log("Engine start");
}

function bmv() {
  console.log("Engine start");
}
function audi() {
  console.log("Engine start");
}
function mercedes() {
  console.log("Engine start");
}

event_one.on("let's Go", GAC);
event_one.on(" Go", bmv);
event_one.on("YALA Go", audi);
event_one.on("Come on Suger Dad", mercedes);

// event_one.emit("let's Go");
// event_one.listenerCount("let's Go");

console.log(event_one.listenerCount("let's Go")); // 4
console.log(event_one.eventNames());
