var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// form submit
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// search
filter.addEventListener('keyup', filterItems);

function addItem(e) {

    e.preventDefault();

    // get inout value
    var newItem = document.getElementById('item').value;

    //create new element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    // create delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
// search
function filterItems(e) {
   
    var text = e.target.value.toLowerCase();
    //console.log(text);
    var items = itemList.getElementsByTagName('li');
    
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}