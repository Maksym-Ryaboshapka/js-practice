// const articleEl = document.querySelector(".main-article");
// const imgEl = document.querySelector(".img");
// const mainItem = document.querySelector(".main-item");
// const itemsEl = document.querySelectorAll(".main-item");
// const targetLink = document.querySelector("[target]");
// const mainList = document.querySelector(".main-list");
// const textEl = document.querySelector(".text");

// console.log(articleEl);
// console.log(mainItem);
// console.log(itemsEl);
// console.log(targetLink);

// articleEl.style.backgroundColor = "skyblue";
// articleEl.style.width = "500px";

// imgEl.src = "";

// const testEl = document.querySelector("form");
// console.log(testEl);

// console.log(imgEl.parentNode);
// console.log(mainList.childNodes);

// textEl.textContent = "test text";
// textEl.classList.add("test");
// textEl.classList.remove("text");

// console.log(textEl);

// Отримайте доступ до списку
// Додайте жовтий колір фону
// Додайте клас "site-nav__link" до першого посилання
// Збільшіть розмір шрифта посилання з атрибутом href="https://"

// const listEl = document.querySelector(".site-nav");
// const firstLinkEl = document.querySelector("a");
// const httpsLinkEl = document.querySelector("a[href^=\"https://\"]");

// listEl.style.backgroundColor = "yellow";
// firstLinkEl.classList.add("site-nav__link");
// httpsLinkEl.style.fontSize = "20px";

// console.log(httpsLinkEl);

// Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style.
// Оберіть всі посилання всередині списку та додайте першому і останньому клас зі стилями
// Додайте заголовок до тексту та стилізуйте його за допомогою додаткового класу.
// Замініть клас на заголовку.
// Перевірте чи містить посилання клас list

// const externalLinkEl = document.querySelector("a");
// const listEl = document.querySelectorAll("ul");

// externalLinkEl.style.color = "orange";
// console.log(listEl.firstElementChild);

// const articleEl = document.createElement("article");
// const titleEl = document.createElement("h1");
// const imageEl = document.createElement("img");
// const textEl = document.createElement("h6");
// const paragraphEl = document.createElement("p");

// titleEl.textContent = "Lorem ipsum";

// imageEl.src = "";
// imageEl.alt = "nothing";

// textEl.textContent = "good morning!";

// paragraphEl.textContent = "blablablablablablablabla";

// articleEl.classList.add("article-test");

// articleEl.append(titleEl, imageEl, paragraphEl);
// textEl.prepend(imageEl);

// console.log(articleEl);

// Створити та додати колекцію кнопок з динамічними даними з масиву об’єктів. використати метод createElement

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
//   { label: 'yellow', color: 'yellow' },
//   { label: 'orange', color: '#orange' },
// ];

// const listEl = document.createElement("ul");

// colorPickerOptions.forEach((obj) => {
//   const itemEl = document.createElement("li");
//   listEl.append(itemEl);

//   const buttonEl = document.createElement("button");

//   buttonEl.textContent = obj.label;
//   buttonEl.style.color = obj.color;
//   buttonEl.style.backgroundColor = obj.label;

//   itemEl.append(buttonEl);
// });

// document.body.append(listEl);

// Властивість innerHTML

const boxEl = document.querySelector(".box");
boxEl.innerHTML = "<h1></h1>";

console.log(boxEl.innerHTML);

const articleLayout = `<article>
      <h1>Lorem, ipsum dolor.</h1>
      <p class="text"></p>
      <a href="google.com">link</a>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVokxLIcy0TDzI763NfTh743VNOzAU71ImaQ&s" alt="photo">
    </article>`;

boxEl.innerHTML = articleLayout;

const textEl = document.querySelector(".text");
textEl.textContent = "text";

console.log(textEl);
console.log(textEl.textContent);
console.log(document.querySelector("article").innerHTML);

// const linkEl = document.createElement("a");
const articleEl = document.querySelector("article");

// articleEl.append(linkEl);

articleEl.innerHTML = `
      <h1>Lorem, ipsum dolor.</h1>
      <p class="text"></p>
      <a href="google.com">link</a>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVokxLIcy0TDzI763NfTh743VNOzAU71ImaQ&s" alt="photo">
      <a href=""></a>`;

const secondBoxEl = document.querySelector(".second-box");
const legendTextEl = "<p>Hello world!</p>";

secondBoxEl.insertAdjacentHTML("afterbegin", legendTextEl);
