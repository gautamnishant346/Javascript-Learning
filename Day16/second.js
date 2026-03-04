// Callback hell

//function order(callback){
//    console.log("Order received");
//
//    setTimeout(()=>{
//      callback();
//    },2000)
//}
//
//function cook(callback){
//  console.log("Burger bn rha ha");
//
//  setTimeout(()=>{
//     callback();
//  },2000)
//}
//
//function deliver(){
//    console.log("Burger deliver");
//    setTimeout(()=>{
//
//    })
//}
//
//order(()=>{
//  cook(()=>{
//    deliver(()=>{
//      
//    })
//  });
//})


//function order(){
//  return new Promise((resolve,reject)=>{
//    console.log("Order received");
//
//    setTimeout(()=>{
//       resolve();
//    },2000);
//  });
//}
//
//function cook(){
//  return new Promise((resolve,reject)=>{
//    console.log("Pizza bn rha ha");
//
//    setTimeout(()=>{
//      resolve();
//    },2000);
//  });
//}
//
//function deliver(){
//  return new Promise((resolve,reject)=>{
//    console.log("Order delivered successfull");
//
//    setTimeout(()=>{
//      resolve();
//    },2000);
//  });
//}
//
//order()
//.then(cook)
//.then(deliver)
//.finally(()=>{
//  console.log("Process finished");
//})





// Callback hell
//function order(callback){
//  console.log("Order Received");
//
//  setTimeout(()=>{
//    callback();
//  },2000);
//}
//function cook(callback){
//  console.log("Khana bn rha ha");
//
//  setTimeout(()=>{
//    callback();
//  },2000);
//} 
//function deliver(callback){
//  console.log("Delivered successfull");
//
//  setTimeout(()=>{
//    callback();
//  },2000);
//}
//function feedback(){
//  console.log("Good Food");
//
//  setTimeout(()=>{
//
//  },1000);
//}
//
//order(()=>{
//  cook(()=>{
//    deliver(()=>{
//      feedback()
//    });
//  })
//});


//function calculate(num1,num2,callback){
//  callback(num1,num2);
//}
//function add(num1,num2,callback){
//  let num3;
//  num3 = num1+num2;
//  console.log("Addition is : ",num3);
//
//  setTimeout(()=>{
//   callback(num1,num2);
//  },2000);
//}
//function mult(num1,num2){
// let num4 = num1*num2;
// console.log("Multiplication is : ",num4);
//}
//
//calculate(2,90,()=>{
//  add(2,90,()=>{
//    mult(2,90)
//  })
//});


//function payment(callback){
//  console.log("Payment is Done");
//
//  setTimeout(()=>{
//   callback()
//  },2000);
//}
//function order(callback){
//  console.log("Order Received");
//
//  setTimeout(()=>{
//    callback();
//  },2000);
//}
//function cook(callback){
//  console.log("Food is making");
//
//  setTimeout(()=>{
//    callback();
//  },2000);
//}
//function deliver(){
//  console.log("Order Delivered Successfully");
//}
//
//payment(()=>{
//  order(()=>{
//    cook(()=>{
//      deliver()
//    })
//  })
//});