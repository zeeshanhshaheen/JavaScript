
// -- Document Object

console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = "abc";
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[8]);

// Selectors

// Get Element by Id

console.log(document.getElementById("header-title"));
var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");
console.log(headerTitle);
headerTitle.textContent = "Hello";
headerTitle.innerText = "Okay"; // pays attention for styling
headerTitle.innerHTML = "<h4>Hello</h4>";
header.style.borderBottom = '2px solid black';

// get Element By ClassName

var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[2]);
items[1].textContent = "changed";
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'green';
for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "#f4f4f4";

}

//get Element by Tag name

var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[2]);
li[1].textContent = "changed";
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'green';

for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = "#f4f4f4";
}

//Query Selector

var header = document.querySelector('#main-header');
header.style.borderBottom = '3px solid black';

var inputVal = document.querySelector('input');
inputVal.value = 'input';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'send';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var randomItem = document.querySelector('.list-group-item:nth-child(2)');
randomItem.style.color = 'green';

// QUery Selector All

var title = document.querySelectorAll('.title');
console.log(title);

title[0].textContent = 'hello';

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i<odd.length; i++) {
    odd[i].style.backgroundColor = "#f4f4f4"; 
}

var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i<even.length; i++) {
    even[i].style.backgroundColor = "#ccc"; 
}

var itemList = document.querySelector('#items');

// Parent node 
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

// parent element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentElement.parentElement);

// Child Nodes
console.log(itemList.childNodes);

// children
console.log(itemList.children);
console.log(itemList.children[2]);
itemList.children[2].style.backgroundColor = 'blue';

//first child
// console.log(itemList.firstChild);

//first Element Child 
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'ok';

// last child
console.log(itemList.lastChild);

//last Element Child 
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'ok';

// next sibling
console.log(itemList.nextSibling);
//next Element Sibling
console.log(itemList.nextElementSibling);

// Previous Sibling
console.log(itemList.previousSibling);

// previous element Sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// Creatoing Element


// create a Div

var newDiv = document.createElement('div');
// add class name
newDiv.className = 'Hello';
// add id
newDiv.id = "div2";
// add Attribute
newDiv.setAttribute('title', 'hello');
// create text node
var newTextNode = document.createTextNode("hello world");
newDiv.appendChild(newTextNode);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '20px';

console.log(newDiv);

// Events

var button = document.getElementById('button').addEventListener('click', buttonClick);
function buttonClick(e) {
    
    console.log('button clicked');
    document.getElementById('header-title').textContent = 'changed';
    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>'
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
}

var button = document.getElementById('button');
button.addEventListener('click', runEvent);
button.addEventListener('dblclick', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
itemInput.addEventListener('keydown', runEvent);

var select = document.querySelector("select");
select.addEventListener('change', runEvent);

itemInput.addEventListener('keydown', runEvent);
function runEvent(e) {
    console.log('Event type: ' + e.type);
    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}

var box = document.getElementById('box');
box.addEventListener("mouseenter", runEvent);
box.addEventListener("mouseleave", runEvent);

box.addEventListener("mouseover", runEvent);
box.addEventListener("mouseout", runEvent);
