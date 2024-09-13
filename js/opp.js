class Hero {
  constructor({ name, health, hasGun, typeOfGun, hasArmour }) {
    (this.name = name),
      (this.health = health),
      (this.hasGun = hasGun),
      (this.typeOfGun = typeOfGun),
      (this.hasArmour = hasArmour);
  }

  showHeroInfo = () => `${this.name} має ${this.health} одиниць здоров'я.`;

  heroStartFight = () =>
    `${this.name} розпочав битву із зброєю, під назвою - ${this.typeOfGun}.`;
}

// const epicHero = new Hero({
//     name: "Assaguardo",
//     health: 100,
//     hasGun: true,
//     gun: "sword",
//     hasArmor: false
// });

// console.log(epicHero);

class Elfs extends Hero {
  constructor({
    name,
    health,
    hasGun,
    typeOfGun,
    hasArmour,
    ears,
    age,
    brain,
  }) {
    super({ name, health, hasGun, typeOfGun, hasArmour });

    this.ears = ears;
    this.age = age;
    this.brain = brain;
  }
}

const epicElf = new Elfs({
  name: "Peter",
  health: 100,
  hasGun: true,
  typeOfGun: "pistol",
  hasArmour: 100,
  ears: "big",
  age: 900,
  brain: "smart",
});

console.log(epicElf);

console.log(epicElf.showHeroInfo());

class Orks extends Hero {
  constructor({ name, health, hasGun, typeOfGun, hasArmour, color, horns }) {
    super({ name, health, hasGun, typeOfGun, hasArmour });

    (this.color = color), (this.horns = horns);
  }

  orksMakeSound = () => `${this.name} починає свистіти!`;
}

const legendaryOrk = new Orks({
  name: "Fill",
  health: 150,
  hasGun: true,
  typeOfGun: "super Arms",
  hasArmour: 100,
  color: "green",
  horns: "small",
});

console.log(legendaryOrk);

console.log(legendaryOrk.showHeroInfo());

console.log(legendaryOrk.heroStartFight());

console.log(legendaryOrk.orksMakeSound());

// console.dir(Object)
// console.dir(Array)
// console.dir(Number)

const user = {
  name: "Artem",
  age: 16,
  address: {
    region: "Kyiv",
    city: "Kyiv",
  },
  showAge() {
    console.log(this.age);
  },
};

const userCopy = Object.create(user);
userCopy.hobby = "music";

console.dir(userCopy);
console.log(userCopy.age);
console.log(userCopy);
userCopy.showAge();

const userCopyCopy = Object.create(userCopy);
userCopyCopy.message = "це копія копії об'єкта";
console.log(userCopyCopy);

// алгоритм пошуку властивостей (прототипів):
// 1 крок - пошук починається у власних властивостей,
// 2 крок - якщо властивості немає серед власних ключів, то пошук переходить до ланцюжка прототипів
// 3 крок - пошук властивості припиняється при 1 співпадінні з ключем у ланцюжку прототипів
// 4 крок - вертається значення знайденої властивості.
// console.dir(Object)
// console.dir(Array)
// console.dir(Number)

// const user = {
//   name: "Artem",
//   age: 16,
//   address: {
//     region: "Kyiv",
//     city: "Kyiv",
//   },
//   showAge() {
//     console.log(this.age);
//   },
// };

// const userCopy = Object.create(user);
// userCopy.hobby = "music";

// console.dir(userCopy);
// console.log(userCopy.age);
// console.log(userCopy);
// userCopy.showAge();

// const userCopyCopy = Object.create(userCopy);
// userCopyCopy.message = "це копія копії об'єкта";
// console.log(userCopyCopy);

// const Car = function (brand, price) {
//   this.brand = brand;
//   this.price = price;

//   this.engine = function () {
//     console.log(`Увімкнули мотор в ${this.brand}`);
//   };
// };

// const bmw = new Car("BMW", 30000);
// console.log(bmw);

// const audi = new Car("Audi", 24000);
// console.log(audi);

// bmw.engine();
// audi.engine();

const Car = function ({ brand, price }) {
  this.brand = brand;
  this.price = price;

  this.engine = function () {
    console.log(`Увімкнули мотор в ${this.brand}`);
  };
};

const bmw = new Car({
  brand: "BMW",
  price: 30000,
});

console.log(bmw);

const audi = new Car({
  brand: "Audi",
  price: 24000,
});

console.log(audi);

bmw.engine();
audi.engine();
