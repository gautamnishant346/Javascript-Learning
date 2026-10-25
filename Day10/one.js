//let arr = [10,20,30,40];
//arr.forEach((num) => {
//   console.log(num);
//});

//let arr = [5,10,15];
//let result = arr.forEach((num) => {
//   console.log(num * 2);
//});
//console.log(result);
//
//let arr1 = [5,10,15];
//let res = arr.map((num) => {
//    return num * 2;
//});
//console.log(res);

//let arr = [2,4,6];
//let res = arr.map((num) => {
//    return num * 2;
//});
//console.log(res);

//let arr = [1,2,3];
//let ans = arr.map(num => num + 5);
//console.log(ans);

//let arr = [5,10,15,20,30,49];
//let res = arr.filter((num) => {
//    return num > 20;
//});
//console.log(res);

//let arr = [1,2,3,4,5,7];
//let res = arr.filter(num => num % 2 === 0);
//console.log(res);

//const products = [
//    // Electronics
//    {id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true},
//    {id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true},
//    {id: 3, name: "Smartphones", category: "Electronics", price: 800, inStock: false},
//    {id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true},
//    {id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true},
//];

//const ans = products.filter(product => product.price>100);
////console.log(ans);
//
//let arr = [2,4,6,8];
//let res = arr.reduce((acc,num) => {
//   return acc + num;
//},0);
//console.log(res);

//let prices = [100,200,300];
//let finalPrice = prices.map((num) => {
//    return num * 1.18;
//});
////console.log(finalPrice);
//
//let res = prices.reduce((acc,total) => {
//    return acc + total;
//},0);
////console.log(res);
//
//let nums = [10,20,10,30,20,40];
//let mySet = new Set(nums);
//console.log(mySet);
//
//let ar = [1,2,2,3,3,4];
//let newArr = [...new Set(ar)];
//console.log(newArr);


let products = [
  {name: "Keyboard", price: 1200, category: "Electronics"},
  {name: "Mouse", price: 500, category: "Electronics"},
  {name: "Notebook", price: 100, category: "Stationery"},
  {name: "Monitor", price: 7000, category: "Electronics"},
  {name: "Pen", price: 50, category: "Stationery"},
  {name: "Mouse", price: 500, category: "Electronics"},
]

//products.forEach((product) => {
//    console.log(product.name,product.price);
//});

//let ans = products.map(product => `${product.name} - ${product.price}`);
//console.log(ans);

//let ans = products.filter(product => product.price>500);
//console.log(ans);

//let ans = products.reduce((acc,total) => {
//    return acc + total.price;
//},0);
//console.log(ans);

let unique = products.map(product => product.category);
console.log(unique);

let mySet = [...new Set(unique)];
console.log(mySet);