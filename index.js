import Store from "./store.js";

const store = new Store;

// Renders the total of items in the store and lists all the items
const render = () => {
    let html = "";
    // 👀 store.getItems() gets you the items in the store
    // and then for each item in the store, add a new row in the table!
    // like this:
    html += "<tr><td>Shampoo</td></tr>"
    // 👀 get the document body first
    const tbody = '??';
    tbody.innerHTML = html;
    // 👀 how many items do my store has?
    // get the document body first
    const total = '??';
    total.textContent = 100000;
}

// Adds a new item to the store
const form = document.querySelector("#add-item-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newItem = document.querySelector("#new-item").value;
    // 👀 how to add a new item to the store?
    // `newItem.value` has the value of whatever the user entered in the form
    // then what to do... store.?
    store.addItem(newItem);
    // rest the input so the user can add a new item later, no need to change this line
    newItem.value = "";
    
    // and then re-renders the page, no need to change this line
    render();
});

// Observing the user input to prevent adding a duplicated item
const checkExists = document.querySelector("#check-exists");
checkExists.addEventListener("keyup", () => {
    // the value the user inputs, no need to change this line
    const itemToCheck = checkExists.value;
    // 👀 how to know it that item already is in the store?
    const exists = exists(itemToCheck);
    if (exists===true) {
        checkExists.classList.add("found");
        checkExists.classList.remove("notfound");
    } else {
        checkExists.classList.remove("found");
        checkExists.classList.add("notfound");
    }
});
