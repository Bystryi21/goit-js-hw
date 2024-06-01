// // Перевірити чи всі студенти старші 18 років.
// const students = [
//   { name: "Alex", age: 17 },
//   { name: "Stas", age: 18 },
//   { name: "Mike", age: 22 },
//   { name: "Den", age: 20 },
// ];
// const result = students.every((student) => student.age > 18);
// console.log(result);

// Напиши функцію, котра приймає масив користувачів і id.
// У масиві користувачів потрібно знайти людину з заданим id
// і повернути його ім'я. Якщо користувача не було знайдено
// функція повертає повідомлення
// "Користувача з таким id не знайдено"
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];
// function findUser(arr, id) {
//   const result = arr.find((user) => user.id === id);
//   if (result) {
//     return result.name;
//   } else {
//     return `Користувача з таким id не знайдено`;
//   }
// }
// console.log(findUser(users, 4));

//============================

//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.
// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses
//   .flatMap((value) => value.topics)
//   .filter((item, index, array) => array.indexOf(item) === index);

// console.log(allTopics);

///////////////////////////////////////////////////

// Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.
// const friends = [
//   {
//     passport: "03005988",
//     name: "Joseph Francis Tribbiani Jr",
//     age: 32,
//     sex: "m",
//   },
//   { passport: "03005989", name: "Chandler Muriel Bing", age: 33, sex: "m" },
//   { passport: "03005990", name: "Ross Eustace Geller", age: 33, sex: "m" },
//   { passport: "03005991", name: "Rachel Karen Green", age: 31, sex: "f" },
//   { passport: "03005992", name: "Monica Geller", age: 31, sex: "f" },
//   { passport: "03005993", name: "Phoebe Buffay", age: 34, sex: "f" },
// ];

// function getTotalBoysYears(arr) {
//   return arr
//     .filter((value) => value.sex === "m")
//     .reduce((acc, value) => acc + value.age, 0);
// }
// console.log(getTotalBoysYears(friends));

// Є об'єкт і функція для підрахунку суми чисел.
// Виведіть у консоль результат виконання функції, якщо a = 3, b = 5.
// const obj = { num: 2 };
// function add(a, b) {
//   return this.num + a + b;
// }

// console.log(add.call(obj, 3, 5));
// console.log(add.apply(obj, [3, 5]));
// const result = add.bind(obj, 3, 5);
// console.log(result());
// /////////////////////////////////////
// Є два об'єкти, які описують деякі характеристики телефонів.
// Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// передаючи аргументом країну-виробник телефону.
// "HUAWEI" - "China", "SAMSUNG" - "South Korea".

// const tel = {
//   regNumber: "AE8345FEDAS",
//   brand: "HUAWEI",
//   showInfo(country) {
//     console.log(`${country} ${this.regNumber} ${this.brand}`);
//   },
// };
// const tel_2 = {
//   regNumber: "AO8518FEGHT",
//   brand: "SAMSUNG",
// };

// tel.showInfo.call(tel_2, "China");
// tel.showInfo.apply(tel_2, ["China"]);
// const result = tel.showInfo.bind(tel_2);
// tel.showInfo("China");

// //////////////////////////////

// Створіть клас Car, який має конструктор для зберігання марки та
// року виробництва автомобіля.
// 1. Додайте метод, який обчислює вік автомобіля на основі поточного року
// та року виробництва і виведе в кнсоль рядок `Вік автомобіля: age років`
// 2. Додайте перевірку, якщо вік автомобіля більше ніж 5 років, виводимо
// повідомлення "Автомобіль потребує технічного обслуговування."
// в іншому випадку - "Автомобіль не потребує технічного обслуговування зараз."
// 3. Додайте перевірку, якщо рік виробництва перевищює поточний рік,
// вивести повідомлення "Помилка: Рік виробництва не може бути пізнішим за поточний рік."

// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }

//   resultYear(currentYear) {
//     if (this.year > currentYear) {
//       console.log(
//         "Помилка: Рік виробництва не може бути пізнішим за поточний рік."
//       );
//       return;
//     }
//     const age = currentYear - this.year;
//     console.log(`Вік автомобіля: ${age} років`);
//     if (age > 5) {
//       console.log("Автомобіль потребує технічного обслуговування.");
//     } else {
//       console.log("Автомобіль не потребує технічного обслуговування зараз.");
//     }
//   }
// }

// const carOne = new Car("Bmw", 2008);
// carOne.resultYear(2024);
//
//
//
//Напиши клас Client який створює об'єкт
//з ​​властивостями login, email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email
// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     return (this.#login = newLogin);
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     if (!this.email.includes("@")) {
//       return;
//     }
//     {
//       this.#email = newEmail;
//     }
//   }
// }

// const Denys = new Client("Denys", "denys1212@gmail.com");
// console.log(Denys.email);
// Denys.email = "asfnasofna@gmail.com";
// console.log(Denys.email);
// Denys.login = "super Denys";
// console.log(Denys.login);
