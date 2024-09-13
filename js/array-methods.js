// const message = "Hello World!";
// const letters = message.split("");
// console.log(letters);

// const words = message.split(" ");
// console.log(words);

// const testL = message.split("l");
// console.log(testL);

// const friends = ["Vlad", "Yasha", "Artur", "Dima"];

// console.log(friends.join(", "));

// const names = ["Olya", "Olena", "Oleksandr", "Cavin"];
// console.log(names.indexOf("Oleksandr"));
// console.log(names.indexOf("Olya"));
// console.log(names.indexOf("Maksym"));

// const text = "Hello World!";
// console.log(text.indexOf("o"));
// console.log(text.indexOf("H"));

// const namesOfHouses = ["121a", "32a", "453k", "98t"];
// const isElementInArr = !namesOfHouses.includes("32a");

// console.log(isElementInArr);

// Робимо slug в URL з назви стратті. Заголовок статті складається тільки з букв та пропусків
// - Нормалізуємо рядок
// - Разбиваємо по словах
// - Зшиваємо в рядок з розділителями
// - Ченінг
// Повинно вийти top-10-benefits-of-react-framework
// const title = 'Top 10 benefits of React framework';
// const titleToLowerCase = title.toLowerCase();
// const titleSplit = titleToLowerCase.split(" ");
// const titleJoin = titleSplit.join("-");

// console.log(titleJoin);

// Чейнінг методів

// const result = title.split(" ").join("-").toLowerCase();
// console.log(result);

// const message = 'Welcome to Ukraine!'. Розбити цю строку по буквам в масив, вивести цей масив в консоль. Також вивести в консоль індекс літери l (Л англійська маленька) за допомогою вбудованого метода. Після цього елементи масива поєднати в строку і вивести строку в консоль.

// const message = "Welcome to Ukraine!";
// const letters = message.split("");

// console.log(letters);
// console.log(letters.indexOf("l"));

// const newMessage = letters.join("");

// console.log(newMessage);

// const players = ["Test", "Maksym", "Dima", "Player"];
// let playerWithNumber;

// for (let i = 0; i < players.length; i++) {
// 	console.log(players[i]);

// 	playerWithNumber = players[i].toString() + `-${i}`;

//   console.log(playerWithNumber);
// }

// const arr = [1, 2, 3, 4, 5];

// arr.unshift(-1, 0);
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.push(6, 7);
// console.log(arr);

// arr.pop();
// console.log(arr);

// console.log(arr.slice(0, 2));

// const arrCopy = arr.slice(3, 6);
// console.log(arrCopy);

// const arrCopy0 = arr.slice(0, arr.length - 1);
// console.log(arrCopy0);

// const numbers = [1, 2, 3, 4, 5];

// const deletedNumbers = numbers.splice(0, 1);
// console.log(deletedNumbers);

// const addition = [1, 2, 3, 4, 5]
// addition.splice(1, 0, 1.5)

// console.log(addition)

// addition.splice(3, 1, 3.1)

// console.log(addition);

// const vegetables = ["cucumber", "tomato", "onion", "carrot"];
// const fruits = ["apple", "banana", "orange", "watermelon"];
// const icecream = ["chocolate", "satrawberry", "oreo"];
// const food = vegetables.concat(fruits, icecream);

// console.log(food);
// console.log(vegetables);


// Створіть масив styles з елементами 'Джаз' i 'Блюз'. Додайте 'Рок-н-ролл' в кінець масиву. Замініть значення в середині масиву на 'Класика'. Видаліть перший елемент масиву і покажіть його. Додайте 'Реп' і 'Реггі' на початок масиву. Виведіть масив в консоль.


// const styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-ролл");
// styles.splice(1, 1, "Класика");
// styles.shift();

// console.log(styles[0]);

// styles.unshift("Реп", 'Реггі');

// console.log(styles);

// Створіть масив фруктів, для якого:
// 1) за допомогою методів масиву видаліть по фрукту з початку та кінця, на їх місце додати нові фрукти;

// 2) видалити 3-й елемент, та на його місце вставити декілька інших фруктів використовуючи метод (splice);

// 3) із зміненого масиву створіть повідомлення

// const fruits = ["apple", "banana", "orange", "watermelon"];

// fruits.shift();
// fruits.pop();

// fruits.unshift("pear");
// fruits.push("plum");

// або

// fruits.splice(0, 1);
// fruits.splice(2, 1);

// fruits.splice(0, 0, "pear");
// fruits.splice(2, 0, "plum");

// fruits.splice(2, 0, "peach", "apricot");

// alert(fruits);
// console.log(fruits);