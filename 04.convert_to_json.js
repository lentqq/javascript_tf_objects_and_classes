function convertToJson(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }

    let convertPerson = JSON.stringify(person);
    console.log(convertPerson);
}

convertToJson('Nikolay', 'Kolev', 'No hair! :)')