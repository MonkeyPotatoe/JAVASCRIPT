/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function (l1, l2) {
  return l1 * l2;
};
console.log(area(4, 3));

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};
console.log(crazySum(4, 4));

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function (num) {
  if (num > 19) {
    return (num - 19) * 3;
  } else {
    return num - 19;
  }
};
console.log(crazyDiff(44));

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function (n) {
  if ((20 < n && n < 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(400));

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (str) {
  if (str[0] === "Strive") {
    return str;
  } else {
    return str.slice(0);
  }
};
console.log(strivify("school"));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function (num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return console.log("The number is accepted", "" + num);
  } else {
    return console.log("The number is not accepted", "" + num);
  }
};
console.log(check3and7(14));
/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function (str) {
  let splitter = str.split("");
  let reverser = splitter.reverse();
  let joiner = reverser.join("");
  return joiner;
};
console.log(reverseString("yolo"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function (str) {
  let separeString = str.split("");
  let newString = separeString[0];
  newString.toUppercase();
  let lastString = separeString.join("");
  return lastString;
};
console.log(upperFirst("yooooohgdfdj"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function (str) {
  let separeString = str.split("");
  separeString.pop();
  separeString.shift();
  return separeString.join("");
};
console.log(cutString("bobostar"));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function (n) {
  let newArray = [];
  return newArray.push(Math.random());
};
console.log(giveMeRandom(8));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
