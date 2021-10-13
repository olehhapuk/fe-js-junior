/*
  Human
  - age
  - firstName
  - lastName
  - introduce() - console.log(Hi, my names is ... and I'm ... years old);
*/

/*
introduce() {
    console.log(
      `Hi, my name is ${this.firstName} ${this.lastName} and I have ${this.workXP} years of coding experience.`
    );
  }
*/

/*
  Human
    - Developer
*/

class Human {
  constructor(age, firstName, lastName) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;

    console.log(`${firstName} constructor`);
  }

  introduce() {
    console.log(
      `Hi, my name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`
    );
  }
}

class Developer extends Human {
  constructor(
    age,
    firstName,
    lastName,
    workXP,
    codingLanguages,
    workingCompany
  ) {
    super(age, firstName, lastName);

    this.workXP = workXP;
    this.codingLanguages = codingLanguages;
    this.workingCompany = workingCompany;
  }

  showResume() {
    console.log(`
      Name: ${this.firstName} ${this.lastName}.
      Work Experience: ${this.workXP}.
      Known Languages: ${this.codingLanguages.join(', ')}.
      Company: ${this.workingCompany}.
    `);
  }
}

const vadym = new Developer(
  500,
  'Vadym',
  'Pichurin',
  1000,
  ['JabaScript', 'Gaduka', 'HTML'],
  'GOITEENS'
);
vadym.introduce();
vadym.showResume();

// const oleh = new Human(250, 'Oleh', 'Hapuk');
// oleh.introduce();
