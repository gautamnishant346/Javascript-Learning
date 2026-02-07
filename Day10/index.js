// forEach, filter, reducer, map, set

//const arr = [10,20,30,5,90,87];
//let sum = 0;
//
//arr.forEach((number)=>{
//    sum+=number;
//})
//
//console.log(sum);

// filter

//const arr = [10,20,30,5,90,87];
// true: select, false: not selected
//const newArr = arr.filter((number)=> number>25);

//console.log(newArr);
// this = [10,20,30,5,90,87];

// It is not recommended use nhi krna ha
//Array.prototype.filtering = function(compare){
//    
//    const ans = [];
//    for(let num of this){
//       if(compare(num)){
//       ans.push(num);
//       }
//    }
//    return ans;
//}
//
//const newArr = arr.filtering((num)=> num>25);
//console.log(newArr);


// map
// const arr = [10,20,30,90,87,4];

// const newArr = arr.map((num)=> num*2);
// console.log(newArr);



const products = [
    // Electronics
    {id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true},
    {id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true},
    {id: 3, name: "Smartphones", category: "Electronics", price: 800, inStock: false},
    {id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true},
    {id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true},
];

// filter new array return krega isiliye .sort lgaya, chaining krna
//const newProduct = products.filter((product)=> product.price>100).sort((a,b)=>b.price-a.price).map((product)=>({name:product.name,price:product.price}));
//console.log(newProduct);

// map ka andar jo bhi likhta ha vo return hojata ha
//const ans = products.map((product)=> ({name:product.name, price:product.price}));
//console.log(ans);


// Reduce: array pa iterate krege aur ek final value laka de dega

// accumulator ma initial value hoti ha
// accumulator = sum=0
// accumulator = 
//const totalPrice = products.reduce((accumulator,currenValue)=>{
//    if(currenValue.inStock){
//    return accumulator+currenValue.price;
//    }
//    else{
//        return accumulator;
//    }
//},0);
//
//console.log(totalPrice);

// Data structure: set

// Set: A Set is a list that enforces uniqueness.it's a collection of items
//      where duplicates are impossible.

//const arr = [10,20,30,10,25,15,10,20,30];
//console.log(arr);
//
//const s1 = new Set(arr);
//s1.add(11);
//s1.delete(10);
////console.log(s1.has(21));  
//// has: to check particular value available or not
////s1.clear();
//console.log(s1.size);


const email = ["ro@gm","ra@gm","mo@gm","ro@gm"];

// spread operator lgakr firsa set ko array ma convert kr dunga
//const uniqueEmail  = [...new Set(email)];
//console.log(uniqueEmail);
const s1 = new Set(email);

//for(let num of s1){
//   console.log(num);
//}


// Data structure: Map
// map: key kisi bhi type ki ho skti ha
//const m1 = new Map([
//    ["Rohit", 40],
//    [2, "Rohit"],
//    [true, 11],
//    [[10,20,11], "Mohit"]
//]);
//
//console.log(m1);