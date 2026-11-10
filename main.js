console.log("Introduction to External Javascript proper");

// variables
//string
var email = "example@gmail.com";
console.log("Email is", email);

const matricNumber = "2016/23175";

// boolean
let isStudent = false;
console.log("Is student", isStudent);

let isStaff;
console.log("Is Staff 1", isStaff);

isStaff = false;
console.log("Is Staff 2", isStaff);

//int
const age = 22;

//float
const accountBalance = 10.3;

// Maths operations

// addition
const x = 11;
const y = 5;
const z = x + y;
console.log("Addition of x and y =", z);

// substraction
const a = y - x;
console.log("substraction of y from x =", a);

// divsion
const b = x / y;
console.log("Division of x by y =", b);

const c = x % y;
console.log("Modular of x by y =", c);

// multiplication
const d = x * y;
console.log("Multiplication of x and y =", d);

//  case sensitivity
const name = "John";
const Name = "Doe";

// snake Case
const first_name = "Ese";

// camel case
const firstName = null;

// conditional statements
const username = "johndoe";
const password = "09jpi90j";
const gmail = "example@gmail.com";

if (username) {
  console.log("your username is", username);
} else {
  console.log("Username is not provided");
}

if (isStaff) {
  console.log("you are a satff");
} else if (isStudent) {
  console.log("You are a student");
} else {
  console.log("you are neither a staff nor a student");
}

if (password == "09jpi90j" && username == "johndoe") {
  console.log("Logged in Successfully");
}

if (
  username == "johndoe" ||
  (gmail == "example@gmail.com" && password == "09jpi90j")
) {
  if (username && password) {
    console.log("Logges in with username and password successfully");
  } else if (gmail && password) {
    console.log("Logged in with gmail and successfully");
  } else {
    console.log("provide login credentials");
  }
}

// Ternary operator
// firstName
// ? console.log("first name provided")
// : console.log("first name not provided");

firstName
  ? console.log("first name provided")
  : first_name
    ? console.log("first name not provided")
    : console.log("first name not provided");

// switch statement
const user = "vendor";
switch (user) {
  case "logistics":
    console.log("logistic user signed in");
    break;

  case "admin":
    console.log("Admin user signed in");
    break;

  case "customer":
    console.log("Customer signed in");
    break;

  case "vendor":
    console.log("Vendor signed in");
    break;

  default:
    console.log("Unknown user signed in");
}
