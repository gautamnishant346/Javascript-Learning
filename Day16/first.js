// Zomato application

const orderDetail = {
    orderId: 123123,
    food: ["Pizza","Biryani","Coke"],
    cost: 620,
    customer_name: "Nishant",
    customer_location: "Meerut",
    restaurant_location: "Delhi"
}

function placedOrder(orderDetail,callback){
    console.log(`${orderDetail.cost} Payment is in progress`);

    setTimeout(()=>{
       console.log("Payment is received and order get placed");
       orderDetail.status = true;
       callback(orderDetail);
    },3000)

}

function preparingOrder(orderDetail,callback){
   console.log(`Your food preparation started of ${orderDetail.food}`);

   setTimeout(()=>{
      console.log("Your order is now prepared");
      orderDetail.token = 123;
      callback(orderDetail);
   },3000)
}

function pickupOrder(orderDetail, callback){
    console.log(`Delivery boy is on a way to pickup order from ${orderDetail.restaurant_location}`);

    setTimeout(()=>{
        console.log("I have picked up the order");
        orderDetail.received = true;
        callback(orderDetail);
    },3000)
}

function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);

    setTimeout(()=>{
       console.log("Order delivered successfully");
       orderDetail.delivery = true;
    },3000);
}

//placedOrder(orderDetail, ()=>{
//    preparingOrder();
//})

 // callback hell
placedOrder(orderDetail, (orderDetail)=>{
   preparingOrder(orderDetail, (orderDetail)=>{
    pickupOrder(orderDetail, (orderDetail)=>{
        deliverOrder(orderDetail);
    });
   });
});

// const callback = ()=>{
//     preparingOrder();
// }
