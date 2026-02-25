// this call apply bind
// this: class object method
// strict mode vs non strict mode
//'use strict'
// global object: In window it is called window, in node js environment it is called global
// globalThis points to global object of the environment

// this keyword in global scpoe: NodeJS(Empty Object), in browser(global object)
// arrow function take this keyword from it's lexical environment scope

// normal function: non strict mode, this will point to global object
// in strict mode: It will point to undefined

// call apply bind, this point to the invoking object

// In class constructor, this will point to newly create empty object

//var a= 10;
//var b = 20;
//
//console.log(a,b);
//
//function greet(name1,name2){
//    console.log(name1,name2);
//}
//
//greet("Rohit","Mohit");

// window global object ha isa browser create krka deta ha

// node js ka pass global object hota ha iska nam global ha
//console.log(globalThis);


// Learn about this keyword
//'use strict'

// node js environment ka andar this empty object ko point krta ha
// window ka andar this global object ko point krta ha

//console.log(this);


// Function
// 100 user: greet function: 100*memory , code repeat
//'use strict'
//
//function greet(){
//    console.log(`Hi ${this.name}`);
//}
//
//function incrementAge(value,name){
// this.age+=value;
// this.name=name;
// console.log(this.age);
// console.log(this.name);
//}
//
//const user = {
//    name: "Rohit",
//    age: 30
//}
//const user2 = {
//    name: "Nishant",
//    age: 10
//}

//greet.call(user);  // greet call hoga this user ko point kreag
//greet.call(user2);
//incrementAge.call(user2,10,"Kartik");
//incrementAge.apply(user2,[10,"Kartik"]);
//const incr = incrementAge.bind(user2,10,"Kartik");
//console.log(incr);
//incr();
// bind future ma call krna ka liye 

//user2.greet();
// greet method ko user na call kiya ha to this user ko point krega

//'use strict'
//
//function greet(){
//    console.log(this);
//}
//greet();
// non strict mode hota ha isko kisi na invoke nhi kiya to us time this 
// global object ko point krega


// class

//class Person {
//    constructor(name,age){
//        this.name=name;
//        this.age=age;
//    }
//}

// new keyword use krna pr ek empty object create krta ha 
// this = {name: "Rohit", age: 20}

//const p1 = new Person("Rohit",20);
//console.log(p1);


// Arrow function: this doesn't exist for arrow function, lexical environment scope 
//'use strict'

//console.log(this);
// arrow function ka pass apna this nhi hota ha, apna sa bhar wala sa uthata ha
//const greet = ()=>{
//    console.log(this);
//}
//function meet(){
//    console.log(this);
//}

//greet();
//meet();

//'use strict'

//const user = {
//    name: "Nishant",
//    greet: function(){
//        const that = this;
//        function meet(){
//            console.log(that);
//        }
//        meet();
//    }
//}
//
//user.greet();



//const stopWatch = {
//    second:0,
//    start: function(){
//
//        const that = this;
//        setInterval(function(){
//           that.second++;
//           console.log(that.second);
//        },1000);
//    }
//}
//
//stopWatch.start();


//const stopWatch = {
//    second:0,
//    start: function(){
//
//        setInterval(()=>{
//         this.second++;
//         console.log(this.second);
//        },1000);
//    }
//}
//
//stopWatch.start();

//const button = document.getElementById("first");
//
//button.addEventListener('click',()=>{
//    console.log(this);
//})



// this keyword: Global scope in Node JS: {}
// Windows: window Object

// function: this keyword, if someone invoke the method or function, this will point to that
// Normal function: when no one invoking it, 
// Non strict: Global Object for node and browser
// strict mode: Undefined

// arrow function: It takes this from it's lexical environment scope
//'use strict'
//function greet(){
//    console.log(this);
//}
//greet();
//console.log(this);