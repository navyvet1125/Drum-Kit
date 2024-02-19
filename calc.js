const calculator = (num1, num2, operator) =>  operator(num1, num2);
const add = (num1, num2) =>  num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) =>  num1 * num2
const divide = (num1, num2) => num1 / num2
const modulo = (num1, num2) => num1 % num2
const power = (num1, num2) => num1 ** num2

console.log(calculator(10,2,add))
console.log(calculator(10,2,subtract))
console.log(calculator(10,2,multiply))
console.log(calculator(10,2,divide))
console.log(calculator(10,2,modulo))
console.log(calculator(10,2,power))

