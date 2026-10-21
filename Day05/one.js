let arr = [10,20,30,40,50];
arr.push(99);
arr.push("Nishant");
arr.pop();
//console.log(arr);

arr.unshift(101);
//console.log(arr);

arr.shift();
//console.log(arr);

//let num = [1,2,3,4,5,6];
//let num1 = num;
//
//num1.push(100);
//console.log(num);

let arr1 = [10,20,30,40,50];
let result = arr1.slice(1,4);
//console.log(result);
//console.log(arr1);

// splice --> delete
let arr2 = [10,20,30,40,50];
arr.splice(1,2);
//console.log(arr);

// splice --> add
let arr3 = [10,20,40];
arr3.splice(2,0,99);
//console.log(arr3);

let arr4 = [10,20,30,40];
arr4.splice(2,1,99);
//console.log(arr4);

let arr5 = [10,20,30,40,50];
arr5.splice(1,3,"Nishant",555);
//console.log(arr5);

let num1 = [10,20,30];
//console.log(...num1);
let num2 = [...num1];
num2.push(40);
//console.log(num1);
//console.log(num2);

// Combine arrays
let a = [1,2,3];
let b = [4,5,6];
let ans = [...a, ...b];
//console.log(ans);

// Array ma new elements add krna
let c = [20,30];
let ans1 = [10,...c, 40];
//console.log(ans1);

// Rest operator
let [x, ...rest] = [10,20,30,40,50];
//console.log(x);
//console.log(rest);

// function ma rest
function add1(a, ...nums){
    //console.log(a);
    //console.log(nums);
}
add1(5,10,15,20);

function add(...nums1){
    let total = 0;
    for(let y of nums1){
        total += y;
    }
    return total;
}
//console.log(add(2,5,7,8,1,12));

const ar = [10,30,50,[40,90,[60,19,99],11],80];
console.log(ar.flat(Infinity));