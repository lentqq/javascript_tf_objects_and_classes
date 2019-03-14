function city(name, area, population, country, postCode) {
    let city = {
        name, area, population, country, postCode
    }
    
    for (const pair in city) {        
        console.log(`${pair} -> ${city[pair]}`);
    }
}

city('Michuryn', 25, 6000, 'Bulgaria', 8620)