// Array
const numbers: number[] = [1, 5, 7, 5];
// Tuple
const tupleArray: [string, number] = ["A", 5];
// Object
const user: {
  fName: string;
  mName?: string; // Optional
  lName: string;
  age: number;
  ismarried: boolean;
  readonly company: "PH"; // readonly and string literal
} = {
  fName: "Anayet",
  lName: "Ullah",
  age: 28,
  ismarried: true,
  company: "PH",
};

// Function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
const addArrow = (num1: number = 10, num2: number): number => num1 + num2;

// Method
const poorUser = {
  name: "Anayet",
  balance: 0,
  add(amount: number): number {
    return this.balance + amount;
  },
};

// map
const arr: number[] = [2, 5, 3, 6];
const newArray: number[] = arr.map(
  (elemenent: number): number => elemenent * elemenent
);

// Learn Spread Operator
const bros1: string[] = ["A", "F", "H"];
const bros2: string[] = ["R", "U", "O"];
bros1.push(...bros2);

const mentors1 = {
  typescript: "Mexba",
  redux: "Mir",
  dbms: "Mizan",
};

const mentors2 = {
  prisma: "A",
  next: "B",
  cloud: "F",
};

const mentorList = {
  ...mentors1,
  ...mentors2,
};

// Learn Rest Operator
const greetFriends = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Hi ${friend}`));
};

greetFriends("A", "G", "F");

// Destructuring
const userDetails = {
  id: 123,
  name: {
    fName: "A",
    mName: "F",
    lName: "R",
  },
  address: "Dhaka",
};

const {
  id,
  name: { mName: midName },
} = userDetails; // Named Alias

const myFriends = ["A", "G", "F", "P"];
const [, , bestFriends, ...rest] = myFriends;

// Type Alias
type Student = {
  name: string;
  age: number;
  gender: string;
  address: string;
};

const student1: Student = {
  name: "A",
  age: 20,
  gender: "Male",
  address: "Dhaka",
};

type UserName = string;
const userName: UserName = "David";
type IsAdmin = boolean;
const isAdmin: IsAdmin = true;

type AddNumber = (num1: number, num2: number) => number;
const addNumber: AddNumber = (num1, num2) => num1 + num2;

// Union Type
// type FrontendDeveloper = "Beginner" | "Mid Level";
// type FullstackDeveloper = "Intermediate" | "Expert";

// type Developer = FrontendDeveloper | FullstackDeveloper

// const frontendDeveloper: FrontendDeveloper = "Beginner";

type User = {
  name: string;
  email?: string;
  gender: "Male" | "Female";
  bloodGroup: "O+" | "A+" | "AB+";
};
const user1: User = {
  name: "Anayet",
  gender: "Male",
  bloodGroup: "O+",
};

// Intersection Type

type FrontendDeveloper = {
  skills: string[];
  designation1: "Frontend Developer";
};
type FullstackDeveloper = {
  skills: string[];
  designation2: "Fullstack Developer";
};

type BackendDeveloper = FrontendDeveloper & FullstackDeveloper;
const backendDeveloper: BackendDeveloper = {
  skills: ["HTML", "CSS", "JS"],
  designation1: "Frontend Developer",
  designation2: "Fullstack Developer",
};

// Ternary Operator | Optional Chaining | Nullish Coalescing Operator
const age: number = 15;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Not Adult");
}

const isAdult = age >= 18 ? "Adult" : "Not Adult";
console.log(isAdmin);
// Package Name (TS Node Dev)

// Nullish Coalescing Operator (null | undefined)
const isAuthenticated = null;
const result1 = isAuthenticated ?? "Guest";
console.log({ result1 });

// Optional Chaining
type User2 = {
  name: string;
  address: {
    city: string;
    road: string;
  };
};
const user2: User2 = {
  name: "Anayet",
  address: {
    city: "Dhaka",
    road: "DHA 32",
  },
};
const road = user2.address?.road ?? "No Road Found";
console.log({ road });

// Nullable Type
const searchName = (value: string | null) => {
  if (value) {
    console.log("Searching");
  } else {
    console.log("There is nothing to search");
  }
};
searchName("Anayet");
searchName(null);

// Unknown Type
const getStringInMeterperSecond = (value: unknown) => {
  if (typeof value === "number") {
    const convertedSpeed = (value * 1000) / 3600;
    console.log(`The speed is ${convertedSpeed} ms^-1`)
  } else if(typeof value === 'string') {
    const valueInNumber = Number(value.split(' ')[0])
    const convertedSpeed = (valueInNumber * 1000) / 3600;
    console.log(convertedSpeed)
  } else {
    console.log('Wrong Input')
  }
};
getStringInMeterperSecond(1000)
getStringInMeterperSecond('1000 kmh^-1')

// Never Type
const throwError =(msg: string): never=>{
    throw new Error(msg)
}

// throwError('New error found')