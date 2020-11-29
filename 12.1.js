(function (getKeys = { key1: "value1", key2: "value2" }) {
    for (let key in getKeys) {
        getKeys.hasOwnProperty(key) ? console.log(`${key} : ${getKeys[key]}`) : null;
    }
})();