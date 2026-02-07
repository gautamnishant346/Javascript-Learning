// Scope and Closure , HOF
// Global ->  Accessible to everyone
// functional -> Accessible only to that function
// Block level scope -> Accessible only to that block
// let/const teeno ko respect deta ha
// var sirf block ko respect nhi deta ha

//let a = 10;
//const b = 20;
//
//if(true){
//    let d = 40;
//    var e = 90;
//}
//console.log(e);
//
//function greet(){
//    let c = 30;
//
//}
////console.log(c);
//greet();
////console.log(b);


//let global = 30;
//
//function greet(){
//    let global = 40;
//    
//    function meet(){
//        let global = 10;
//        console.log(global);
//    }
//    meet();
//}
// function pahla apna scope ma search krega agar nhi mila to bhar jayga

//greet();


//function createCounter(){
//      let count = 0;
//    // clouser: function jis variable ko use krta ha apna outer scope ma unha
//    //          yad rkhta ha
//    function increment(){
//        count++;
//        return count;
//    }
//
//    return increment;
//}
////console.log(count);
//
//const counter = createCounter();
//console.log(counter());
//console.log(counter());
//console.log(counter());

/* Closure: A function that remembers variables from its outer scope even 
            after the outer function has finished executing.          
*/


// variable ko private bna deta ha

function createBankAccount(){
let balance = 500;

 return {
    deposit: function(amount){
        if(typeof amount === "number" && amount>0){
            balance+=amount;
            return balance;
        }
    },
    withdraw: function(amount){
        if(typeof amount === "number" && amount>0  && balance>=amount){
            balance-=amount;
            return balance;
        }
    },
    getbalance: function(amount){
            return balance;
        }    
}

}

const customer = createBankAccount();
console.log(customer.withdraw(200));

// HOF: ek function dusra function ko return kr deta ha

// function double(val){

//     return function execute(num){
//         return val*num;
//     }
    
// }

// const n = double(20)(5);
// console.log(n);
//console.log(n(5));