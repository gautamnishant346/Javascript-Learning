//operators

//Arithmetic operators
/*console.log(2+5);
console.log(2-5);
console.log(2*5);
console.log(6/2);
console.log(6%2);

console.log(5**3);*/

//Assignment operator
//let x = 20;
//let y = 10;
//x=x+y;
//x+=y;
//x=x-y;
//x-=y;
//x*=y;
//x%=y;
//console.log(x);

//Comparison operator
//let x = 20;
//let y = "20";
//console.log(x>y);
//console.log(x>=y);
//console.log(x<y);
//console.log(x<=y);
//console.log(x==y);  //simple value ko compare krta ha

//type check(dono same type ka hona chahiye ===, uska bad comparison krega)
//console.log(x===y);  //strict checking

//number and string compare(string convert into number)
//String -> Number
// let z = "120";
// let a = Number(z);
// console.log(typeof a);

//NaN: Not a number(and it's type is number)
//let a = "121ac";
//let b = Number(a);
//console.log(typeof b);

//Number -> String
//let a = 10;
//let b = String(a);
//console.log(typeof b);

//Boolean -> Number
//console.log(Number(false));

//null -> 0
//console.log(Number(null));

//undefined -> NaN
//console.log(Number(undefined));

//boolean -> String
//console.log(typeof String(true));

//Boolean Convert
//console.log(Boolean(0));
//console.log(Boolean(""));

//Computer science challenge
let a = 0.1;
let b = 0.2;

  //binary (0.2)       //binary (0.1)
/* 0.2*2 = 0.4 (0)    0.1*2 = 0.2 (0)
   0.4*2 = 0.8 (0)    0.4*2 = 0.4 (0)
   0.8*2 = 1.6 (1)    0.8*2 = 0.8 (0)
   0.6*2 = 1.2 (1)    0.6*2 = 1.6 (1)
   0.2*2 = 0.4 (0)    0.2*2 = 1.2 (1)
   0.4*2 = 0.8 (0)    0.2*2 = 0.4 (0)  *Pattern starts repeating here
*/
//exactly binary ma convert nhi ho pata approximate result store ho pata ha

/*let c = a+b;
console.log(c);*/

//1: null is loosely equal to undefined only
/*console.log(null==undefined);
console.log(null===undefined);
console.log(null==0);
console.log(null=="");
console.log(null==true);*/

//>,<,>=,<= (null --> number, undefined --> NaN)
//agar ya sign use hue to null convert hojayga number ma undefined NaN ma

/*console.log(null>=0);
console.log(null<=0);
console.log(null>0);
console.log(null<0);
console.log(null>=undefined);
console.log(undefined>=0);*/

//console.log("Rohit">"mohit");
//console.log(10<true);

//Ek koi bhi type hai, usko agar mujhe compare krna ha dusra kisi type sa
//Dono number ma convert honge

//console.log(null>"")  //null number ma 0 hoga aur empty string bhi 0 hogi

//console.log(NaN == NaN);

//Loop in Javascript

//for loop

//post increment: i++
//post decrement: i--
/*for(let i = 0; i<10; i++){
    console.log(i);
}*/

//while loop
/*let i = 0;
while(i<10){
    console.log(i);
    i++;
}*/

// do while loop
// let i  = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);

//if else condition
// let age = 25;
// if(age>=18){
//     console.log("Eligible for vote");
// }
// else{
//     console.log("Not eligble for vote");
// }

//kid young old

// let age = 78;
// if(age<18){
//     console.log("kid");
// }
// else if(age>=60){
//     console.log("old")
// }
// else{
//     console.log("Young");
// }


//Logical operator

//&&, ||

// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&false);
// console.log(false&&true);

// console.log(true||true);
// console.log(true||false);
// console.log(false||false);
// console.log(false||true);

// && ma agr pehli value true hoga to right bhi true hona chahiye aur second
  //value ko output de dega.
  //Logical end
// let d = "Rohit";
// let e = "Nishant";
// let f = d&&e;
// console.log(f);

// let e = 0;
// let f = 20;
// console.log(e&&f);

//&&: if first vaue is false, it will return the first value itself
// if first value is true, it will return second value

// || Logical or
let e = 10;
let f = 20;
console.log(e||f);
//agar pehli condition true ha to usi ko return kr dega

// ||: if first value is true, it will return the first value itself
// if first value is false, it will return second

//console.log(5!=5);

// AND: & , | or

console.log(2&3);