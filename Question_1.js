function sortByStrings(s, t) {
    const sArr = s.split('');
    const tArr = t.split('');
    const newArr = [];
    const sObj = {};

    for (let i = 0; i < sArr.length; i++) {
        if (!sObj[sArr[i]]) {
            sObj[sArr[i]] = 1;
        } else {
            sObj[sArr[i]] += 1;
        }
    }

    for (let i = 0; i < tArr.length; i++) {
        for (let j = 0; j < sObj[tArr[i]]; j++) {
            newArr.push(tArr[i]);
        }
    }
    return newArr.join('');
}

// sortByStrings("weather", "therapyw");
sortByStrings("good", "odg");