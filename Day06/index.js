// object : information ko structured way ma store kr deta ha
// key value
// const user = {
//   name: "Nishant",
//   age: 20,
//   emailId: "nishant@gmail.com",
//   amount: 3400,
//   "home address": "Meerut"
// }

// Behind the scene as a string hi memory ma location milti ha
//console.log(user["name"]);
//console.log(user["age"]);
//console.log(user.age);
//console.log(user["home address"]);

//console.log(typeof user);
// CRUD operation: Create Read Update Delete
//console.log(user.age);

// update
//user.aadhar = 1234;
//user.amount = 5000;

// delete
//delete user.emailId;
//console.log(user);

// const user = {
//   name: "Nishant",
//   age: 20,
//   emailId: "nishant@gmail.com",
//   amount: 3400
// }

//const user2 = user;
//user2.age = 90;
//console.log(user);

// Important 
//console.log(Object.keys(user));     // only keys
//console.log(Object.values(user));   // only values
//console.log(Object.entries(user));  // both keys and values

//for(let keys in user){
//  console.log(keys,user[keys]);
//}

//const user = {
//  name: "Nishant",
//  age: 20,
//  emailId: "nishant@gmail.com",
//  amount: 3400
//}

// for of loop array ke
//const temparr = Object.keys(user);
//console.log(temparr);
//for(let keys of temparr){
//    console.log(keys);
//}

//const temparr = Object.values(user);
//console.log(temparr);
//for(let value of temparr){
//    console.log(value);
//}


//for(let [keys,values] of Object.entries(user)){
//    console.log(keys,values);
//}

//const name = user.name;
//const age = user.age;

// object ko destructing krna
//const {name:userName,age:userAge} = user;
//console.log(userName,userAge);

// Array destructing krna
//const arr = [10,30,40,90,11];
//const [first,second]= arr;
//console.log(first,second);

//const user = {
//  name: "Rohit",
//  age: 20,
//  emailId: "nishant@gmail.com",
//  amount: 3400,
//  greeting: function(){
//    console.log(`Strike is coming on 18 october ${this.name}`);
//    return 20;
//  }
//}

// const user2 = {
//     name: "Mohan",
//     account: 201,
//     greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
// }
// }
// user2.greeting = user.greeting;
// user2.greeting();

//const va = user.greeting();
//console.log(va);

// nested object
// const user = {
//   name: "Rohit",
//   age: 20,
//   emailId: "nishant@gmail.com",
//   amount: 3400,
//   address: {
//     city: "Meerut",
//     state: "Uttar Pradesh"
//   }
// }
//console.log(user.address.city);

// independent copy create ki
// sirf one level tk kam krta ha
// nested wala ki independent copy nhi bnegi

// shallow copy: nested walo ko handle nhi kr skta
//const user2 = {...user};
//user2.address.city = "Prayagraj";

//console.log(user);

// deep copy: nested walo ko bhi handle krega
//const user2 = structuredClone(user);
//user2.address.city = "Prayagraj";
//console.log(user);

// key ko number ki form ma bhi likh skta ha

// keys: String || Symbol

//const sym = Symbol("id");
//
//const user = {
//    name: "Riya",
//    age: 20,
//    0: 100,
//    2: "Mohan",
//    [sym]:"Hello Ji"   //bracket sa pta chlega ki symbol ha
//}

//arr = [10,20,30,40];
// {
//     0:10;
//     1:20;
//     2:30;
//     3:40;
// }
//console.log(user[sym]);