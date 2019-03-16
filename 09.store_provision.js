function storeProvision(array) {
    let currentStock = array[0];
    let orderedStock = array[1];
    let result = {};

    for (let i = 0; i < currentStock.length; i++) {
        if (i % 2 === 0) {
            result[currentStock[i]] = Number(currentStock[i + 1]);
        }
    }

    for (let i = 0; i < orderedStock.length; i++) {
        if (i % 2 === 0){
            if (result.hasOwnProperty(orderedStock[i])) {
                result[orderedStock[i]] += Number(orderedStock[i + 1]);
            }
            else {
                result[orderedStock[i]] = Number(orderedStock[i + 1]);
            }
        }
    }
    console.log(result);
    let reversedResult  = JSON.stringify(result)
    console.log(reversedResult);
}

storeProvision([['Chips', '5', 'CocaCola', '9',
    'Bananas', '14', 'Pasta', '4', 'Beer',
    '2'], ['Flour', '44', 'Oil', '12',
    'Pasta', '7', 'Tomatoes', '70',
    'Bananas', '30']])