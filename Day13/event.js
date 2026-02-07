//   ------------Evenet Listener--------------
// Event: Mousemove,click,double click
// Event Listener: Listening the event(click)
// Evenet Action

//function handleClick(){
//    const element = document.getElementById("first");
//    element.textContent = "Strike is Coming";
//
//}

//const element = document.getElementById("first");
//element.onclick = function handleClick(){
//    element.textContent = "Strike is Coming";
//}
//
//element.onclick = function handleClick(){
//    element.textContent = "I am the best";
//}
// second wala first ko override kr dega

//const element = document.getElementById("first");
//element.addEventListener('click',()=>{
//    element.textContent = "Strike is Coming";
//});

//element.addEventListener('click',()=>{
//    element.style.backgroundColor = "brown"
//});
// addEventListener method ha element ka kitni bhi bar call kr skta ha

//let a = {
//    b:20,
//    greet: function(val){
//        console.log("Hello",val);
//    }
//}
//a.b = 30;
//a.b = 50;
//a.greet(10);
//a.greet(20);


// select kiya child1 ko ispa eventlistener lgaya click pr
//const child1 = document.getElementById("child1");
//child1.addEventListener('click',()=>{
//    child1.textContent = "I am clicked";
//})

const parent = document.getElementById("parent");
//console.log(parent.children);

function handleClick(e){
    e.target.textContent = "I am clicked";
    parent.removeEventListener('click',handleClick)
}
parent.addEventListener('click',handleClick)
// Event listener ko remove bhi krna pdta hai


//parent.addEventListener('click',(e)=>{
//    //console.log(e.target);
//     e.target.textContent = "I am clicked";
//})

//parent.removeEventListener('click',(e)=>{
//    //console.log(e.target);
//     e.target.textContent = "I am clicked";
//})

// for(let child of parent.children){
//     console.log(child);
//    child.addEventListener('click',()=>{
//     child.textContent = "I am clicked";
//    })
// }


// jb bhi hum koi action perform krta ha to eventlistener ek event object la kr deta ha
//const grandparent = document.getElementById("grandparent");
//grandparent.addEventListener('click',(e)=>{
//    console.log(e.target);        // e.target us element ko point krega jisna usko trigger kra tha
//    //console.log("Grandparent is clicked");
//},false)

//const parent = document.getElementById("parent");
//parent.addEventListener('click',(e)=>{
//    //console.log(e);
//    //console.log("Parent is clicked");
//},false)
//
//const child = document.getElementById("child");
//child.addEventListener('click',(e)=>{
//    //console.log(e);
//    //e.stopPropagation();   // bubling rokna ka liye
//    //console.log("Child is clicked");
//},false)

// three phases
// 1. Capture phase: agar true ha to capture phase ma eventlistner ko execute krayga
// 2. Target phase
// 3. bubling phase: agar false ha to bubling phase ma eventlistener ko trigger krayga

// capture phase on hai: Top se down aaoge: Usi time pa event ko trigger kar diya jayga
// capture phase off hai: Event hai usko down to up(Bubling phase) ma trigger kra jayga


// agar capture false ha to pahla upar sa tree ko traverse krega target value tk fir vha sa bubbling strt hogi
// agar capture phase true ha to DOM tree ma upar sa hi eventlistener check krna strt krega

// true -> execute in capture phase
// false -> execute in bubling phase

// capture phase ma upar sa check krega jispa eventlistener lga hoga uska capture check krega agar true hua to
// vhi execute kra dega agar false hua to usa execute nhi krayga vo bubling phase ma execute hoga