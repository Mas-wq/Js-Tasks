const fs = require("fs");
function read_customer_id(resolve, reject) {
    console.log("read_customer_id");
    fs.readFile(
        "C:\\Node-js-Projects\\projects\\current_customer.txt",
        "utf-8",
        (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        }
    );
}

function get_customer_data(customer_id){
    console.log("get_customer_data :", customer_id);
    return new Promise(
            function(resolve,reject){
                fs.readFile("C:\\Node-js-Projects\\projects\\program1\\all_costomer.txt","utf-8",(err,data)=>{
                    if(err){
                        reject(err);
                    }else{
                        data =JSON.parse(data);
                        let customer=data.filter((item)=> item._id == customer_id);
                        if(customer.length>0){
                            console.log("Customer data found");
                            resolve(customer[0]);
                        }else{
                            reject(new Error("get_customer_data : Customer not found"));
                        }
                    }
                });
        }
    );
}

function write_new_file(customer_data){
    console.log("write_new_file :" ,customer_data);
    return new Promise(
        (resolve, reject)=>
        {
            let flat_object="";
            for(const p in customer_data){
                flat_object+= p + " : " + customer_data[p]+"\n";
            }
            fs.writeFile("C:\\Node-js-Projects\\projects\\program1\\"+ customer_data._id +".txt",flat_object,"utf-8",(err,data)=>{
                if(err){
                    reject(err);
                } else{
                    console.log("New File is created");
                    resolve();
                }
            });

        }
    );
}
function failure(error) {
    console.log("Read file failed");
    console.log(error);
}
// Chaining
new Promise(read_customer_id)
    .then (get_customer_data)
    .then (write_new_file)
    .catch(failure);
/*
                                                      *************************************
                                                      ************  PowerShell RUN ********
                                                      *************************************
                                                      *************************************
                                                      
PS C:\Node-js-Projects> node C:\Node-js-Projects\projects\program1\index.js
read_customer_id
get_customer_data : 660ad77065b6f44dbdb18f91
Customer data found
write_new_file : {
  _id: '660ad77065b6f44dbdb18f91',
  balance: '$2,871.65',
  age: 23,
  name: 'Madden Perez',
  gender: 'male',
  company: 'EXOBLUE',
  email: 'maddenperez@exoblue.com',
  phone: '(814) 489-3335',
  address: '722 Clinton Street, Wright, Idaho, 2480'
}
New File is created

*/
