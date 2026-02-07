
const div = document.querySelector('div');
setInterval(()=>{
let time = new Date();
//console.log(time.toLocaleTimeString());
div.textContent = time.toLocaleTimeString("en-US",{hour12:true});
},1000)   // ya time milisecond ma hota ha

// ya code har ek second ma execute hoga