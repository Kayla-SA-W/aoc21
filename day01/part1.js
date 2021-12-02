const fs = require('fs');
const text = fs.readFileSync('input.txt').toString('utf-8');
const input = text.split('\n')

let increasing = 0;
let prev = 0;

const sonarSweep = () => 
{ input.forEach((curr) => {
    if(curr - prev > 0 && prev !== 0){
        increasing += 1
    }
    prev=curr;
})
    return increasing;
};

console.log(sonarSweep());