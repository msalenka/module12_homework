// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в 
// консоль все ключи и значения только собственных свойств.Данная функция не должна возвращать значение.


(function (getKeys = { key1: "value1", key2: "value2" }) {
    for (let key in getKeys) {
        getKeys.hasOwnProperty(key) ? console.log(`${key} : ${getKeys[key]}`) : null;
    }
})();