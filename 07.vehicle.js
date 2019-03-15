class Vehicle {
    constructor(type, model, parts, fuel) {
         this.type = type;
         this.model = model;
         this.parts = parts;
         this.parts.engine;
         this.parts.power;
         this.parts.quality = parts.engine * parts.power;
         this.fuel = fuel;
    }

     drive(usedFuel) {
         this.fuel -= usedFuel;
    }
}

let parts = {engine: 7, power: 200};
let vehicle = new Vehicle('Porshe', 'Cayenne', parts, 500);
vehicle.drive(200);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);