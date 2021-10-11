function Human(firstName, age) {
  // const obj = {};
  // obj.firstName = firstName;
  // obj.age = age;
  // return obj;
  this.firstName = firstName;
  this.age = age;
  this.sayHello = function () {
    console.log(this.firstName + ' says hello');
  };
}

// const josh = Human('Josh', 23);
const josh = new Human('Josh', 23);
const josh1 = new Human('Josh', 23);
const josh2 = new Human('Josh', 23);
const josh3 = new Human('Josh', 23);
const josh4 = new Human('Josh', 23);

josh.sayHello();
