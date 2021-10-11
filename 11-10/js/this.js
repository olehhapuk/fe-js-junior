'use strict';

const human = {
  firstName: 'Andriy',
  sayName(prefix) {
    console.log(prefix + ' ' + this.firstName);
  },
};

const human2 = {
  firstName: 'Vasya',
};
human2.sayName = human.sayName;

// human.sayName();
// human2.sayName();

// const sayNameDuplicate = human.sayName;
// sayNameDuplicate();

function doAction(action) {
  // action.apply(human, ['My firstname is:']);
  // action.call(human, 'My firstname is:');
  action('My firstname is:');
}

doAction(human.sayName.bind(human));
doAction(human.sayName.bind(human2));
