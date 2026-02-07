// arr ka reference arr2 ko milega jissa dono same array ko point krenge
//let arr = [10,20,30,40,50];
//let arr2 = arr;
//arr2.push(99);
//console.log(arr2);

// push aur pop kr skta ha reference to same hi rhega
//const arr = [10,30,50,11];
//arr[2] = 101;
//console.log(arr);

// slice
//let arr = [10,30,50,90,13];
//let arr2 = arr.slice(2,4);
//console.log(arr);

// splice
// array.splice[startIndex,deleteCount,add,add]

//let arr = [10,30,50,90,1];
//let arr2 = arr.splice(1,3);   // delete
//let arr3 = arr.splice(1,0,"Rahul",999);  // add
//let arr4 = arr.splice(1,1,"Nishant");    // replace
//console.log(arr);

 //Spread operator

 const arr = [10,30,50,90,11];
const arr2 = ["Nishant",28,true];
const arr4 = [90,4,false];

const arr3 = [...arr,...arr2,...arr4];
console.log(arr3);

//const a = [10,20];
//const a1 = [30,99];
//const b = [...a,...a1];
//console.log(b);