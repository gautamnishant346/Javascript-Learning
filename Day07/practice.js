// function

function addNumber(...num){
    let sum = 0;
    for(let n of num){
        sum+=n;
    }
    console.log(sum);
}
//addNumber(10,14);
//addNumber(1,2,5);
//addNumber(1,2,3,4,5,6,7,8,9);

// Rest operator: bache hue values ko ek array ma pack kr deta ha
//function sum(...num){
//    console.log(num);
//}
//sum(1,2,3,4,5);

// Fixed+rest

//function show(a,b, ...rest){
//  console.log(a);
//  console.log(b);
//  console.log(rest);
//}
//show(10,20,30,40,50,60);

// Array destructuring
//const arr = [1,2,3,4,5];

//const [first,second, ...remaining] = arr;
//const [...all] = arr;
//console.log(all);
//console.log(first,second,remaining);


// Object destructuring
//const user = {
//    name: "Nishant",
//    age: 20,
//    city: "Meerut",
//    course: "Web-development"
//}

//const {name, age, city, course} = user;
//const {...all} = user;
//console.log(all);

/* Rest operator: collects multiple values into a single array. it is mainly
      used in function parameters and destructuring to handle an
      unknown number of arguments.
*/

// function add(...num){
//    let sum = 0;
//    for(let n of num){
//        sum+=n;
//    }
//    console.log(sum);
// }
// 
// add(2,3);
// add(12,3,5,7,5);


// Spread operator: expands an array or object into individual elements
//const a = [1,2,3];
//const b = [4,5,6,89];
//
//const c = [...a, ...b];
//console.log(c);

// normal function 
//addNumber(99,2);
//function addNumber(num1,num2){
//    const sum = num1+num2;
//    console.log(sum);
//}

// function expression: pahla call nhi kr skta
//addNumber(2,6);
//const add = function(num1,num2){
//    const sum = num1+num2;
//    return sum;
//}
//console.log(add(2,98));


// Arrow function: function keyword nhi likhna pdta

//const add = (num1,num2)=> {
//    return num1+num2;
//}

//const add = (num1,num2)=> num1+num2

//const squared = num=> num**2;
//console.log(squared(13));

//const user = () => {
//    return {
//        name: "Nishant",
//        age: 20
//    }
//}

//const user = () => ({name:"Nishant",age: 20});
//console.log(user());