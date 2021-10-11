'use strict';

const example = {
  value: 12345,
};

const myObj = Object.create(example);
myObj.firstName = 'John';

// console.log(myObj);

function Human(firstName, age) {
  this.firstName = firstName;
  this.age = age;
  this.lastName = 'Bohn';
}

Human.prototype.sayHello = function () {
  console.log(this.firstName + ' says hello');
};

const josh = new Human('Josh', 23);
const josh1 = new Human('Josh1', 50);

josh.sayHello();
console.log(josh);
console.log(josh1);

// const a = {};
// const b = a;

// b.test = 2;
// a.test = 1;

// console.log(a);
// console.log(a === b);

console.log(josh.__proto__ === josh1.__proto__);
