const typingText = document.querySelector('.typing-text');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.time span b');
const mistakes = document.querySelector('.mistake span');
const wpm = document.querySelector('.wpm span');
const cpm = document.querySelector('.cpm span');
const btn = document.querySelector('button');

// set value
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph(){
    const paragraph = [
    "Start your day with meditation for a peaceful mind.",
    "Write down three things you’re grateful for daily.",
    "Spend time with your family and cherish those moments.",
    "Help someone in need, even in small ways.",
    "Read a book that inspires you to grow.",
    "Exercise regularly to keep your body healthy.",
    "Donate clothes you don’t wear to charity.",
    "Cook a meal for someone and share the joy of food.",
    "Smile at strangers and brighten their day.",
    "Learn a new skill or hobby that excites you.",
    "Reduce your plastic use to help the environment.",
    "Disconnect from social media for a day and enjoy the moment.",
    "Start a journal to document your thoughts and dreams.",
    "Spend time in nature and appreciate its beauty.",
    "Compliment someone genuinely and make their day.",
    "Clean your room or workspace to feel more organized.",
    "Drink more water and prioritize your health.",
    "Write a letter to your future self."
    ];

    const randomIndex = Math.floor(Math.random()*paragraph.length);
    typingText.innerHTML = '';
    for(const char of paragraph[randomIndex]){
       console.log(char);
       typingText.innerHTML+= `<span>${char}</span>` 
    }
    typingText.querySelectorAll('span')[0].classList.add('active');
    document.addEventListener('keydown',()=>input.focus());
    typingText.addEventListener('click',()=>input.focus());
}

// Handle user input
function initTyping(){
  const char = typingText.querySelectorAll('span');
  const typedchar = input.value.charAt(charIndex);
  if(charIndex < char.length && timeLeft > 0){

    if(!isTyping){
        timer = setInterval(initTime,1000);
        isTyping = true;
    }

    if(char[charIndex].innerText === typedchar){
        char[charIndex].classList.add('correct');
        console.log("correct");
    }
    else{
        mistake++;
        char[charIndex].classList.add('incorrect');   
        console.log("incorrect");
    }
    charIndex++;
    char[charIndex].classList.add('active');
    mistakes.innerText = mistake;
    cpm.innerText = charIndex - mistake;
  }
  else{
    clearInterval(timer);
    input.value = '';
  }
}

function initTime(){
    if(timeLeft > 0){
        timeLeft--;
        time.innerText = timeLeft;
        let wpmVal = Math.round(((charIndex - mistake)/5) / (maxTime - timeLeft)*60);
        wpm.innerText = wpmVal;
    }
    else{
        clearInterval(timer);
    }
}

function reset(){
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    time.innerText = timeLeft;
    input.value = '';
    charIndex = 0;
    mistake = 0;
    isTyping = false;
    wpm.innerText = 0;
    cpm.innerText = 0;
    mistakes.innerText = 0
}

input.addEventListener('input',initTyping);
btn.addEventListener('click',reset);

loadParagraph();