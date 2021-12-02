const fs = require('fs');
const text = fs.readFileSync('input.txt').toString('utf-8');
const input = text.split('\n');

const forward = [];
const down = [];
const up = [];

const dive = () => {
    input.forEach((movement) => {
    if (movement.includes('forward')) {
        forward.push(parseInt(movement.slice(8)))
    } else if (movement.includes('up')) {
        up.push(parseInt(movement.slice(3)))
    } else {
        down.push(parseInt(movement.slice(5)))
    }
})
const fowardfinal = forward.reduce((acc, a) => acc + a, 0);
const downfinal = down.reduce((acc, a) => acc + a, 0);
const upfinal = up.reduce((acc, a) => acc + a, 0);

return fowardfinal * (downfinal - upfinal)
}

console.log(dive());