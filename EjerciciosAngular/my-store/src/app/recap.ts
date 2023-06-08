const username: string | number = 'David';

const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, 5);

class Person {
  private age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

const david = new Person(26, 'Vazquez');

david.lastName;

class Person2 {
  constructor(public age: number, public lastName: string) {}
}

const persona = new Person2(38, 'Sanchez');
