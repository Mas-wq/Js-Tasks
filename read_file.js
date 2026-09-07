// 4 ways to read file

const fs = require("fs");
const file_name = "current_customer.txt";
/*
[ way 1]:  // بتوقف تنفيذ الكود كله لحد ما قراءه الملف تخلص
let data = fs.readFileSync(file_name);
console.log(data);
data = fs.readFileSync(file_name, "utf-8");
console.log(data);
=>Here the result can be:
=> decimal
    Buffer(24) [54, 54, 48, 97, 100, 55, 55, 48, 54, 53, 98, 54, 102, 52, 52, 100, 98, 100, 98, 49, 56, 102, 57, 49, buffer: ArrayBuffer(8192), byteLength: 24, byteOffset: 256, length: 24, Symbol(Symbol.toStringTag): 'Uint8Array']
=> hexadecimal
   <Buffer 36 36 30 61 64 37 37 30 36 35 62 36 66 34 34 64 62 64 62 31 38 66 39 31>
*/
// ===================================================================================
/*

 way [2] => Async [useing callback function]
 =>  OSهنا الفانكشن دي تتواصل مع
 لان هو اللي بيقرا الفايل وبعدين يجي رد
 من نظام تشغيل ان القراءه تمت
 ويبدأ يبعت لينا كول باك بتاعته
 i/oوساعتها الكول باك دي بتروح لل كيو بتاع ال
ولما يجي دور علي كول باك دي يتم تنفيذ الكول باك دي وبس يا عزيزي

 fs.readFile(file_name,"utf-8",(err,data)=>{
    if(err){
        console.error("Application Error");
    } else{
        console.log("Application Working successfuly");
    }
});

 */

/*
[way 3] => promises

 fs.promises.readFile(file_name,"utf8") .then(
        (data)=>{console.log(data);},
        (err)=>{console.error("Application Error");}
        );
 */

/*

 [way 4] => async,await

  async function Customer_process(){
    try{
        let data = await  fs.promises.readFile(file_name,"utf8");
        console.log(data);
    } catch(err){
        console.log(err);
    }
}
Customer_process();

 */
