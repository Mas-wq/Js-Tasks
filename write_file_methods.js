//How to write a file ?
const fs = require("fs");
const file_name="write_customer_data.txt";

/*
 [ way 1] => fs.writeFileSync(file_name,"Hi, i'm Mahmoud Rabie ","utf-8");
  => بتعطل تنفيذ الكود اللي موجود
 Main Thread [main stack] في
 */

/*
[ way 2] => Asynchronous

fs.writeFile(file_name,"Hi, i'm Mahmoud Rabie","utf8",(err)=>{
    if(err){
        console.log(err);
    } else{
        console.log("file is written");
    }
});

 */

/*
 [way 3 ] =>
fs.promises.writeFile(file_name," Hi , welcome back brother " )
.then(
    ()=>{console.log("file is written");},
    (err)=>{console.log(err);
    }
    );
 */


/*
 [way 4] =>
 
 async function write_file (){
    try{
      await  fs.promises.writeFile(file_name," Hi , welcome back brother " );
      console.log("file is written");
      console
    } catch(err){
console.log(err);
    }
};
write_file();

 */
