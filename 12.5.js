class ElectricItem {
    constructor(name, kilowatt, favor) {
    this.name = name,
    this.screenType = "QLED",
    this.kilowatt = kilowatt;
    this.favor = favor;
    this.power = function () { console.log(`Мощность прибора: ${kilowatt}`) }
    }
    turnOn = function () { console.log(`Прибор включен в розетку.`) }
}


const monitor = new ElectricItem ("Monitor", 100, "yes");
const tv = new ElectricItem("TV", 150, "yes");
    


class LightingItem extends ElectricItem {
    constructor(name, kilowatt, lightType) {
        super(name, kilowatt);
        this.lightType = lightType
    }
    acuumulator = function () {
        console.log(`Прибор работает на аккумуляторе.`)
    }
}
const tableLamp = new LightingItem("Table lamp", 30, "LED");
const nightLight = new LightingItem("Night-light", 10, "Diode");

console.log(monitor);
console.log(tv);
console.log(tableLamp);
console.log(nightLight);

monitor.turnOn();
monitor.power();
tv.turnOn();
tv.power();

tableLamp.acuumulator();
nightLight.acuumulator();