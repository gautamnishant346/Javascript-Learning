// const user = {
//     name: "Nishant",
//     age: 20,
//     amount: 5000,
//     "home address": "Meerut"
// }
//console.log(user["home address"]);
// update
//user.name = "Dushyant";
//user.aadhar = 124;
//console.log(user);

// delete
//delete user.age;
//console.log(user);

//const user2 = user;
//user2.name = "Riya";
//console.log(user);

//const keys = Object.keys(user);
//console.log(keys);
//const val = Object.values(user);
//console.log(val);
//console.log(Object.entries(user));


// for in loop: Dynamic access

//for(let keys in user){   // jitni keys ha utni bar loop chlega
    // console.log(keys);   sirf keys ka liye

    // key = "name";
    // key = "age";
    // user["name"];
    // user["age"];
    //console.log(keys,user[keys]);
    // user[keys]: key ki value nikalta ha
    // user["name"]
    //user["age"]
    //user["amount"]
    //user["home address"]
//}

// for of loop: array ka liye

//console.log(Object.keys(user));
//for(let key of Object.keys(user)){
//     console.log(key);
//}

//for(let val of Object.values(user)){
//    console.log(val);
//}

//for(let [keys,val] of Object.entries(user)){
//    console.log(keys,val);
//}

// object destruct
//const {name:userName,age:userAge,amount} = user;
//console.log(userName,userAge,amount);

// Array destruct
//const arr = [10,20,99,30,40];
//const [first,second] = arr;
//const [,,third] = arr;
//console.log(first,second);

const user = {
    name: "Nishnat",
    age: 20,
    amount: 2500,
    greeting: function(){
        console.log(`Course is coming soon of amount Rs${this.amount}`);
    }
}
user.greeting();