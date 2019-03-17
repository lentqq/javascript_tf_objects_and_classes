function inventory(array) {
    let registerForTheHeroes = [];

    for (const element of array) {
        let [name, level, items] = element.split(' / ');
        level = Number(level);
        items = items.split(', ');
        registerForTheHeroes.push({
            name, level,items
        });
    }
    console.log(JSON.stringify(registerForTheHeroes));
}

inventory(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara&quot"])