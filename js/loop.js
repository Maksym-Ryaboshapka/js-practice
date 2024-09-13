// for (let i = 0; i < 10; i++) {
//   console.log(`Виводимо число ${i}`);
// }

// let totalSalary = 0;
// const employess = 10;
// const minSalary = 500;
// const maxSalary = 5000;

// for (let i = 1; i <= employess; i++) {
// 	const firstSalary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

// 	totalSalary += firstSalary;
// 	console.log(`Зарплата ${i} працівника - ${firstSalary}`)
// }

// console.log(totalSalary);

// const min = 0;
// const max = 9;
// let sum = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
// 		sum += i;
//   }
// }

// for (let i = min; i <= max; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   } else {
//     sum += i;
//   }
// }

// console.log(sum);

// for (let i = 1; i <= 15; i++) {
//   if (i === 9) {
//     continue;
// 	} else {
// 		console.log(i);
// 	}
// }

// const number = Number(prompt("Введіть число"));

// for (let i = 1; i <= 100; i++) {
//   if (i === number) {
// 		alert(i);
// 		break;
//   }
// }

// for (let i = 1; i <= 5; i++) {
// 	console.log(i);
// }

// let i = 1;

// while (i <= 5) {
//   console.log(i);

//   i++;
// }

// let i = 1;

// do {
//   console.log(i);

//   i++;
// } while (i <= 5);

// let number = 0;

// while (number < 5) {
//   console.log(number);

//   number++;
// }

// for (let kid = 1; kid <= 7; kid += 1) {
//   // console.log(kid);
//   const mark = Math.round(Math.random() * (12 - 1) + 1);
//   console.log(`в учня номер ${kid} середній бал становить = ${mark}`);
// }

// let kid = 1;

// while (kid <= 7) {
//   const mark = Math.round(Math.random() * (12 - 1) + 1);
//   console.log(`в учня номер ${kid} середній бал становить = ${mark}`);

//   kid++;
// }

// Напиши цикл, який пропонує в prompt ввести число, більше 100. Якщо відвідувач ввів інше число – попросити ввести ще раз и т.д.

// let number;

// do {
// 	number = Number(prompt("Введіть число більше за 100"));
// } while (number > 100);

// 2. Цикл повинен питати число поки відвідувач не введе число, більше 100, або не натисне кнопку Відміна (ESC).

// let number;

// do {
// 	number = prompt("Введіть число більше за 100");

// 	if (Number(number) > 100 || number === null) {
// 		break;
// 	}

// 	console.log(number);
// } while (number < 100 && number !== null);

// 3. Напиши скрипт, який імітує авторизацію адміністратора в панелі управління. Є змінна message в яку буде записано повідомлення про результат. При завантаженні сторінки у відвідувача запитується пароль через prompt:
// - Якщо натиснули Cancel, записати в message рядок 'Скасовано користувачем!'
// - В іншому випадку, якщо введений пароль який збігається зі значенням константи ADMIN_PASSWORD, записати в message рядок 'Ласкаво просимо!'
// - В іншому випадку, тобто якщо жодна з попередніх умов не виконалася, записати в message рядок 'Доступ заборонений, невірний пароль!'
// - Після всіх перевірок вивести в alert значення змінної message.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const userAnswer = prompt("Введіть пароль");