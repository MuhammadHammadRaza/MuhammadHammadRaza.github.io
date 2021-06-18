//targetting list which to be displayed
var list = document.getElementById("list");
//targetting input bar
var todoItem = document.getElementById("todoItem");


function addTodo() {

    //creating if to prevent user from creating empty lists
    if (todoItem.value !== "") {
        //creating li tag
        var listItem = document.createElement("li");

        //making a variable, storing input bar value in the form of text node
        var lItemName = document.createTextNode(todoItem.value);

        //storing input bar value stored in var lItemName as its child
        listItem.appendChild(lItemName);

        //storing li tag containing values as child of <ul> in HTML
        list.appendChild(listItem);

        todoItem.value = "";

        listItem.appendChild(document.createElement("br"))

        //creating delete button
        var deleteBtn = document.createElement("button");

        //making variable to store name of button
        var dltBtnName = document.createTextNode("DELETE");

        // storing dltbtnName value in deleteBtn
        deleteBtn.appendChild(dltBtnName);

        // adding onclick attribute to deleteBtn, function deleteItem will be called
        deleteBtn.setAttribute("onclick", "deleteItem(this)");
        deleteBtn.setAttribute("class", "button");

        //adding delete button in li
        listItem.appendChild(deleteBtn);

        //creating edit button
        var editBtn = document.createElement("button");

        //making variable to store name of button
        var editBtnName = document.createTextNode("EDIT");

        // storing editBtnName value in editBtn
        editBtn.appendChild(editBtnName);

        // adding onclick attribute to editBtn, function editItem will be called
        editBtn.setAttribute("onclick", "editItem(this)");
        deleteBtn.setAttribute("class", "button");

        //adding delete button in li
        listItem.appendChild(editBtn);
    }
    console.log(lItemName);
}

function deleteItem(e) {
    e.parentNode.remove();
}

function editItem(e) {
    var val = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}

function dltTodo() {
    list.innerHTML = "";
}