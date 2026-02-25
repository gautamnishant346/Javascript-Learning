// Prototype and classes

const obj = {
    name: "Nishant",
    age: 20,
    greet: function(){
        console.log("Hello ji");
    }
};

//console.log(obj.greet());
//obj.greet();

//console.log(obj.hasOwnProperty("name"));
//console.log(obj.toString());

//const arr = [10,20,30];
//console.log(arr.length);

//const obj2 = {
//    account: 30
//}
//
//obj2.__proto__ = obj;
//
//console.log(obj.hasOwnProperty("name"));

// Jb array create krta ha to uska andar properties aati ha Array.protype sa
// aur array.prototype ma properties aati ha Object.prototype sa

// Function create krta ha to vo property leta ha Function.prototype sa 
// aur Function.prototype property leta ha Object.prototype sa


//const obj1 = {
// name: "Rohit",
// age: 30,
// greet: function(){
//    console.log(`Hello ${this.name}`);
// }   
//}
//const obj2 = {
// name: "Mohit",
// age: 20,
// greet: function(){
//    console.log(`Hello ${this.name}`);
// }   
//}
//const obj3 = {
// name: "Mohan",
// age: 20,
// greet: function(){
//    console.log(`Hello ${this.name}`);
// }   
//}

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
      console.log(`Hi ${this.name}`);
    }
}

//const person1 = new Person("Rohit",20);
//const person2 = new Person("Mohit",10);
//
//console.log(person1);


class Customer extends Person{
  constructor(name,age,account,balance){
    super(name,age);      // parent ka constructor ko call ka liye super use
    this.account = account;
    this.balance = balance;
  }

  checkBalance(){
    return this.balance;
  }
}

const c1 = new Customer("Mohan",20,123,590);
console.log(c1.checkBalance());

