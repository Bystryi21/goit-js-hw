const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

// Напишіть функцію, яка створює масив з вказаною довжиною і заповнює його вказанним значення.
// Наприклад функція fillArray(3, 'a') повертає масив ['a', 'a', 'a'].
// function fillArray(number, value) {
//   const allValues = [];
//   for (let i = 0; i < number; i++) {
//     allValues.push(value);
//   }
//   return allValues;
// }
// console.log(fillArray(6, "g"));
// console.log(fillArray(26, "gr"));
// console.log(fillArray(63, "g5"));
