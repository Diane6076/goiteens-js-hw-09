//1
const arrMas = [1, 2, 3];
arrMas[1] = 10;
console.log(arrMas); 

//2
const arrStr = ['one', 'two', 'three'];

arrStr[3] = "four";
console.log(arrStr);

//3
const numbers = [1, 2, 50, 84, 5, 4, 99];
let sum = 0;
for (const number of numbers) {
    sum += number;
}
console.log(sum);

//4

const nums = [1, 2, 3, 4, 5];
for (const num of nums) {
    console.log(num);
}

//5

const arrFruts = ["Apple", "Banana", "Cherry", "Grape", "Strawberry"];
for (const fruts of arrFruts) {
    if (fruts.length >= 5) {
        console.log(fruts);
    } 
}
//6
const arrNumber = [15, 7, 42, 9, 25, 3, 81, 56, 14, 33];
let maxNum = arrNumber [0];
for (const numb of arrNumber ) {
    if (numb > maxNum) {
        maxNum = numb
    }
}
console.log(maxNum);

//7
const numm = [11, 8, 22, 5, 45, 1, 71, 53, 89, 73];

for (const numss of numm) {
    if (numss % 2 === 0) {
        console.log(numss);
    } 
}   

