// const playlist = {
//   name: "My favorite songs",
//   traks: ["A", "B", "C", "D", "E", "F"],
//   author: {
//     name: "Vova",
//     subscribers: 106,
//     country: "Ukraine",
//   },

//   showSongsQuantity() {
//     return this.traks.langth;
//   },
// };

// playlist.showSongsQuantity;
// console.log(playlist);

// const {
//   name,
//   traks,
//   author: {name: authorName, subscribers, country },
//   poster = "empty",
// } = playlist;
// console.log(authorName);

// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
//   features: ["power windows", "rear camera", "navigation"],
//   safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true,
//   },
// };

// const {
//   make,
//   model,
//   year,
//   features: [featur1, featur2, featur3],
//   safety: { airbags, antilock_brakes, stability_control },
// } = car;

// console.log(
//   `Make: ${make}\nModel: ${model}\nYear: ${year}\nFeatures: ${
//     (featur1, featur2, featur3)
//   }\nSafety: airbags: ${airbags}, antilock brakes: ${antilock_brakes}, stability control: ${stability_control}`
// );

// const movie = {
//   title: "The Shawshank Redemption",
//   director: {
//     name: "Frank Darabont",
//     nationality: "American",
//   },
//   actors: ["Tim Robbins", "Morgan Freeman"],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90,
//   },
// };

// const {
//   title,
//   director: { name, nationality },
//   actors: [actor1, actor2],
//   release_year,
//   ratings: { imdb, rotten_tomatoes },
// } = movie;

// console.log(title, name, nationality, actor1, actor2, release_year, imdb, rotten_tomatoes)

// Напишіть функцію, яка отримує об'єкт з ім'ям, прізвищем та віком та використовує деструктуризацію для повернення рядка, що містить інформацію про цю людину в такому форматі: "Мене звати Ім'я Прізвище і мені Вік років".

// const person = {
//   name: "Nelli",
//   surname: "Laroy",
//   age: 25,
// };

// const personInfo = (obj) => {
//   const { name, surname, age } = obj;

//   return `Name: ${name}, Surname: ${surname}, Age: ${age}`;
// };

// console.log(personInfo(person));

// Напишіть функцію, яка приймає об'єкт, що містить інформацію про студента (ім'я, прізвище, оцінки за три предмети) та використовує деструктуризацію для повернення середньої оцінки студента.

// const student = {
//   name: "Bruce",
//   surname: "Lee",
//   grades: [4, 5, 3],
// };

// const calculateAverageGrade = (obj) => {
//   const {
//     grades,
//   } = obj;

// 	let sum = 0;

// 	for (const grade of grades) {
// 		sum += grade;
// 	}

// 	return sum / grades.length;
// };

// console.log(calculateAverageGrade(student));

// Напишіть функцію, яка отримує масив об'єктів з інформацією про товари (назва, ціна, кількість) та використовує деструктуризацію для обчислення загальної вартості товарів.

const items = [
  { name: "Футболка", price: 250, quantity: 2 },
  { name: "Джинси", price: 800, quantity: 1 },
  { name: "Кросівки", price: 1200, quantity: 1 },
];

const calculateTotalCost = (items) => {
  const [
    { name: name1, price: price1, quantity: quantity1 },
    { name: name2, price: price2, quantity: quantity2 },
    { name: name3, price: price3, quantity: quantity3 },
	] = items;
	
	return price1 * quantity1 + price2 * quantity2 + price3 * quantity3
};

console.log(calculateTotalCost(items)); // 250 * 2 + 800 * 1 + 1200 * 1 = 2500
