//let name = "Nishant";
//function outer(){
//    let age = 20;
//    function inner(){
//       console.log(name);
//       console.log(age);
//    }
//    inner();
//}
//outer();

//let global = 20;
//function greet(){
//    //let global = 30;
//    function meet(){
//        //let global = 99;
//        console.log(global);
//    }
//    meet();
//}
//greet();

function outer(){
    let name = "Nishant";
    function inner(){
        console.group(name);
    }
    return inner;
}
let result = outer();
result();