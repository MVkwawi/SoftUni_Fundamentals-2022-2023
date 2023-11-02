class Storage {
    constructor(capacity){
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        if (product.quantity <= this.capacity) {
            this.storage.push(product);
            this.totalCost += product.price * product.quantity;
            this.capacity -= product.quantity;
        } else {
            console.log("There is not enough capacity to add this product.");
        }
        //  a function that receives a product and adds it to the storage
    }

    getProducts() {
        return this.storage.map((product) => JSON.stringify(product)).join('\n');
        //a function that returns all the products in storage in JSON format, each on a new line
    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
