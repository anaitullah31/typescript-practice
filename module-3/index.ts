/** Welcome to OOP(Object Oriented Programming)

What is OOP? - A programming paradigm that organizes and models software.
What is Paradigm? - The style used to write and oranize code. 
Procedural Programming Paradigm - Procedural programming is a coding approach that organizes a computer program into a set of structured procedures consist of a series of well-defined steps or instructions that are executed sequentially. However, it may lack the flexibility and reusability of more advanced programming paradigms.

Functional Programming Paradigm - Functional programming is like using a set of building blocks that are like mathematical functions. This helps in making your code easier to understand and less likely to have bugs.

Declarative Programming Paradigm - Declarative programming is an approach to writing computer programs that focuses on describing the desired outcome or result, rather that explicitly specifying the step by step instructions to achieve that outcome. In declarative programming, you define what you want to accomplish, and the underlying system or framewrok figures out how to achieve.

Object Oriented Programming - Object oriented orogramming is a programming paradigm that organizes code around objects, which are instances of classes defining data and behavior. In OOP, software is designed by modeling real-world entities as objects, each having attributes (data) and methods (function) that oerate on the data.

Event Driven Programming - Event driven programming is a programming paradigm that resolves aroud responding to events or signals gererated by the system or user interactions. In event driven programming, software is designed to wait for and react to events, such as user clicks, keyboard inputs or system notifications.

OOP VS Functions

Building Blocks of OOP - 1. Inheritence 2. Polymorphism 3. Abstraction 4. Encapsulation

**/

// Class and Object
class Animal {
  //    public name: string; // Default public modifier
  species: string;
  sound: string;

  // If we use parameter properties in constructor
  constructor(public name: string, species: string, sound: string) {
    // this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}
const dog = new Animal("German Shepard", "Dog", "Ghew Ghew");
const cat = new Animal("Persian Cat", "Cat", "Mew Mew");

// Inheritance - OOP
class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getSleep(numOfHours: number) {
    console.log(`${this.name} will seep for ${numOfHours}`);
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}
const student1 = new Student("Mr. X", 20, "Dhaka");

class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  takeClass(numOfClass: number) {
    console.log(`${this.name} will take ${numOfClass}`);
  }
}
const teacher1 = new Teacher("Mx. Y", 40, "Dhaka", "S Teacher");

// Type Guard Using typeof and in | Narrowing
// typeoff - type guard
const add = (
  param1: number | string,
  param2: number | string
): string | number => {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
};
const result1 = add(4, 5);
const result2 = add("4", "5");
console.log(result1, result2);

// In guard
type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "admin";
};
const getUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`I am the ${user.role}`);
  } else {
    console.log(`I am ${user.name}`);
  }
};
const normalUser: NormalUser = {
  name: "Mr. User",
};
const adminlUser: AdminUser = {
  name: "Mr. Admin",
  role: "admin",
};
getUser(normalUser);
getUser(adminlUser);

// Type guard using Instance of
class Animal1 {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log(`${this.name} is making sound`);
  }
}
class Dog1 extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log("I am barking");
  }
}
class Cat1 extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMew() {
    console.log("I am mewaing");
  }
}
const isDog1 = (animal: Animal1): animal is Dog1 => {
  return animal instanceof Dog1;
};
const isCat1 = (animal: Animal1): animal is Cat1 => {
  return animal instanceof Cat1;
};
const getAnimal = (animal: Animal) => {
  if (animal instanceof Dog1) {
    return animal.makeBark();
  } else if (animal instanceof Cat1) {
    return animal.makeMew();
  } else {
    return animal.makeSound();
  }
};

const dog1 = new Dog1("Dog", "Doggggg");
const cat1 = new Cat1("Cat", "Catttttt");

// Access Modifier
class BankAccount {
  readonly id: number;
  public name: string;
  private _balance: number;
  protected _balance1: number;
  constructor(id: number, name: string, balance: number, _balance1: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
    this._balance1 = _balance1
  }
  public addMoney(amount: number) {
    return this._balance + amount;
  }
  public getBalance() {
    return this._balance;
  }
}

class StudentAccount extends BankAccount {

}
const poorPeopleAccount = new BankAccount(1, "Mr. Poor", 20, 52);
const newBal = poorPeopleAccount.addMoney(50);
const newBal1 = poorPeopleAccount.getBalance();
