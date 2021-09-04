let totalItems=0;
let boxvalue;
const agrega=document.querySelector('#addbtn');
const countDisplay= document.querySelector('#total');

class Store {
    /**
     * @param {string[]} items
     */
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        console.log(items);
        return false;
    }

    getItems() {
        for(let i=0; i<this.items.length(); i++){
            this.items[i];
        }
    }

    getCount() {
        countDisplay.textContent=this.items.length();
    }

    exists(item) {
        this.items.includes(item);
    }
}

// Do not modify this
export default Store;
