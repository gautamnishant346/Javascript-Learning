// function

//function greeting(){
//    console.log("Hello Coder Army");
//    return 10;
//}
//greeting();

// function addNumber(num1,num2,num3=0,num4=0){
//    const sum = num1+num2+num3+num4;
//    console.log(sum);
// }

// rest operator
//function addNumber(...num){     // rest operator array create kr deta ha
//    let sum = 0;
//    for(let n of num){
//        sum+=n;
//    }
//    console.log(sum);
//}

//addNumber(3,4);
//addNumber(6,7);
//addNumber(6,7,8);
//addNumber(6,7,8,9);
//addNumber(7,8,12,11,12,41,12);

//console.log(greeting());

//const arr = [10,20,30,40,50];
//const arr2 = [30,70,90];
//const ans = [...arr, ...arr2];  //spread operator array/object ko khol deta ha
//console.log(ans);

// rest operator tb use hota jb bahut sari values ko catch krna ha

//const [first,second, ...num] = arr;   // bchi hui values ko num catch krlega
//console.log(first,second,num);


// function expression

//console.log(addNumber(3,4));
// is function ma hum pahla bhi call kr skta ha
//function addNumber(num1,num2){
//    return num1+num2;
//}


//console.log(addNumber(2,5));
// is function ma hum pahla call nhi kr skta 

//const addNumber = function(num1,num2){
//   return num1+num2;
//}
//console.log(addNumber(2,5));


// arrow function
// ()=>  function keyword nhi likhta isma

//const addNumber = (num1,num2)=>{
//  return num1+num2;
//}

//let arr = [10,11,19,7,50];
//arr.sort((a,b)=>a-b);    // arrow function
//console.log(arr);
// agar hme sirf kuch return krana ha to: no curly brackets, no return keyword

//const addNumber = (num1,num2)=>num1+num2;

// if we have only single parameter, no need of this ()
//const squareNumber = num=> num*num;

//console.log(addNumber(12,67));
//console.log(squareNumber(6));


// const greeting = ()=> {
//   return {
//     name: "Nishant",
//     age: 20
//   }
// }

// agar => ka bad {} ha to vo expect krega ki iska andar return lika ho
// object wala case ko handle krna ka liye () use krenge
//const greeting = ()=> ({name: "Nishant",age: 20});
//
//console.log(greeting());


// IIFE: immediately invoked function

// (function greeting(){
//     console.log("Hello ji");
// })();
// // ()()  first () ka andar function bnaya second () sa call kiya

// (()=>{
//     console.log("Javascript");
// })();



// callback function
/* 
  A callback function in javascript is a function passed as an argument to
  another function,often called a higher order function,to execute the
  callback function at a specific point during its operation, typically
  after a particular task is completed.
*/

// function greet(){
//     console.log("Hello ji");
// }
// function dance(){
//     console.log("I am dancing");
// }

// function meet(callback){
//     console.log("I am going to meet someone");
//     // greet(); hardcode nhi krna (Reusable bnana ha)
//     callback();
//     console.log("I have finished meeting");
// }

// meet(greet);
// meet(dance);

//function blinkitOrderPlaced(){
//    console.log("We have started packing your order");
//}
//
//function zomatoOrderPlaced(){
//    console.log("We have started preparing your food");
//}
//
//function payment(amount,callback){
//    console.log(`${amount} payment has initialized`);
//    console.log("Payment is received");
//    callback();
//}

//payment(500,zomatoOrderPlaced);
//payment(399,blinkitOrderPlaced);


//function greet(name,callback){
//    console.log("Hello "+ name);
//    callback();
//}
//
//function sayBye(){
//    console.log("Bye Nishant");
//}
//
//greet("Nishant",sayBye);



//function greet(name,callback){
//    console.log("Hello " + name);
//    callback();
//}
//
// greet("Riya", () => {
//    console.log("Arrow function in callback"); 
// });


function one(name,callback){
    console.log("Hello " + name);
    callback();
}

one("Nishant", ()=>console.log("Bye Bhai"))