const fs = require("fs");
const file_name="customer_data.txt";
//1
//========================================================
//fs.appendFile(file_name," \n I'M Software Devolper " ,(err)=>{
//    if(err){
//        console.log(err);
//    } else{
//        console.log("Append File done successfuly ");
//    }
//});
//========================================================
//2
//========================================================
//fs.promises.appendFile(file_name," \n Hello world") .then(
//    ()=>{console.log("Append File done successfuly ");},
//    (err)=>{console.log(err);}
//    );
//========================================================
//3
//========================================================
//async function add_to_file(){
//try{
//    await fs.promises.appendFile(file_name," \n Hello world","utf-8");
//    console.log("Append File done successfuly ");
//  }catch(err){
// console.log(err);
//   }
// }
// add_to_file();
//========================================================
//4
//========================================================
//fs.appendFileSync();
//========================================================
