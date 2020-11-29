function getKeys(key, key2) {
    const objKeys = { 1: key, 2: key2}
    for (let key in objKeys)
    if (objKeys.hasOwnProperty(key))
    { console.log(key) }
        for (let key in objKeys)
    { console.log(objKeys[key]) }

}

getKeys(20, 30)