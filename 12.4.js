function ElectricItem(name, kilowatt, favor) {
    this.name = name,
    this.screenType = "QLED",
    this.energyUsage = kilowatt;
    this.isNeedFavor = favor;
    this.turnOn = function () { console.log (`Прибор включен в розетку.`)
    this.power = function () {console.log (`Мощность прибора: ${kilowatt}`)}
    }
}


const monitor = new ElectricItem ("Monitor", 100, "yes");
const tv = new ElectricItem("TV", 150, "yes");

function LightingItem(name, kilowatt, lightType) {
    this.name = name,
    this.kilowatt = kilowatt,
    this.lightType = lightType
    this.acuumulator = function () {
        console.log(`Прибор работает на аккумуляторе.`)
    }
    
}

LightingItem.prototype = new ElectricItem()

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