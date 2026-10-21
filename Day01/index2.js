let score = 80;
score = 90;   // let ki help sa bna hue variable ko hum update kr skta ha 
let age = 20;

//let name = "Riya";     same variable ko do bar declare nhi hone deta
if(true){
    let c = 129;
}

//console.log(score,age);

const account = 12345;
//account = 99;       const ki help sa dali hui value ko change nhi kr skta

//console.log(account);

// var -> same variable ko kitni bhi bar declare kr skt ha
//var a = 20;
//var a = 35;
//var a = 39;
//
//if(true){
//    var a = 28;     // scope ko bhi respect nhi krta var
//}

//console.log(a);

// Datatypes
// Primitive datatypes -> number,string,boolean,undefined,null,bigint,symbol

// number
let a = 10;
let b = 18;

//console.log(a,b);
//console.log(typeof(a));

// string
let c = "Hello world";
let d = "Nishant ";

//console.log(c,d);
//console.log(typeof(c));

// boolean

let login = true;
let f = false;

//console.log(login,f);
//console.log(typeof(login));

// undefined -> Jb variable declare ho pr usma value assign na ho 

let user;
//console.log(user);
//console.log(typeof(user));

// bigint
let num = 245746258367361283276352763527635287n;
//console.log(num);
//console.log(typeof(num));

// null -> Intentionally empty (Jb hum khud empty set krta ha )
// typeof null returns "object" because of a legacy bug in JS
let weather = null;
//console.log(weather);
//console.log(typeof(weather));

// symbol -> symbol ek unique value hoti ha jo kbhi kisi aur value ka equal nhi hoti
//          Har symbol unique hota ha
//        object keys ko unique bnana ka liye use hota ha
let id1 = Symbol();
let id2 = Symbol();

//console.log(id1 === id2);
//console.log(typeof(id2));


// Non Primitive data types
// Arrays,object,function

// Array
let arr = [10,20,30,"Nishant"];
//console.log(arr,typeof(arr));

// object -> key + value pair

let student = {
    name: "Nishant",
    age: 20,
    category: 'SC',
    account: 12345
}
//console.log(student,typeof(student));

// function
let s = function add(){
    console.log("Hello");

}
//add();
//console.log(s());


// Primitive data type is immutable  -> originally change nhi kr skta
// nayi value bnegi purani update nhi ho skti
let str = "Nishant";
str = "Riya";

//console.log(str);

let name = "Nishant";
name[0] = "M";

// agar change krta ha to new value create hoti ha old modify nhi hoti
name = "Vinay";
//console.log(name);

// Non Primitive data types are mutable
let arr1 = [10,20,30,50];
arr1.push(99);
arr1[0] = 100;

//console.log(arr1);

let obj1 ={
    name:"Nishant",
    age:20
}
obj1.name = "Heera Bete"
console.log(obj1);

// Non Primitive data types pass by reference krta ha 