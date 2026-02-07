//function addNumber(num1,num2,num3=0,num4=0){
//   const sum = num1+num2+num3+num4;
//   console.log(sum);
//
//}
//
//addNumber(6,7);
//addNumber(6,7,8);
//addNumber(6,7,8,9);
//addNumber(7,2,4,9,1,6,4,5,12);

// rest operator
//function addNumber(...num){
//    //console.log(num);
//    let sum = 0;
//    for(let n of num){
//        sum+=n;
//    }
//    console.log(sum);
//}
//
//addNumber(6,7);
//addNumber(6,7,8);
//addNumber(12,3,7,2,3,1);

//const arr = [10,20,30,40];
//const arr2 = [7,6,5,10];
//const ans = [...arr,...arr2];
//console.log(ans);

//const [first,second, ...num] = arr;
//console.log(first,second,num);

//console.log(addNumber(2,9));
//function addNumber(num1,num2){
//    return num1+num2;
//}

//console.log(addNumber(2,5));
//const addNumber = function(num1,num2){
//    return num1+num2;
//}
//console.log(addNumber(2,5));

// arrow function
//const addNumber = (num1,num2)=>num1+num2;

//console.log(addNumber(3,4));

// if we have single parameter, no need of this ()
//const squareNumber = num=>num*num;
//
//console.log(squareNumber(8));

//const greet = ()=>({name: "Nishant",age: 20});
//console.log(greet());

// IIFE: immediately invoked function

//(function greeting(){
//    console.log("Hello ji");
//})();
//
//(()=>{
//    console.log("Arrow function");
//})();


// callback function

//function greet(){
//    console.log("Hello ji");
//}
//function dance(){
//    console.log("I am dancing");
//}
//
//function meet(callback){
//    console.log("I am going to meet someone");
//    callback();
//    console.log("I have finished");
//}

//meet(greet);
//meet(dance);

//function greet(name,callback){
//    console.log("Hello "+name);
//    callback();
//}
//
//
//function bye(){
//    console.log("bye");
//}
//
//greet("Nishant",bye);

function zomatoOrderPlaced(){
    console.log("We have started preparing your food");
}

function blinkitOrderPlaced(){
    console.log("We have packing your food");
}

const payment = (amount,callback)=>{
    console.log(`${amount} payment has initialized`);
    console.log("Payment is received");
    callback();
}

payment(733,zomatoOrderPlaced);
//payment(733,blinkitOrderPlaced);