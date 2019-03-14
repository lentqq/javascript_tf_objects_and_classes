function convertToObject(jsonString) {
    let convert = JSON.parse(jsonString);
    let entries = Object.entries(convert);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "Nikolay", "age": "47", "town": "Michuryn"}')