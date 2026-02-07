//How to declare variables

//let same variable ko 2 bar nhi declare hone deta.
let name = "Nishant";
let age = 20;

 age = 30;
 /*if(true){
    let c = 50;
 }
 console.log(c);*/

//console.log(name,age);

//const keyword sa dali hui value change nhi kr skta.
const account = 1234;
//account = 23;

//console.log(account);

//old method
//var ma same variable ko kitni bhi bar declare skta ha.

/*var a = 10;
var a = 20;*/

//var scope ko bhi respect nhi krta 
/*if(true){
    var a = 20;
}*/

//console.log(a);


//Data types

//Primitive data types

//number,string,boolean,undefined,null,bigint,symbol

//number
let a = 10;
let b = 2.36;
//console.log(a,b);
//console.log(typeof b);

//string
let c = "Strike is coming";
let d = 'Anjali';
//console.log(c,d);
//console.log(typeof c);

//boolean
let login = true;
let f = false;
//console.log(login,f);
//console.log(typeof login);

//undefined

//jb variable declare ho pr usma value assign na ho tb undefined hota ha.
let user;
//console.log(user);
//console.log(typeof user);

//bigint
let num = 23243542363543252734365656452n;
//onsole.log(num);
//console.log(typeof num);

//null

//null apna type object btata ha jo ki ek bug ha
let weather = null;
//console.log(weather);
//console.log(typeof weather);

//symbol

//Symbol sa ek unique value generate ho jati ha
const id1 = Symbol("id");
const id2 = Symbol("id");
//console.log(id1==id2);
//console.log(typeof id1);

//Non Primitive data type
//Array,object,function

//Sbhi non-primitive data types ka typeof object hi niklaga.

let arr = [10,20,30,"Nishant",true]
//console.log(arr);
console.log(typeof arr);

//object

//Nishant 12312 18 gen
//object key value pair ma hote ha
let obj = {
    name:"Nishant",
    account:12312,
    age:18,
    category:'sc'
}
console.log(typeof obj);


//function

//function ko kisi variable ka andar store kra skta ha
let s = function add(){
    //console.log("Hello");
}

//add();
//console.log(s());
//s();
console.log(typeof s);

//Primitive data type is immutable

let x = 10;
y = x;
y=20;
console.log(x,y);
/*do box bnege ek ma 10 aur dusra ma 20 pahla x 10 pa tha bad ma x 20 ko
 point krega*/
 let str = "Nishant";
 str = "Vinay";

//console.log(x);
//console.log(str);

//Non Primitive data type mutable hota ha
//non-primitive data types ka andar changes kr skta ha.
let arr1 = [10,20,30,40];
arr1.push(90);
arr1[0] = 70;
console.log(arr1);

let obj1 ={
    name:"Nishant",
    age:20
}
obj1.name = "BhanuPratap"
console.log(obj1);
//non-primitive data types copy nhi krta pass by reference krta ha
  //ya sb ek hi ko refer krenge

//Primitive data types ka andar manipulate nhi kr skta