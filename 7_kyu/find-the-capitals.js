// https://www.codewars.com/kata/find-the-capitals-1/train/javascript
const capitals = word => {
    let indexArr = [];
    let splitWord = word.split('');
    for (let i = 0; i < splitWord.length; i++) {
        if (splitWord[i] === splitWord[i].toUpperCase()) {
            indexArr.push(i)
        }
    }
    return indexArr;
}