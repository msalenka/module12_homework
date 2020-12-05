// Задание 4.

// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
// Создать экземпляры каждого прибора;
// Вывести в консоль и посмотреть результаты работы, гордиться собой :)



function ElectricItem(name, kilowatt, favor) {
    this.name = name,
    this.screenType = "QLED",
    this.kilowatt = kilowatt;
    this.favor = favor;
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