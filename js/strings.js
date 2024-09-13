const testString = "Hello";

console.log(testString.startsWith("H"));
console.log(testString.endsWith("H"));

const testSlogan = " My name is Maksym";

console.log(testSlogan);
console.log(testSlogan.length);

const newTestSlogan = testSlogan.trim();

console.log(newTestSlogan);
console.log(newTestSlogan.length);

const string2 = "text text1 text2 text3";
const fullString2 = string2.padStart(50, ".");
const fullString1 = string2.padEnd(35, ".")

console.log(fullString2);
console.log(fullString1);

const string3 = string2.replace("text1", "u");
console.log(string3);

const string4 = string2.search("text2"); 
console.log(string4);

const string5 = string2.slice(0, 4);
console.log(string5);

const string6 = string2.slice(5, string2.length - 1);
console.log(string6);

// Що буде в консолі?
const orderMsg = `Ви замовляєте 15 тістечок.`;
console.log(orderMsg.includes(15));
console.log(orderMsg.indexOf('1'));

// Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .charAt(), вивести перший символ вашого імені в консоль.

// const myName = "Maksym";
// const symbol = myName.charAt(0);

// console.log(symbol);

// Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .replace(), замінити першу літеру вашого імені на символ "@" та вивести результат в консоль.

// const myName = "Maksym";
// const myNameReplace = myName.replace("M", "@");

// console.log(myNameReplace);

// Створити змінну, яка містить рядок зі словом "JavaScript". Використовуючи метод .substring(), вивести підстроку, яка містить перші 4 символи слова "Java".

const string = "JavaScript";
const newString = string.substring(0, 4);

console.log(newString);

const myName = "Maksym";
const surName = "Ryaboshapka";
const age = 13;
const message = myName + " " + surName + " is " + age;
const message2 = `${myName} ${surName} is ${age}`;

console.log(message);
console.log(message2);
