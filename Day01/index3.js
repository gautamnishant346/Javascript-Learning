let name = "Nishant";
name = "Aaradhya";

//console.log(name);

if(true){
    let age = 20;
}
//console.log(age);

const account = 12345;
//account = 9870;

//console.log(account);

var a = 10;
var a = 33;

if(true){
    var a = 56;
}

//console.log(a);

// undefined tb hota ha jb variable declare ho pr usma value assign na ho
let user;
//console.log(typeof(user));

let num = 7263586125481364581645187451385845n;
//console.log(num);
//console.log(typeof(num));

let weather = null;
// null -> intentionally empty 
//console.log(typeof(weather));


let id1 = Symbol();
let id2 = Symbol();

//console.log(id1 === id2);
//console.log(typeof(id1));

// sbhi non primitive datatypes ka typeof object hi hota ha 

let arr = [10,20,"Nishant",false];
//console.log(arr,typeof(arr));

// object -> key value pair ma hote ha
let obj1 = {
    name: "Nishant",
    age: 21,
    category: "sc",
    account: 5558
}

//console.log(obj1, typeof(obj1));


// Primitive datatypes are immutable
let x = 10;
x = 20;

//console.log(x);

// Non-Primitive datatypes mutable hote hai
// unka andar originally bhi change kr skta hai

let arr1 = [10,20,30,45];
arr1.push(100);
arr1[0] = 99;

//console.log(arr1);

let obj2 ={
    name: "Nishant",
    age: 20
}
obj2.name = "Bhanu Pratap";
obj2.age = 69;

console.log(obj2);