const fs = require('fs');
const text = fs.readFileSync('input.txt').toString('utf-8');
const input = text.split('\n').map((x) => Number(x));

let increasing = 0;

const sonarSweep = () => {
    for(let i = 3; i < input.length; i++){
        const tempArry = [];

        for (let j = 3; j > -1; j--) {
            tempArry.push(input[i-j]);
        }

        let a = tempArry[0] + tempArry[1] + tempArry[2];
        let b = tempArry[1] + tempArry[2] + tempArry[3];
        if (b > a) {
            increasing+=1
        }
    } 
    return increasing;
};

console.log(sonarSweep());