// Type Assertion
let anything: any;
// anything=("Next" as string)
anything = "Next Level Development";
anything as string;

const kgToGm = (value: string | number): string | number | undefined => {
  if (typeof value === "string") {
    const convertedValue = parseFloat(value) * 1000;

    return `the converted value is ${convertedValue}`;
  }
  if (typeof value === "number") {
    return value * 1000;
  }
};

const result1 = kgToGm(1000) as number;
const result2 = kgToGm("1000") as string;

type CustomError = {
  message: string;
};
try {
} catch (error) {
  console.log((error as CustomError).message);
}

// Interface
type User1 = {
  name: string;
  age: number;
};
type UserWithRole1 = User1 & { role: string };
const user1: UserWithRole1 = {
  name: "A",
  age: 28,
  role: "Admin",
};

interface User2 {
  name: string;
  age: number;
}
// interface User2WithRole extends User1 {
//     role: string
// }
interface User2WithRole extends User2 {
  role: string;
}
const user2: User2WithRole = {
  name: "A",
  age: 28,
  role: "User",
};

// Declare Array By Interface
type Roll = number[];
const roleNumber1: Roll = [1, 2, 3];
interface Roll2 {
  [index: number]: number;
}
const rollNumber2: Roll2 = [5, 6, 8];
type Add = (num1: number, num2: number) => number;
interface Add1 {
  (num1: number, num2: number): number;
}
const add: Add = (num1, num2) => num1 + num2;

// Generic
type GenericArray1 = Array<number>;
type GenericArray2 = Array<string>;
type GenericArray3 = Array<boolean>;

type GenericArray<T> = Array<T>;

// const rollNumbers: number[] = [5, 6, 9, 8]
// const rollNumbers: Array<number> = [5, 6, 9, 8]
// const rollNumbers: GenericArray1 = [5, 6, 9, 8]
const rollNumbers: GenericArray<number> = [5, 6, 9, 8];

// const mentors: string[] = ['A', 'G', 'K']
// const mentors: Array<string> = ['A', 'G', 'K']
// const mentors: GenericArray2 = ['A', 'G', 'K']
const mentors: GenericArray<string> = ["A", "G", "K"];

// const boolArray: boolean[] = [true, false, true]
// const boolArray: Array<boolean> = [true, false, true]
// const boolArray: GenericArray3 = [true, false, true]
const boolArray: GenericArray<boolean> = [true, false, true];

// const user:GenericArray<object> = [
//     {
//         name: "A",
//         age: 100
//     },
//     {
//         name: "H",
//         age: 30
//     }
// ]
const user: GenericArray<{ name: string; age: number }> = [
  {
    name: "A",
    age: 100,
  },
  {
    name: "H",
    age: 30,
  },
];

// Generic Tuple
type GenericTuple<X, Y> = [X, Y];
const genericTuple: GenericTuple<string, number> = ["A", 10];
const userWithId: GenericTuple<number, { name: string; email: string }> = [
  125,
  { name: "A", email: "abc@gmail.com" },
];

// Generic with Interface
interface Developer<T> {
  name: string;
  computer: {
    brand: string;
    model: string;
    release: number;
  };
  smartWatch?: T;
}
const poorDeveloper: Developer<{
  brand: string;
  model: string;
  display: string;
}> = {
  name: "A",
  computer: {
    brand: "HP",
    model: "ABC",
    release: 2002,
  },
  smartWatch: {
    brand: "JS",
    model: "KH23",
    display: "OP",
  },
};
const richDeveloper: Developer<{
  brand: string;
  model: string;
  display: string;
  warrenty: boolean;
}> = {
  name: "A",
  computer: {
    brand: "HP",
    model: "ABC",
    release: 2002,
  },
  smartWatch: {
    brand: "JS",
    model: "KH23",
    display: "OP",
    warrenty: false,
  },
};

// Function with Generic
const createArray = (param: string): string[] => {
  return [param];
};
const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};

const res1 = createArray("Bangladesh");
const resGeneric = createArrayWithGeneric<string>("Bangladesh");
const resGenericObj = createArrayWithGeneric<{ id: number; name: string }>({
  id: 12,
  name: "Mr. A",
});

const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};

const res2 = createArrayWithTuple("Bangladesh", 20);
const resTuple = createArrayWithTuple<string, { name: string }>("Bangladesh", {
  name: "Asia",
});

const addCourseToStudent = <T>(student: T) => {
  const course = "Next Level Web Development";
  return {
    ...student,
    course,
  };
};
const student1 = addCourseToStudent({ name: "Mr. X", email: "abc@gmail.com" });
const student2 = addCourseToStudent({
  name: "Mr. Y",
  email: "ab@gmail.com",
  hasWatch: "Apple Watch",
});

// Constraints in Typescript || Forcing
const addCourseToStudent1 = <
  T extends { id: number; name: string; email: string }
>(
  student: T
) => {
  const course = "Next Level Web Development";
  return {
    ...student,
    course,
  };
};
const student11 = addCourseToStudent1({
  id: 1,
  name: "Mr. X",
  email: "abc@gmail.com",
});
const student22 = addCourseToStudent1({
  id: 2,
  name: "Mr. Y",
  email: "ab@gmail.com",
  hasWatch: "Apple Watch",
});

// Constraint using key of
type Vehicle = {
  bike: string;
  car: string;
  ship: string;
};
type Owner = "bike" | "car" | "ship";
type Owner2 = keyof Vehicle;

const person1: Owner = "bike";
const person2: Owner2 = "car";

const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};
const user3 = {
  name: "Mr. X",
  age: 26,
  address: "Dhaka",
};
const result3 = getPropertyValue(user3, "name");

// Asynchronous Typescript
const createPromize = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Somethings";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to load data");
    }
  });
};

const showData = async (): Promise<string> => {
  const data: string = await createPromize();
  return data;
};
showData();

type DataById = {
userId: number;
id: number;
title: string;
body: string;
}

const loadData = async (): Promise<DataById> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  return data;
};
// Option 1: Using .then()
loadData()
  .then((data) => {
    // console.log("Option 1:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Option 2: Using async/await
const main = async (): Promise<void> => {
  try {
    const data = await loadData();
    console.log("Option 2:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};
// main();


// Conditional Type
type a1 = null;
type b1 = undefined;
type c1 = a1 extends null ? true : false
type d1 = a1 extends null ? true : b1 extends undefined ? undefined : any;

type Sheikh = {
    bike: string;
    car: string;
    ship: string;
}
type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
type HasBike = CheckVehicle<"bike">

// Mapped Types
const arrOfNumbers: number[] = [1, 87, 56]
// const arrOfString: string[] = ['4', '6', '78']
const arrOfString: string[] = arrOfNumbers.map(number => number.toString());
// console.log(arrOfString)

type AreaNumber = {
    height: number;
    width: number
}
type AreaString = {
    [key in keyof AreaNumber]: string
}
type Height = AreaNumber['height'] // Lookup type


type AreaString1<T> = {
    [key in keyof T]: T[key]
}
const area1: AreaString1<{height: string; width: number}> = {
    height: '52',
    width: 45
}

// Utility Types | Build in Mapped type

type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo?: string;
    address: string;
}
// Pick
type Name = Pick<Person, "name">;
type NameAge = Pick<Person, "name" | "age">;
// Omit
type ContactInfo = Omit<Person, "name" | "age">
// Required
type Personrequired = Required<Person>
// Partial
type PersonPartial = Partial<Person>
// Readonly
type PersonReadonly = Readonly<Person>
const person1L: PersonReadonly = {
    name: "Mr. X",
    age: 25,
    email: "abc@gmail.com",
    contactNo: "+601126352584",
    address: "Dhaka"
}
// Record
type MyObj = {
    a: string;
    b: string;
}
type MyObj1 = Record<string, string>
const obj1: MyObj1 = {
    a: "AA",
    b: "BB"
}
const emptyObj: object = {}
const emptyObj1: {} = {}
const emptyObj2: Record<string, unknown> = {}