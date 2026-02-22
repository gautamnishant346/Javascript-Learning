// async await
// async function always return a promise

//async function greet(){
//    return "Rohit";
//
//    //return new Promise((resolve,reject)=>{
//    //    reject("Rohit");
//    //})
//}
//
//const response = greet()
////console.log(response);
//response.then((data)=>console.log(data))
//.catch((error)=>{
//    console.log("Error: ",error);
//})

//fetch("https://api.github.com/users")
//.then((response)=>response.json())
//.then((data)=>console.log(data));

// await program ko wait krata ha jb tk vo task pura na ho jaye
// await ko hmesha async function ka andar use krna ha taki program freeze na ho

//async function github(){
//
//    try{
//    const response = await fetch("https://api.github.com/users");
//    if(!response.ok){
//       throw new Error("Data is not present");
//    }
//
//    const data = await response.json();
//    //console.log(data);
//
//
//    const parent = document.getElementById("first");
//
//
//    for(let user of data){
//
//        const element = document.createElement("div");
//        element.classList.add("user");
//
//        const image = document.createElement("img");
//        image.src = user.avatar_url;
//
//        const userName = document.createElement("h2");
//        userName.textContent = user.login;
//
//        const anchor = document.createElement("a");
//        anchor.href = user.html_url;
//        anchor.textContent = "Visit Profile";
//
//        element.append(image,userName,anchor);
//        parent.append(element);
//
//        element.addEventListener("click",()=>{
//            getUserDetails(user.login);
//        })
//    }
//    }
//    catch(error){
//        console.log("error");
//    }
//}
//
//    async function getUserDetails(username){
//
//         const res = await fetch(`https://api.github.com/users/${username}`);
//         const userData = await res.json();
//         //console.log(userData.name,userData.created_at);
//
//         const detail = document.getElementById("details");
//
//         detail.style.width = "300px";
//         detail.style.height = "300px";
//         detail.style.marginLeft = "200px";
//         detail.style.margintop = "100px";
//         const name1 = document.createElement("p");
//         name1.textContent = userData.name;
//         name1.style.fontSize = "30px";
//         const img1 = document.createElement("img");
//         img1.src = userData.avatar_url;
//         img1.style.width = "100%";
//         const followers = document.createElement("p");
//         followers.textContent = userData.followers;
//         const following = document.createElement("p");
//         following.textContent = userData.following;
//
//
//         detail.append(name1,img1,followers,following);
//        }
//
//github();
//console.log("Hello Ji Kaise ho");



//const orderDetail = {
//    orderId: 123123,
//    food: ["Pizza","Biryani","Coke"],
//    cost: 620,
//    customer_name: "Nishant",
//    customer_location: "Meerut",
//    restaurant_location: "Delhi"
//}
//
//function placedOrder(orderDetail){
//    console.log(`${orderDetail.cost} Payment is in progress`);
//
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//        if(Math.random()>0.1){
//       console.log("Payment is received and order get placed");
//       orderDetail.status = true;
//       resolve(orderDetail);
//        }
//        else{
//            reject("Payment is failed");
//        }
//    },3000)
//    })
//    
////}
////
////function preparingOrder(orderDetail){
//   console.log(`Your food preparation started of ${orderDetail.food}`);
//
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        if(Math.random()>0.1){
//      console.log("Your order is now prepared");
//      orderDetail.token = 123;
//      resolve(orderDetail);
//        }
//        else{
//            reject("Failed to prepare order");
//        }
//   },3000)
//   })
//   
////}
////
////function pickupOrder(orderDetail){
//    console.log(`Delivery boy is on a way to pickup order from ${orderDetail.restaurant_location}`);
//
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//        if(Math.random()>0.2){
//        console.log("I have picked up the order");
//        orderDetail.received = true;
//        resolve(orderDetail);
//        }
//        else{
//            reject("Order pickup failed");
//        }
//    },3000)
//     })
//    
////}
////
////function deliverOrder(orderDetail){
//    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);
//
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//        if(Math.random()>0.1){
//       console.log("Order delivered successfully");
//       orderDetail.delivery = true;
//       resolve(orderDetail);
//        }
//        else{
//            reject("failed to deliver order");
//        }
//    },3000);
//    })
    
//}
//
//async function ordering(){
//    try{
//   const response1 = await placedOrder(orderDetail);
//   const response2 = await preparingOrder(response1);
//   const response3 = await pickupOrder(response2);
//   const response4 = await deliverOrder(response3);
//   
//   console.log(response4);
//    }
//    catch(error){
//        console.log("Error: ",error);
//    }
//}
//
//ordering();


async function userDetail(params){

    //const comment = await fetch("userComment");
    //const photos = await fetch("userphoto");
    //const chat = await fetch("Chat");

    const [comment,photos,chat] = await Promise.all([fetch("userComment"),fetch("userPhoto"),fetch("chat")]);

    // Promise.all parallel ma chla dega sbko
}