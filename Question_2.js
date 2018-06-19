function decodeString(s) {
    let numArr = s.match(/\d+/g);
    let letterArr = s.match(/[a-z]+/g);
    let finalStr = '';
    let subStr = '';
    let currentLetterIndex = letterArr.length - 1;
    let currentNumIndex = numArr.length - 1;

    for (let i = 0; i < numArr.length; i++) {

        if (currentLetterIndex === letterArr.length - 1) {
            subStr = letterArr[currentLetterIndex].repeat(numArr[currentNumIndex]);
            currentLetterIndex--;
            currentNumIndex--;
        } else {
            if (currentLetterIndex === letterArr.length - 2) {
                subStr = `${letterArr[currentLetterIndex]}${subStr}`;
            } else {
                subStr = `${letterArr[currentLetterIndex]}${finalStr}`;
            }
            finalStr = subStr.repeat(numArr[currentNumIndex]);
            currentLetterIndex--;
            currentNumIndex--;
        }
    }

    if (numArr.length === 1) {
        return subStr;
    } else {
        return finalStr;
    }
}

//testing:
// decodeString("4[ab]") //abababab

// decodeString("2[b3[a]]") //baaabaaa

// decodeString("2[a3[b5[c]]]") //abcccccbcccccbcccccabcccccbcccccbccccc

decodeString("2[b3[a4[cd]]]") //bacdcdcdcdacdcdcdcdacdcdcdcdbacdcdcdcdacdcdcdcdacdcdcdcd

