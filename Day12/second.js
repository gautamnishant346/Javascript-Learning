// ----------Element creation------------

const newElement = document.createElement("h2");
newElement.textContent = "Javascript Course";
newElement.style.backgroundColor = "orange"
newElement.style.fontFamily = "sans-serif"
newElement.id = "second";
console.log(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "Hello Nishant";
newElement2.id = "third";
newElement2.classList.add("diwali");
newElement2.classList.add("holi");
//newElement2.classList.remove("diwali");
newElement2.setAttribute("hello","Nishant");
console.log(newElement2);

console.log(newElement2.getAttribute("hello"));

// ------------Show in UI-----------------
const element = document.getElementById("first");
element.after(newElement);
element.before(newElement2);



// ------ul practice-------

const list = document.createElement("li");
list.textContent = "Apple";

const list2 = document.createElement("li");
list2.textContent = "Banana";

const list3 = document.createElement("li");
list3.textContent = "Cake";

const list4 = document.createElement("li");
list4.textContent = "Milk";

const s1 = document.getElementById("listing");
s1.append(list,list2);
s1.prepend(list3);
list3.after(list4);



// ------Example--------

const arr = ["Paneer","Chicken","Tofu","Milk"];
const fragment = document.createDocumentFragment();

const s2 = document.getElementById("lister");

for(let food of arr){
    const lis = document.createElement("li");
    lis.textContent = food;
    fragment.append(lis);
    //s2.append(lis);
    // append sa har ek list ka liye UI disturb ho rhi ha

}
s2.append(fragment);