"use strict";
const crush1 = {
    name: 'Taniya',
    age: 20,
    proffesion: 'Ghorer Kum',
    address: 'Kolkoti'
};
const crush2 = {
    name: 'Tazmirah',
    proffesion: 'Ghorer Kum',
    address: 'Kolkoti'
};
const isCrushMarried = true;
const courseName = 'Next Level Web Development';
const calculate = (num1, num2, operations) => {
    return operations(num1, num2);
};
calculate(20, 10, (x, y) => x + y);
calculate(20, 10, (x, y) => x - y);
calculate(20, 10, (x, y) => x / y);
