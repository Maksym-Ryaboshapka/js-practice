// const listFlower = [
//   "Rose",
//   "Lily",
//   "Mariold",
//   "Chamomile",
//   "Peonies",
//   "Crocus",
// ];

// console.log(listFlower);
// console.log(typeof listFlower);
// console.log(listFlower[2]);

// const Marigold = listFlower[2];
// console.log(Marigold);

// const flowerQuantity = listFlower.length;

// console.log(flowerQuantity);

// const lastFlowerIndex = listFlower.length - 1;
// console.log(listFlower[lastFlowerIndex]);

// const arr1 = [1, 2, 3, 4, 5];
// arr1[5] = 6;

// console.log(arr1);

// for (let i = 0; i < listFlower.length; i++) {
//   console.log(listFlower[i]);
// }

// Написати скрипт який порахує сумму всіх парних чисел в масиві
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
// i = 0 -> 1
// i = 2 -> 8 -> total = total (0) + 8; -> total = 8
// i = 3 ->9
// i = 4 -> 12 -> total = total(8) + 12; -> total = 20
//   }
// }
// console.log(total);

// const friends = [
//   ["Misha", "Ilya", "Kazimir"],
//   ["Sasha", "Maksym"]
// ]

// console.log(friends[1][1]);

// Напиши скрипт пошуку самого маленького числа в масиві, при умові, що числа унікальні (не повторюються).
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (smallestNumber > number) {
//     smallestNumber = number;
//   }
// }

// console.log(smallestNumber);

const arr1 = [5, 10, 15, 20];
const arr2 = [10, 20, 30];

let sum = 0;

// for (let i = 0; i < arr1.length; i++) {
//   sum += arr1[i];
// }

// console.log(sum);

// for (let j = 0; j < arr2.length; j++) {
//   sum += arr2[j];
// }

// for (const arr1Element of arr1) {
//   sum += arr1Element;
// }

// for (const arr2Element of arr2) {
//   sum += arr2Element;
// }

// console.log(sum);

// Напиши скрипт пошуку логіна. Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.' Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
// - Спочатку через for
// - Потім через for...of
// - Логіка break
// - Метод includes() с тернарним оператором

// const savedLogins = ["login1", "login2", "login3"];
// const userLogin = prompt("Введіть логін").toLowerCase();
// let message;

// for (let i = 0; i < savedLogins.length; i++) {
//   if (userLogin === savedLogins[i]) {
//     message = `Користувач ${userLogin} знайдено`;
//   }
// }

// for (let i of savedLogins) {
//   if (userLogin === i) {
//     message = `Користувач ${userLogin} знайдено`;
//   }
// }

// if (message === undefined) {
//   message = `Користувач ${userLogin} не знайдено`;
// }

// alert(message);

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }

// console.log(total);