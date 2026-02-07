// Execution Context
// Memory allocation
// a = 10
// b = 20
// addNumber = fnCode
// sumResult1 = undefined
// sumResult2 = undefined

// Execution phase


//console.log(a);
//var a = 10;
//var b = 20;
////console.log(a);
//
//var sumResult1 = addNumber(a,b);
//console.log(sumResult1);
//
//function addNumber(num1,num2){
//    var sum = num1+num2;
//    return sum;
//}
//
//var sumResult2 = addNumber(4,5);
//console.log(sumResult1,sumResult2);


// let const
// Memory allocation
// a = 10                   //<uninitialised> (Temporal dead zone)
// b = 20                   //<uninitialised> (Temporal dead zone)
// addNumber = fnCode       //<uninitialised> (Temporal dead zone)
// result = 30              //<uninitialised> (Temporal dead zone)

// Execution phase


//console.log(a);
//let a = 10;
//const b = 20;
//
//const addNumber = function(num1,num2){
//    const sum = num1+num2;
//    return sum;
//}
//const result = addNumber(a,b);
//console.log(result);
//console.log(a);


// Execution Context
// Memory allocation
// a = 10
// b = 20
// result = <uninitialised> (Temporal dead zone)
// addNumber = <uninitialised> (Temporal dead zone)

// Execution phase


let a = 10;
const b = 20;

const result = addNumber(a,b);
console.log(result);

const addNumber = function(num1,num2){
    const sum = num1+num2;
    return sum;
}


// Hoisting in Javascript
/* Execution phase aana sa pahla code ko pta hota ha konsa variable aur
   function rkha gye ha */
/* Hoisting is javascript's behavior of knowing about a variable or function's
 existence before execution the code. How it treats that knowledge depends
 on the keyword (function,var,let or const).
 1. function: Hoisted completely (name and body).
 2. var: Hoisted and initialised with undefined.
 3. let/const: Hoisted, but not initialised.they are put in a Temporal dead
     zone.*/ 



