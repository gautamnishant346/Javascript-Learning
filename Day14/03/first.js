
const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    // default behaviour ma form direct submit hojara ha
    e.preventDefault();
    const Boy = document.getElementById('Boy');
    const Girl = document.getElementById('Girl');
    //Boy or Girl.value sa jo input milega usa read kr skta ha

    const l1 = Boy.value.length;
    const l2 = Girl.value.length;

    const result = Math.pow(l1+l2,4)%101;

    const show = document.querySelector('h2');
    show.textContent = `Result: ${result}%`;

    form.reset();
})