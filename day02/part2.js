const fs = require('fs');
const text = fs.readFileSync('input.txt').toString('utf-8');
const input = text.split('\n');

const forward = [];
let aim = 0; 
let depth = 0;

const dive = () => {
    input.forEach((movement) => {
    if (movement.includes('forward')) {
        forward.push(parseInt(movement.slice(8)))
        depth += aim * parseInt(movement.slice(8));
    } else if (movement.includes('up')) {
        aim-=parseInt(movement.slice(3)); // decreases your aim by X units.
    } else {
        aim+=parseInt(movement.slice(5)); // increases your aim by X units.
    }
})
const fowardfinal = forward.reduce((acc, a) => acc + a, 0);

return fowardfinal * depth;
}

console.log(dive());