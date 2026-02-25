const no = document.getElementById("no");
const yes = document.getElementById("yes");
const parent = document.getElementById("parent");

no.addEventListener('mouseenter',(e)=>{
   // screen width and height
   const maxX = window.innerWidth-no.offsetWidth;
   const maxY = window.innerHeight-no.offsetHeight;

   // random position
   const randomX = Math.random()*maxX;
   const randomY = Math.random()*maxY;

   no.style.position = "absolute";
   no.style.left = randomX+"px";
   no.style.top = randomY+"px";

})

yes.addEventListener('click',()=>{
    //const show = document.querySelector('h2');

    const show = document.createElement("div");
    show.classList.add("one");
    const msg = document.createElement("h2");
    msg.textContent = "Yes I knew it...";
    msg.style.color = "skyblue";

    show.append(msg);
    parent.append(show);
})