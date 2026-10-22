//function add(num1,num2){
//  console.log(num1+num2);
//}
//add(12,17);

function add(...nums){
    let sum = 0;
    for(let num of nums){
        sum += num;
    }
    console.log(sum);
}
//add(12,12);
//add(1,2,3,4,5,6,7,8,9);

function greet(name){     // (parameter)
    console.log("Hello " + name);
}
//greet("Nishant");  //greet(argument)

//function square(n){
//    return n*n;
//}
//let res = square(7);
//console.log(res);


// Function declaration
//console.log(add1(99,5));
//function add1(a,b){
//    return a+b;
//}
//console.log(add1(5,8));

// Function Expression
//console.log(add2(2,9));  ye call nhi ho skta
//const add2 = function(a,b){
//    return a+b;
//}
//console.log(add2(2,9));


// Arrow Function
//const add1 = (a,b) => {
//   return a+b;
//}
//console.log(add1(2,8));

//const add1 = (a,b) => a+b;
//console.log(add1(3,1));
//
//const square = num => num*num;
//console.log(square(13));

//const square = n => {
//    return n*n;
//}
//console.log(square(8));

//const square1 = n => n*n;
//console.log(square1(15));

//const greet1 = ()=> {
//   return{
//    name: "Nishant",
//    age: 20
//   }
//}
//console.log(greet1());

//const greeting = () => ({name:"Nishant",course:"BCA"});
//console.log(greeting());

function greet(name = "Guest"){
    console.log("Hello " + name);
}
greet("Nishant");
greet();

(function one(name){
  console.log("Hello " + name);
})("Rahul");

((name) => {
 console.log("Hello " + name);
})("Riya");