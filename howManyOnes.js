let countOfOnes = 0;
let arrayOfOnes = [];

const range = (start, end) => {
    for (let i = start; i < end; i++) {
        arrayOfOnes.push(i);
    }
}


const startNum = 1;
const endNum = 100;
range(startNum, endNum);


const filteredArray = arrayOfOnes.filter(ones => ones === 1);
console.log(filteredArray);