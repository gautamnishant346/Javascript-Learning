//let a = 10;     // global

//function one(){
//    let a = 10;
//    const b = 20
//}
//console.log(b);

//var a = 10;

//if(true){
//    var a = 10;
//}

// var sirf scope ko respect nhi deta baki dono ko deta ha
//function one(){
//    var a = 10;
//}
//console.log(a);


//let global = 30;
//
//function meet(){
//    let global = 40;
//    
//    function one(){
//       let global = 99;
//        console.log(global);
//    }
//    one();
//}
//
//meet();
// pahla apna scope ma search krega agar nhi mila to outer scope ma jayga


// Clouser

//function createCounter(){
//    let count = 0;
//
//    function increment(){
//        count++;
//        return count;
//    }
//    return increment;
//}
//
//const fn = createCounter();
//console.log(fn());
//console.log(fn());
//console.log(fn());

//function outer(){
//    let x = 10;
//
//    function inner(){
//        console.log(x);
//    }
//    return inner;
//}
//const fn = outer();
//console.log(fn());


// Higher Order Function

//function greet(fn){
//   fn();
//}
//function sayHi(){
//    console.log(`Hi Nishant`);
//}
//
//greet(sayHi);

//function outer(){
//    return function inner(){
//        console.log(`Hello Nishant`);
//    }
//}
//outer()();