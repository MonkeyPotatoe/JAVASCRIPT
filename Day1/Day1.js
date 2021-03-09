/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* MAIN DATATYPES IN JS
1. Numers = 0,1,2,3... we can do mathematical operations with numbers (+,-,/,*)
2. Strings = strings are lines of text in between quotemarks, if a number is between quotemarks it counts as a string
3. Null and Undefined = it's a datatype that tells us we missed to declare the value of a function or tells us there's some error in our code if not intended
4. Booleans =  true and false.

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

/* a variable is the value we assign to a certain element so that the console always remembers it. 

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
num1 = 34;
num2 = 67;
let sum = num1 + num2;
console.log(sum);

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

// let x = 12;
// console.log(x);

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

let name = "John Doe";
console.log(name);

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

// let sub = 12 - x;
// console.log(sub);

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
if (name1 !== name2) {
  console.log("the names are different");
}
console.log(name1.toLowerCase === name2.toLowerCase);

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

let x = 4;
if (x === 1) {
  console.log("one");
} else if (x === 2) {
  console.log("two");
} else if (x === 3) {
  console.log("three");
} else if (x === 4) {
  console.log("four");
} else if (x === 5) {
  console.log("five");
} else if (x === 6) {
  console.log("six");
} else if (x === 7) {
  console.log("seven");
} else if (x === 8) {
  console.log("eight");
} else if (x === 9) {
  console.log("nine");
} else if ((x) => 10) {
  console.log("Don't worry about this");
}

/* EXERCISE 9
Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

let noTernaryOp = 10;
if (10 > 4) {
  console.log("10 is definetly bigger than 4");
} else {
  console.log("10 is still bigger than 4 but this is an exercise");
}

let TernaryOp =
  10 > 4 ? console.log("first result") : console.log("second result");
/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
