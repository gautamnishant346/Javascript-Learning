//let Student = {
//    name: "Nishant",
//    age: 20,
//    course: "BCA"
//};
//console.log(Student.name);
//console.log(Student["age"]);

//Student["city"] = "Meerut";
//console.log(Student);
//Student["age"] = 21;
//console.log(Student["age"]);

//delete Student.course;
//console.log(Student);
//console.log("name" in Student);
//console.log("course" in Student);

//console.log(Object.keys(Student));
//console.log(Object.values(Student));
//console.log(Object.entries(Student));

//for(let key in Student){
//    //console.log(key,Student[key]);
//}

//let newstudent = {...Student};
//newstudent.name = "Rahul";
//console.log(Student["name"]);
//console.log(newstudent.name);

//let one = {
//    name: "Prince"
//};
//let two = {
//    age: 20,
//    course: "BCA"
//};
//console.log(Object.assign({},one,two));

let obj1 = {
    name: "Nishant",
    greet: function(){
        console.log(`Happy Birthday ${this.name}`);
    }
};
//obj1.greet();

let obj2 = {
    name: "Vinay",
    greet1: function(){
        console.log(this.name);
    }
};
//obj2.greet1();

// Array Destructuring
//let arr = ["Nishant",20,"BCA"];
//let [name,age,course] = arr;
////console.log(name);
//
//let student = {
//    name: "Nishant",
//    age: 20,
//    address: {
//        city: "Meerut",
//        state: "UP"
//    }
//};
//console.log(student.address.city);

//let student1 = {
//    name: "Nishant",
//    age: 20
//};
//let student2 = student1;
//student2.name = "Rahul";
//console.log(student1.name);
//console.log(student2.name);

// Shallow copy
//let student1 = {
//    name: "Nishant",
//    address: {
//        city: "Meerut"
//    }
//};
//let student2 = {...student1};
//student2.name = "Rahul";
//student2.address.city = "Delhi";
//console.log(student1.name);
//console.log(student1.address.city);

// Deep copy
let student1 = {
    name: "Nishant",
    address: {
        city: "Meerut"
    }
};
let student2 = structuredClone(student1);
student2.address.city = "Delhi";

console.log(student1.address.city);