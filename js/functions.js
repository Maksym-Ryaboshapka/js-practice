// дані приведені в круглих дужках при виклику функції називають аргументами, і вони ПЕРЕДАЮТЬ дані у функцію параметри ПРИЙМАЮТЬ дані у функцію (там де вона створена) а аргументи ПЕРЕДАЮТЬ дані у Виклику функції

// function showMassege () {
// 	const message = "Hello World!".toUpperCase();

// 	return message;
// }

// const message = showMassege();
// console.log(message);

// function test() {
//   return "test";
// }

// console.log(test());

// function sumNumbers(number1, number2, number3) {
// const sum = number1 + number2 + number3;

// return sum;
// 	return number1 + number2 + number3;
// }

// console.log(sumNumbers(1, 2, 3));

// const createMessage = function () {
// 	return "Hello World!";
// }

// console.log(createMessage());

// const createMessage = () => {
// 	return "Hello World!";
// }

// console.log(createMessage());

// const numbers = [12, 23, 56];

// function calculationOfSum(numbersArray) {
//   let sum = 0;

//   for (const number of numbersArray) {
//     sum += number;
//   }

//   return sum;
// }

// console.log(calculationOfSum(numbers));

// const test = [23, 78, 12];

// console.log(calculationOfSum(test));

// const array = [1, 2, 3, 4, 5];

// function multiplyNumbers() {
//   let multiply = 1;
//   const numbers = Array.from(arguments);

//   for (const number of numbers) {
//     multiply *= number;
//   }

//   return multiply;
// }

// function multiplyNumbers(...numbers) {
//   let multiply = 1;

//   for (const number of numbers) {
//     multiply *= number;
//   }

//   return multiply;
// }

// console.log(multiplyNumbers(4, 2, 5, 8));

// const text = "Hello World!";

// function showText() {
//   alert(text)
// }

// showText();

const friends = ["Dima", "Artur", "Vlad", "Yasha"];

// function countFriends(friends) {
//   const friendsQuantity = friends.length;

//   return friendsQuantity;
// }

// console.log(countFriends(friends));

// const countFriends = function (friends) {
//   const friendsQuantity = friends.length;

//   return friendsQuantity;
// };

// console.log(countFriends(friends));

// const countFriends = (friends) => {
//   const friendsQuantity = friends.length;

//   return friendsQuantity;
// };

// const countFriends = friends => friends.length;

// console.log(countFriends(friends));


const showMessage = (sum) => {
	return `Загальна сума: ${sum(5, 8, 2)}`;
};

const message = showMessage((a, b, c) => a + b + c);
console.log(message);