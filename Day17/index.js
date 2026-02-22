//console.log("Hello world start");


// code

// Promise: Object (iski teen state hoti ha)
// -> Pending
// -> Fullfilled
// -> Reject

// jb hum request marta ha to vo sbsa pahla jata ha pending ma
// Jb vo pending ma ha tb usko read out nhi krna
// jb initially request marege to p1 ma pending chla jayga

//const p1 = fetch("https://api.github.com/users");
// fetch operation ek promise return krka dega
// initially vo pending ma hoga 
// console.log(p1);

// Fullfilled, Reject

//p1.then((response)=>{
//   console.log(response.json());
//})
// actual data bytes ki form ma aata ha usko object ki form ma lana ka liye
// json use krta ha
// response.json() asynchoronous task hota ha mtlb ya bhi ek promise return krega
// mtlb initially pending state ma ha

//const p2 = p1.then((response)=>{
//  return response.json();
//})
//
////console.log(p2);
//p2.then((response)=>{
//   console.log(response);
//})


// Promise create krna
//const p1 = new Promise((resolve,reject)=>{
//
//    resolve({
//        name: "Nishant",
//        age: 20
//    });
//})
////console.log(p1);
//p1.then((response)=>{
//    console.log(response);
//}).catch((error)=>{
//    console.log(error);
//})


// Promise chaining

// agar server respond krra ha to promise fullfilled ki category ma rkha jayga
// reject category ma tb dala jayga jb server sa bat hi na ho paye
//fetch("https://api.github.com/user")
//.then((response)=>{
//
//    if(!response.ok){
//        throw new Error("Data is not present in server");
//    }
//   return response.json();
//})
//.then((data)=>{
//    //console.log(data);
//
//    const parent = document.getElementById("first");
//
//    for(let i=0; i<data.length; i++){
//    const image = document.createElement('img');
//    image.src = data[i].avatar_url;
//    image.style.height = "100px";
//    image.style.width = "100px";
//
//    parent.append(image);
//    }
//})
//.catch((error)=>{
//    const parent = document.getElementById("first");
//    parent.textContent = error.message;
//})



//console.log("Hello world end");


//const j1 = {
//    name: "Nishant",
//    age: 20,
//    address: "Meerut",
//    c: undefined,
//}
//
//// convert to json
//const jsonFormat = JSON.stringify(j1);
//console.log(jsonFormat);


//const jsonFormat = `{
//    "name": "Nishant",
//    "age": 20,
//    "address": "Meerut"
//}`;
//
//// JSON format ko javascript object ma convert
//
//const jsobject = JSON.parse(jsonFormat);
//console.log(jsobject);



// Zomato application

const orderDetail = {
    orderId: 123123,
    food: ["Pizza","Biryani","Coke"],
    cost: 620,
    customer_name: "Nishant",
    customer_location: "Meerut",
    restaurant_location: "Delhi"
}

function placedOrder(orderDetail){
    console.log(`${orderDetail.cost} Payment is in progress`);

    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(Math.random()>0.1){
       console.log("Payment is received and order get placed");
       orderDetail.status = true;
       resolve(orderDetail);
        }
        else{
            reject("Payment is failed");
        }
    },3000)
    })
    
}

function preparingOrder(orderDetail){
   console.log(`Your food preparation started of ${orderDetail.food}`);

   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        if(Math.random()>0.1){
      console.log("Your order is now prepared");
      orderDetail.token = 123;
      resolve(orderDetail);
        }
        else{
            reject("Failed to prepare order");
        }
   },3000)
   })
   
}

function pickupOrder(orderDetail){
    console.log(`Delivery boy is on a way to pickup order from ${orderDetail.restaurant_location}`);

     return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(Math.random()>0.2){
        console.log("I have picked up the order");
        orderDetail.received = true;
        resolve(orderDetail);
        }
        else{
            reject("Order pickup failed");
        }
    },3000)
     })
    
}

function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);

    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(Math.random()>0.1){
       console.log("Order delivered successfully");
       orderDetail.delivery = true;
       resolve(orderDetail);
        }
        else{
            reject("failed to deliver order");
        }
    },3000);
    })
    
}

placedOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail)=>pickupOrder(orderDetail))
.then((orderDetail)=>deliverOrder(orderDetail))
.then((orderDetail)=>{
    console.log(orderDetail);
})
.catch((error)=>{
    console.log("Error: ",error);
})
.finally(()=>{
  console.log("I am doing cleanup");
})