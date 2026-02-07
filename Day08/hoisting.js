// Execution Context

// Memory allocation
// a = 99                  <uninitialised> (Temporal dead zone)
// b = 2                   <uninitialised> (Temporal dead zone)
// addNumber = fnCode
// result = 101

// Execution phase

//let a = 99;
//const b = 2;
//
//const addNumber = function(num1,num2){
//    const sum = num1+num2;
//    return sum;
//}
//
//const result = addNumber(a,b);
//console.log(result);



// Execution Context create
// Memory allocation
// a = 99
// b = 6
// result = <uninitialised> (Temporal dead zone)
// addNumber = <uninitialised> (Temporal dead zone)

// Execution phase

let a = 99;
const b = 6;



const addNumber = function(num1,num2){
    const sum = num1+num2;
    return sum;
}
const result = addNumber(a,b);
console.log(result);

// Memory allocation
// a = <uninitialised> (Temporal dead zone)
// b = <uninitialised> (Temporal dead zone)
// addNumber = function code
// sum = 105

// Execution phase
