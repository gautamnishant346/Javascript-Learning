// // Arrays

// //let marks1 = 100;
// //let marks2 = 50;
// //let marks3 = 70;
// //let marks4 = 80;
// let marks = [100,50,70,80,90];

// //console.log(marks);
// //console.log(marks.length);

// let arr = [100,30,"Rohit",true];
// // console.log(arr);
// // console.log(arr[2]);
// // console.log(typeof arr);

// arr[1] = 90;
// // console.log(arr);

// //push: Insert element at end
// arr.push(90);
// arr.push("Strike");
// console.log(arr);

// //pop operation: Delete element from end
// arr.pop();
// console.log(arr);

// //startig ma add kr skta ha ,delete the element at first place

// //unshift aur shift system performance ko low krdeta ha
// // add start
// arr.unshift(12);
// arr.unshift(50);
// console.log(arr);

// // delete start
// arr.shift(50);
// arr.shift(12);
// console.log(arr);


//let arr = [10,20,50,90,11];

// for loop
// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for of loop
// for(let num of arr){
//     console.log(num);
// }

// let arr = [10,20,50,90,11];
// let arr2 = arr;   // Copy by reference hota ha(Ek hi ko copy krta ha)
// arr2.push(99);
// console.log(arr);

// object (non primitive): Copy by reference hote ha
// Primitive: Copy by value 
// const arr = [10,30,50,90,11];
// arr[2] = 30;
// console.log(arr);

// slice 
// slice sa hum hta to dete ha pr original array ma koi change nhi hota
//const arr = [10,30,50,90,11];
//const arr2 = arr.slice(2,4);
//console.log(arr);

// splice 
// splice ma hum original array ka andar changes kr skta ha
//const arr3 = arr.splice(1,3,"Rohit",19);
// 1 index sa start hoga 3 value splice krega Rohit aur 19 add kiye ha
//console.log(arr);


//const arr = [10,30,50,90,11];
//const arr2 = ["Nishant",28,true];
//const arr4 = [90,4,false];

// dono array ko aapas ma merge krna ha
//arr.push(arr2);
//const arr3 = arr.concat(arr2,arr4);
//const arr3 = [arr,arr2,arr4];


// Spread operator
//const arr3 = [...arr,...arr2,...arr4];
//console.log(arr3);
//
//const a = [10,20];
//const a1 = [30,99];
//const b = [...a,...a1];
//console.log(b);

//const names = ["Alice","Bob","Charlie","Nishant","Aman"];

//console.log(names.toString());
//console.log(names.join(" "));  
// join ki help sa hum space ka base pr bhi convert kr skta ha
// console.log(names.indexOf("Bob"));
// console.log(names.includes("Bob"));


// small letters ki ASCII value 97 sa start hoti ha
// capital letters ki ASCII value 65 sa start hoti ha
// sorting character ka basis pa lg rhi ha
//const names = ["Alice","Rohit","Charlie","Nishant","Bob"];
//names.sort();
//names.reverse();
//console.log(names);

// sort ASCII value ka hisab sa sort krta ha
//const a = [101,90,80,32,91];
//const arr = [10,"Rohit","Mohan",true];
//arr.sort();     // character ka base pa short krega
//console.log(arr);
// output: [ 10, 'Mohan', 'Rohit', true ]

//const arr = [10,40,31,71,5,11];
//a.sort((a,b)=> a-b);              // function
// ascending order

// 10,31,40
// a = 40;  // a-b sa check hora ha
// b = 31;

//arr.sort((a,b)=>b-a);
 //descending order
 // 40,10
 // a = 10;      // b-a sa check hoga
 // b = 40;


// -ve : pehle a aayga fir b aayga
// +ve : pehle b aayga fir a aayga
//console.log(arr);


// Flattening Arrays
//const arr = [10,30,50,[40,90,[60,19,99],11],80];

// batana pdta ha kitna level ko flat krna ha
//const a = arr.flat(Infinity);
//console.log(a);

//console.log(arr[3][2][1]);