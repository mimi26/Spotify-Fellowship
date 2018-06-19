function changePossibilities(amount, array) {
    let totalWays = 0;
    for (let i = 0; i < array.length; i++) {
        let newAmount = amount - array[i];
        if (newAmount === 0) {
            totalWays++;
        } else if (newAmount > 0) {
            const filteredArr = [];
            for (let j = 0; j < array.length; j++) {
                if (array[j] >= array[i]) {
                    filteredArr.push(array[j]);
                }
            }
            totalWays += changePossibilities(newAmount, filteredArr);
        }
    }
  
    return totalWays;
}

//testing:
// changePossibilities(4, [1,2,3])//4
// changePossibilities(1, [1, 2, 5, 10, 50, 100, 200]) //1
// changePossibilities(2, [1, 2, 5, 10, 50, 100, 200]) //2
// changePossibilities(3, [1, 2, 5, 10, 50, 100, 200]) //2
// changePossibilities(4, [1, 2, 5, 10, 50, 100, 200]) //3
// changePossibilities(10, [1, 2, 5, 10, 50, 100, 200]) //11
// changePossibilities(17, [1, 2, 5, 50, 10, 100, 200]) //28
changePossibilities(4, [1, 2, 5]) //3

