
//function handleClick(){
//const element = document.getElementById("first");
//    element.textContent = "Strike is Coming";
//}

//const element = document.getElementById("first");
//element.onclick = function handleClick(){
//    element.textContent = "Strike is Coming";
//}
//element.onclick = function handleClick(){
//    element.textContent = "I am the best";
//}

//const element = document.getElementById("first");
//element.addEventListener('click',()=>{
//    element.textContent = "Strike is Coming";
//})
//element.addEventListener('click',()=>{
//    element.style.backgroundColor = "brown";
//})


// first method: sb div pa manually eventlistener lgana
//const child1 = document.getElementById("child1");
//child1.addEventListener('click',()=>{
//    child1.textContent = "I am clicked";
//})

//const parent = document.getElementById("parent");
//console.log(parent.children);

//for(let child of parent.children){
//    console.log(child);
//    child.addEventListener('click',()=>{
//        child.textContent = "I am clicked";
//    })
//}

//parent.addEventListener('click',(e)=>{
//    //console.log(e.target);
//    e.target.textContent = "I am clicked";
//})

//function handleClick(e){
//    e.target.textContent = "I am clicked";
//    parent.removeEventListener('click',handleClick)
//}
//parent.addEventListener('click',handleClick)


const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click',(e)=>{
    //console.log(e.target);
    console.log("Grandparent is clicked");
},false)

 const parent = document.getElementById("parent");
 parent.addEventListener('click',(e)=>{
    //console.log(e.target);
    console.log("Parent is clicked");
 },false)

const child = document.getElementById("child");
child.addEventListener('click',(e)=>{
    //console.log(e.target);
    console.log("Child is clicked");
    //e.stopPropagation();   bubling rokna ka liye
},false)