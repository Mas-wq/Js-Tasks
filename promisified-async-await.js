const fs = require("fs");
function failure(error) {
  console.log("Read file failed");
  console.log(error);
}

async function process_customer (){
  let customer_id= await fs.promises.readFile("C:\\Node-js-Projects\\projects\\current_customer.txt", "utf-8")
  console.log(customer_id);  //     <==========================================
  let customer_data= await  fs.promises.readFile("C:\\Node-js-Projects\\projects\\program1\\all_costomer.txt", "utf-8")
  customer_data = JSON.parse(customer_data);
  let customer = customer_data.filter((item) => item._id == customer_id);
  if (customer.length > 0) {
    console.log(customer[0]);    //     <==========================================
    await fs.promises.writeFile("C:\\Node-js-Projects\\projects\\program1\\" + customer[0]._id + ".txt",JSON.stringify(customer[0], null, 2),"utf-8");
    console.log("new file is created");
  } else {
    failure(new Error("get_customer_data: customer not found"));
  }
}
process_customer();
console.log("Last line of code ");      //     <==========================================

// بص يا صديقي ده لينك بوست لينكدان الخاص بهذه الجزئيه مهمه جدا عامل شرح حلو ليها خش شوفه ==> [https://lnkd.in/p/ei-GKrkW]










