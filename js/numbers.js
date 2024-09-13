console.dir(Number);

let a = "4";

console.log(a);
console.log(typeof a);

a = Number(a);

console.log(a);
console.log(typeof a);

const b = 7;
const sum = a + b;

console.log(sum);

const widthPicture = "465px";
const width = Number.parseFloat(widthPicture);

console.log(width);

const heightPicture = "500.5px";
const height = Number.parseInt(heightPicture);

console.log(height);
// метод parseFloat витягує з рядка не цілі числа, а метод parseInt витягує тільки цілі числа

const d = "hello";
const newD = Number(d);
const result = Number.isNaN(newD);

console.log(result);

// У класі Math зберігаються методи для роботи з числами
console.dir(Math);

const maxNumber = Math.max(10, 34, 31, 1203);

console.log(maxNumber);
console.log(Math.min(123, 45, 8, 2));

let f = 3.3568234;

console.log(Math.ceil(f)); // >
console.log(Math.floor(f)); // <
console.log(Math.round(f)); // =

f = f.toFixed(2);
console.log(f);

const m = 5.8808659;

console.log(m.toFixed(3));
console.log(Number(m.toFixed(3)));

console.log(Math.pow(5, 3));
console.log(5 ** 3);

const randomNumber = Math.random();
console.log(randomNumber);

const max = 1;
const min = 100;
const randomNum = Math.random() * (max - min) + min;

console.log(Math.round(randomNum));

console.log(0.1 + 0.2);
console.log((0.1 * 10 + 0.2 * 10) / 10);
