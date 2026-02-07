// for each loop

//const arr = [10,20,30,5,90];
//
//let sum = 0;
//arr.forEach((value)=>{
//    sum+=value;
//})
//console.log(sum);

// filter
//
//const arr = [10,20,30,40,55];
//
//const newArr = arr.filter((number)=> number<22);
//console.log(newArr);



// forEach: koi value return nhi krta ha

//const arr = [10,20,30,11,5,90];
//
//const newArr = arr.forEach((item)=>{
//    console.log(item);
//    return item;
//})
//console.log(newArr);


// filter
//const arr = [1,2,3,4,5,6,7,8,9,10];

// callback function ma sbhi value ka each axis hota ha uska bad condition
//const ans  = arr.filter((num) => num > 4)
// agar scope open krenge to return keyword likhna hota ha
//const ans = arr.filter((num) => {
//    return num > 4
//})
//console.log(ans);


// custom method
//const ans = []
//
//arr.forEach( (num) => {
//   if(num > 4){
//    ans.push(num);
//   }
//})
//console.log(ans);


//const arr = [1,2,3,4,5,6,7,8,9,10];
//const newArr = arr.filter( (num) => num > 6);
//console.log(newArr);


//const squared = arr.map( (num) => num**2).map( (num) => num+1)
//.filter( (num) => num>30);
//console.log(squared);
//



const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004, price: 150},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008, price: 200},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007, price: 480},
    {title: 'Book Four', genre: 'Science', publish: 2009, edition: 2011, price: 100},
    {title: 'Book Five', genre: 'Non-Fiction', publish: 2011, edition: 2002, price: 199}
]

const totalPrice = books.reduce( (acc,item) => acc+item.price,0)
console.log(totalPrice);

const userBooks = books.filter( (bk) => 
    bk.publish > 2000 && bk.genre === 'Non-Fiction')
//console.log(userBooks);


const newbk = books.map( (bk) => ({genre: bk.genre, edition: bk.edition}))
.sort( (a,b) => b.edition-a.edition)
//console.log(newbk);

// Reduce: 
// jo initial value dete ha first time vo accumulator ka andar chli jati ha
// accumulator ek hi bar initial value leta ha dusri bar jo sum aaya vo
//const arr = [1,2,3,4,5];
//
//const myTotal = arr.reduce( function(acc,currenval){
//const myTotal = arr.reduce( function(acc,currenval){
//    console.log(`acc: ${acc} and currenval: ${currenval}`)
//    return acc + currenval
//},0)
//
//console.log(myTotal);


//const arr = [1,2,3];
//
//const myTotal = arr.reduce( (acc,currenval) => acc+currenval,0)
//console.log(myTotal);



//const shoppingCart = [
//    {
//        itemName: "JS Course",
//        price: 2999
//    },
//    {
//        itemName: "Python Course",
//        price: 999
//    },
//    {
//        itemName: "Mobile dev Course",
//        price: 5999
//    },
//    {
//        itemName: "Data science Course",
//        price: 12999
//    }
//]
//
//const totalPrice = shoppingCart.reduce( (acc,item) => acc+item.price,0)
//console.log(totalPrice);