let apps = ["app1", "app2", "app3", "app4", "app5"];

apps[2] = "desktopApp"; //assigning new value to index 2
console.log(apps);
console.log(apps[2]); //usage of index 2 after reassignment
console.log(apps[apps.length - 1]); //accessing last element using length property);
apps.push(6, 12); //adding new element to the end of the array
console.log(apps);
console.log(apps[5] + apps[6]); //accessing newly added elements and printing their sum
apps.shift(); //removing first element from the array
console.log(apps);
apps.unshift("app1");   // or use pop method.    

