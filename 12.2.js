// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.Функция должна возвращать true или false.

function isKey(object, string) {
    if (string in object) {
        return true
    }
    else { return false };
    
}

let someObject = { 1: "one", 2: "two", 3: "three" };
let someString = 1;

let findValue = isKey(someObject, someString);
console.log(findValue);


