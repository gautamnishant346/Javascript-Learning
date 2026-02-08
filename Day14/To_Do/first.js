
const form = document.querySelector('form');
const result = document.getElementById('result');
const input = document.querySelector('input');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text = input.value.trim();

    if(text=="")
        return;

    const parent = document.createElement('div');
    parent.style.marginTop = "30px";
    parent.style.marginLeft = "450px"

    const task = document.createElement('span');
    task.textContent = text;
    task.style.fontSize = "30px";
    task.style.marginRight = "20px";

    const deleteButton = document.createElement('button');
    deleteButton.style.width = "130px"
    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    deleteButton.style.border = "none"
    deleteButton.style.borderRadius = "16px";

    const doneButton = document.createElement('button');
    doneButton.style.width = "130px"
    doneButton.textContent = "Done";
    doneButton.style.backgroundColor = "green";
    doneButton.style.color = "white";
    doneButton.style.marginRight = "10px";
    doneButton.style.border = "none";
    doneButton.style.borderRadius = "16px";

    parent.append(task,doneButton,deleteButton);

    result.append(parent);


    deleteButton.addEventListener('click',()=>{
        parent.remove();
    })

    doneButton.addEventListener('click',()=>{
      task.style.textDecoration = "line-through";
      task.style.color = "grey";
    })

    form.reset();
})