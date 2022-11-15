let countOfOnes = 0;
let rangeArray = [];

const range = (start, end) => {
    for (let i = start; i < end; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
}

const startNum = 1; //modify startNum and endNum to accept user input from html form through react
const endNum = 100;
range(startNum, endNum);


let rangeString = rangeArray.toString();

for (let ones of rangeString) {
    if (ones.includes('1')) {
        countOfOnes++;
    }
}
console.log(countOfOnes);
