class Storage {
    constructor(capacity) {
        this.capacity = capacity;
    }

   storage = {
        name, price, quantity
    }

    addProduct(name, price, quantity) {
        name,
            price,
            quantity
    }

    getProducts(storage) {
        let convertedObject = JSON.stringify(storage);
        return console.log(convertedObject);
    }
}

let productOne = {
    name: 'Cucamber', price:
        1.50, quantity: 15
}
let productTwo = {
    name: 'Tomato', price:
        0.90, quantity: 25
}
let productThree = {
    name: 'Bread', price:
        1.10, quantity: 8
}
let storage = new Storage(50)
storage.addProduct(productOne)
storage.addProduct(productTwo)
storage.addProduct(productThree)
storage.getProducts()
console.log(storage.capacity)
console.log(storage.totalCost)





