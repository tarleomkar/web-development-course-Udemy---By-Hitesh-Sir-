// example 1
let hold = document.getElementById('changeTextButton').addEventListener('click', function () {
    let paragraph = document.getElementById('myParagraph');
    // console.log(paragraph);
    // console.log(paragraph.textContent);
    paragraph.textContent = "The pargraph is change using DOM!";
});

// example 2
document.getElementById('highlightFirstCity').addEventListener('click', function() {
    let citiesList = document.getElementById('citiesList');
    citiesList.firstElementChild.classList.add('highlight');
});

// example 3
document.getElementById('changeOrder').addEventListener('click', function() {
    let coffeeType = document.getElementById('coffeeType');
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "Brown";
    coffeeType.style.padding = "5px";
});

// example 4
/*
document.getElementById('addNewItem').addEventListener('click', function() {
    let newItem = document.createElement('li');
    newItem.textContent = "Eggs"

    document.getElementById('shoppingList').appendChild(newItem)
});
*/

document.getElementById('addNewItem').addEventListener('click', function() {
    let items = ["Biscuit", "Coffee", "Toasts"];
    let shoppingList = document.getElementById('shoppingList');

    items.forEach(function  (item) {
        let newItem = document.createElement('li');
        newItem.textContent = item;
        shoppingList.appendChild(newItem);
    });
});

// Example 5
document.getElementById('removeLastTask').addEventListener('click', function() {
    let taskList = document.getElementById('taskList');
    taskList.lastElementChild.remove();
});