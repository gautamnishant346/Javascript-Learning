const body = document.querySelector('body');
body.addEventListener('click',(e)=>{
  console.log(e.clientX, e.clientY);

  const circleElement = document.createElement('div');
  circleElement.classList.add('circle');
  circleElement.textContent = `Hi`;

  const color = ['red','blue','orange','green','pink','purple','yellow'];
  circleElement.style.backgroundColor = color[Math.floor(Math.random()*7)];

  circleElement.style.top = `${e.clientY-25}px`;
  circleElement.style.left = `${e.clientX-25}px`;


  body.append(circleElement);
  console.log(body);

  setTimeout(()=>{
    circleElement.remove();
  },5000);

  // setInterval bar bar chlta ha lekin setTimeout sirf ek hi bar chlta ha
})