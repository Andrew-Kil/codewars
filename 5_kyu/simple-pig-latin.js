Move the first letter of each word to the end of it, then add "ay"
to the end of the word.Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !'); // elloHay orldway !

const pigIt = str => {
    let splitStr = str.split(' ');
    let ans = "";

    splitStr.forEach(el => {
        ans += el.slice(1, el.length) + " ";
        console.log(ans);
    })

    let splitStr2 = splitStr.split(' ');
    
    splitStr.forEach(el => {
        ans += s
    })
}

pigIt('hello world')