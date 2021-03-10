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
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

arrayOfNumbers = [1, 2, 3, 4, 5];
arrayOfNumbers.reverse();
console.log(arrayOfNumbers);

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

const maximum = Math.max(...arrayOfNumbers);
console.log(maximum);
/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

const minimum = Math.min(...arrayOfNumbers);
console.log(minimum);

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/
const evenNumbers = [];
for (let i = 0; i < arrayOfNumbers.lenght; ++i) {
  if (arrayOfNumbers[i] % 2 == 0) {
    evenNumbers.push(arrayOfNumbers[i]);
  }
}
console.log(evenNumbers);

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

for (let i = 0; i < arrayOfNumbers.lenght; ++i) {
  if (arrayOfNumbers[i] % 2 == 0) {
    arrayOfNumbers.splice(i--, 1);
  }
}
console.log(arrayOfNumbers);

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

const str = "Hello";

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

const newArray = ["strive", "is", "great"];

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/
