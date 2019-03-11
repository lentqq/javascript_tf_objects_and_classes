function personInfo(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    }

    // First way

    for (const pair in person) {
        console.log(`${pair}: ${person[pair]}`);
    }

    //Second way
    
    // let entries = Object.entries(person);
    // for (const pair of entries) {
    //     console.log(`${pair[0]}: ${pair[1]}`);
    // }
}

personInfo('Peter', 'Pan', 20)