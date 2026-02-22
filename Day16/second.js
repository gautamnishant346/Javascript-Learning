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


function order(){
  return new Promise((resolve,reject)=>{
    console.log("Order received");

    setTimeout(()=>{
       resolve();
    },2000);
  });
}

function cook(){
  return new Promise((resolve,reject)=>{
    console.log("Pizza bn rha ha");

    setTimeout(()=>{
      resolve();
    },2000);
  });
}

function deliver(){
  return new Promise((resolve,reject)=>{
    console.log("Order delivered successfull");

    setTimeout(()=>{
      resolve();
    },2000);
  });
}

order()
.then(cook)
.then(deliver)
.finally(()=>{
  console.log("Process finished");
})