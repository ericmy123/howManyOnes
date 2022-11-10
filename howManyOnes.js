let countOfOnes = 0;
let rangeArray = [];

const range = (start, end) => {
    for (let i = start; i < end; i++) {
        rangeArray.push(i);
    }
}


const startNum = 1;
const endNum = 100;
range(startNum, endNum);


const filteredArray = rangeArray.filter(ones => ones === 1);
console.log(filteredArray);