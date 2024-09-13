// const product = {
//     productName: "Salad",
//     productPrice: 50,
//     productWeight: 0.5,
// }

// // console.log(product.productPrice);

// const price = product.productPrice;

// console.log(price);

// console.log(product.productName);

// console.log(product["productWeight"]);

// product.productCountry = "Ukraine";

// console.log(product.productCountry);

// product["productAdress"] = "Kyiv";

// console.log(product);

// product.ingredients = ["tomato", "cucumber", "carrot", "potato", "olive oil"];

// console.log(product);

// delete product.productWeight;

// console.log(product);

// product.productPrice = 100;

// console.log(product);

//////////////////////////////////////////////////

// КОРОТКИЙ ЗАПИС ВЛАСТИВОСТЕЙ

// const userName = "Макс";

// const user = {
// name: userName,
// email: "test@gmail.com"
// };

// Але якщо назва ключа така сама, як назва змінної із значенням
// const user = {
// userName: userName,
// email: "test@gmail.com",
// };

// Можемо скоротити
// const user = {
//   userName,
//   email: "test@gmail.com",
// };

// Вичісляючі властивості
// const boxWidth = "width";
// const boxHeight = "height";

// const boxContainer = {
// width: "1200px",
// height: "500px",
// marginLeft: "auto",
// marginRight: "auto"
// };

// Підставимо змінні

// const boxContainer = {
// [boxWidth]: "1200px",
// [boxHeight]: "500px",
// marginLeft: "auto",
// marginRight: "auto",
// };

// Зробимо змінними, ще значення

// const widthContainer = "1200px";

// const boxContainer = {
//   [boxWidth]: widthContainer,
//   [boxHeight]: "500px",
//   marginLeft: "auto",
//   marginRight: "auto",
// };

///////////////////////////////////////

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// apartment.owner = {
//   name: "Henry",
//   phone: "982-126-1588",
//   email: "henry.carter@aptmail.com",
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;

// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// const numberOfTags = apartment.tags.length;

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted")

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingstone"
// };

// console.log(apartment);

// const user = {
//   name: "Bogdan",
//   age: 13,
//   password: "12345678",
//   friends: ["Artem", "Vika", "Artur", "Dima"],
//   location: {
//     country: "Ukraine",
//     city: "Kyiv",
//     street: "Ushakova",
//     housNumber: 16
//   },

//   showName() {
//     alert(this.name);
//   },

//   countFriends() {
//     alert(`У Богдана є ${this.friends.length} друзів`);
//   },

//   addFriend(newFriend) {
//     this.friends.push(newFriend);
//   },

//   changeCity() {
//     const newCity = prompt("Введіть нове місце продивання");
//     this.location.city = newCity;

//     console.log(`Богдан тепер живе у ${this.location.city}`);
//   }
// };

// user.showName();
// user.countFriends();

// user.addFriend("Maksym");
// console.log(user.friends);

// user.countFriends();

// user.changeCity();

// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }

// const backetOfGoods = {
//   items: [
//     {
//       name: "🍎",
//       price: 50,
//     },
//     {
//       name: "🍇",
//       price: 70,
//     },
//     {
//       name: "🍋",
//       price: 60,
//     },
//     {
//       name: "🍓",
//       price: 110,
//     },
//   ],

//   getItems() {
//     const goods = [];

//     for (const item of this.items) {
//       goods.push(item.name);
//     }

//     const result = goods.join(", ");
//     return result;
//   },
// };

// console.log(backetOfGoods.getItems());

// const user = {
//   name: "TestUser",
//   email: "email@gmail.com",
//   password: "12345678",
//   address: "Ukraine",
// };

// const userInfo = `Ми знаємо про користувача такі данні: ${Object.keys(
//   user
// ).join(", ")}`;

// for (const key in user) {
//   userInfo += key + " ";
// }

// console.log(userInfo.trim());

// const userValues = `Ми знаємо про користувача такі значення: ${Object.values(
//   user
// ).join(", ")}`;

// for (const key in user) {
//   userValues += user[key] + " ";
// }

// console.log(userValues.trim());

// console.log(userInfo);
// console.log(userValues);

// const testEnteries = Object.entries(user);
// console.log(testEnteries);

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// const findByName = (array, friend) => {
//   for (const i of array) {
//     if (i.name === friend) {
//       console.log(`Ваш друг - ${i.name}`);
//     } else {
//       console.log("Такого друга немає");
//     }
//   }
// }

// console.log(findFriendByName(friends, "Poly"));

// Якщо ми передаємо значення однієї змінної в іншу, то в іншій змінній записується копія цього значення. Це називається присвоєння за значенням

const a = 5;
console.log(a);
let b = a;
console.log(b);

b = 6;
console.log(a);
console.log(b);

// У випадку зі складними типами данних, якщо ми передамо значення однієї змінної в іншу(об'єкт чи масив), то в інщу змінну передасться посилання на оригінал цього об'єкту. Це називаєтсья посилальний тип данних або присвоєння по посиланню

const objA = {
  x: 1,
  y: 2,
};
console.log(objA);

const objB = objA;
console.log(objB);

objB.x = 3;

console.log(objA);
console.log(objB);

const c = 5;
const d = 5;

console.log(c === d);

const e = {
  x: 1,
};
const f = {
  x: 1,
};

console.log(e === f);

// {} === {} буде false тому що це 2 різні комірки в пам'яті
// [] === [] буде false тому що це 2 різні комірки в пам'яті

// Масиви й функції це теж об'єкт, саме тому масив й функція не є типами данних, це форма об'єкта

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
arr.test = "hello";
console.log(arr);

// {
//   0: 1,
//   1: 2,
//   2: 3
  
//     ...
  
//   test: "hello"
// }

