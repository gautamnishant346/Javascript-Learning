// Callback hell

function order(callback){
    console.log("Order received");

    setTimeout(()=>{
      callback();
    },2000)
}

function cook(callback){
  console.log("Burger bn rha ha");

  setTimeout(()=>{
     callback();
  },2000)
}

function deliver(){
    console.log("Burger deliver");
    setTimeout(()=>{

    })
}

order(()=>{
  cook(()=>{
     deliver();
  });
});