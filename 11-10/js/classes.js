class Human {
  // lastName = 'Bohn';

  static type = 'human';
  static createdCount = 0;

  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
    this.lastName = 'Bohn';
    Human.createdCount++;
  }

  sayHello() {
    console.log(`${this.firstName} ${this.lastName} says hello`);
  }
}

const josh = new Human('Josh', 23);
console.log(josh);
josh.sayHello();
const john = new Human('John', 23);

console.dir(Human.createdCount);
