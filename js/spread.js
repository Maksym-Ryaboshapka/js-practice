// const friends = ["frined1", "frined2", "frined3"];
// console.log(friends);
// console.log(...friends);

// const copyFriends = [...friends];
// console.log(copyFriends);

// copyFriends.push("friend4")
// console.log(copyFriends);
// console.log([...copyFriends]);

// const products = [
//   {
//     productName: "ananas",
//     price: 120,
//   },
//   {
//     productName: "avokado",
//     price: 60,
//   },
// ];

// const copyProducts = [...products];
// console.log(copyProducts);

// const fruits = ["яблуко", "груша", "апельсин"]

// function showProducts(apple, pear, orange) {
// 	return `В корзині лежать такі фрукти: ${apple}, ${pear}, ${orange}`;
// }

// console.log(showProducts(...fruits));
// // console.log(showProducts("яблуко", "груша", "апельсин"));

// const product = {
//   productName: "ananas",
//   price: 120,
// };

// const copyProduct = { ...product };
// console.log(copyProduct);

// const hotel = {
//   name: "resort",
//   stars: 5,
// };
// const copyHotel = { ...hotel };

// console.log(copyHotel === hotel);

// const city1 = {
//   cityName: "Kyiv",
//   people: 50000,
// };

// const language = {
//   languageType: "Ukrainian",
//   sound: "cute",
//   cityName: "Lviv",
// };

// const region = {
//   ...city1,
//   ...language,
// };

// const region = {
//   cityName: "Kyiv",
//   people: 50000,
//   languageType: "Ukrainian",
//   sound: "cute",
//   cityName: "Lviv",
// };

// console.log(region);

// const obj1 = {
//   x: 5,
//   y: 3,
//   z: 2,
// };

// const obj2 = {
//   x: 3,
//   a: 7,
//   b: 9,
// };

// const obj3 = {
//   z: 4,
//   a: 7,
//   b: 3,
//   x: 6,
// };

// const obj = {
//   ...obj1,
//   ...obj2,
//   ...obj3,
// };

// console.log(obj);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9];

// const arr = [
//   ...arr1,
//   ...arr2
// ];

// console.log(arr);

// const numbers = [1, 2, 3, 4, 5];
// const copyNumbers = [...numbers];

// console.log(copyNumbers);

// const newNumbers = [11, 12, 13, 14, 15, ...numbers];

// console.log(newNumbers);
// console.log([12, 21, ...[88, 6, ...[55, 93]]]);

const user = {
  name: "Andrey",
  city: "Lviv",
  address: {
    street: "soborna",
    numberOfHous: 5,
  },
  friends: ["Artem", "Artur", "Dima"],
};

console.log(user.address.street);

// const userName = user.name;
// const userCity = user.city;
// const userAddress = user.address.street;
// const userNumberOfHous = user.address.numberOfHous;

// const { name, city } = user;
// const { street, numberOfHous } = user.address;

// console.log(name, city)

const { name, city, address: { street, numberOfHous }, friends } = user;
console.log(street, numberOfHous, friends);