// Element create
const newElement = document.createElement("h2");
newElement.textContent = "Strike is coming";
newElement.id = "second";
console.log(newElement);

// select element
const element = document.getElementById("first");
element.after(newElement);
//element.before(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "Diwali Aana wali ha";
newElement2.style.backgroundColor = "brown";
newElement2.style.fontSize = "30px";
newElement2.setAttribute("hello","ji");

newElement2.id = "third";
newElement2.classList.add("diwali");
newElement2.classList.add("holi");
//new1.classList.remove("diwali");


console.log(newElement2.getAttribute("hello"));
element.before(newElement2);

// before and after


//const list = document.createElement("li");
//list.textContent = "Milk";
//
//const list2 = document.createElement("li");
//list2.textContent = "Cake";
//
//const list3 = document.createElement("li");
//list3.textContent = "Halwa";
//
//const list4 = document.createElement("li");
//list4.textContent = "Paneer";
//
//const unorderElement = document.getElementById("listing");
//unorderElement.append(list,list2);
//unorderElement.prepend(list3);
//
//list.after(list4);
//unorderElement.children[1].after(list4);

const arr = ["Milk","Cake","Paneer","Tofu","Tea"];

const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();

for(let food of arr){
   const list = document.createElement("li");
   list.textContent = food;
   fragment.append(list);
}
unorderElement.append(fragment);


const s1 = document.getElementById("first");
s1.remove();



// old method
const month = document.getElementById("ten");

//console.log(month.children);

const lister = document.createElement("li");
// textContent sirf text trah hi consider krta ha
//lister.textContent = "<h2>Help</h2>";

// innerHTML tags ko bhi consider krega aur execute krta ha
lister.innerHTML = "<img src=''>"
month.prepend(lister);

//month.insertAdjacentElement("beforeend",lister);
