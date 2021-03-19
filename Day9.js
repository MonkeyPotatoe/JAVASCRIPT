// JS EXERCISES

// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
let x = "John";
let y = "Doe";
console.log(x + " " + "<>" + " " + y);

// 22) Create an object with properties such name, surname, email
let user = {
  name: "Ugo",
  Surname: "Ugoli",
  Email: "Ugo@ugoli.ugo",
};
console.log(user);
// 23) Delete Email from the previously created object
delete user.Email;
console.log(user);
// 24) Create an array with 10 strings in it
let StringArray = ["1", "2", "3", "4", "5", "6", "6", "8", "9", "10"];
console.log(StringArray);
// 25) Print in the console every string in the previous array

console.log(StringArray[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10]);
// 26) Create an array with 100 random numbers in it
let randomArray = [];
let min = 0;
let max = 100;
for (i = 0; i < max; i++) {
  randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
}
console.log(randomArray);

// 27) Write a function to get the MAX and the MIN from the previously created array
// const getMax = function() {
//     for (i = 0; i<randomArray.length; i++){

//     }
// }
const getMax = function () {
  return Math.max(...randomArray);
};
console.log(getMax());

// 28) Create an array of arrays, in which every array has 10 random numbers

let newArr = [];
for (let i = 0; i < 4; i++) {
  let nested = [];
  for (let j = 0; j < 10; j++) nested.push(Math.floor(Math.random() * 10));
  newArr.push(nested);
}
console.log(newArr);

// 29) Create a function that gets 2 arrays and returns the longest one
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3];
const getLongest = function (a1, a2) {
  if (a1.lenght > a2.lenght) {
    return a1;
  } else if (a1.lenght < a2.lenght) {
    return a2;
  } else {
    return "don't know";
  }
};
console.log(getLongest(arr1, arr2));
// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
const getHighest = function (arr1, arr2) {
  let sum1 = arr1.reduce(function (a, b) {
    return a + b;
  }, 0);
  let sum2 = arr2.reduce(function (a, b) {
    return a + b;
  }, 0);
  if (sum1 > sum2) {
    return sum1;
  } else {
    return sum2;
  }
};
console.log(getHighest());

// DOM

// 31) Get element with ID "container" from the page
// let container = document.getElementById("container");
// 32) Get every "td" from the page
// let td = document.querySelectorAll("td");
// 33) Create a cycle that prints the text inside every td of the page

// 34) Write a function to change the heading of the page

// 35) Write a function to add an extra row to the table
// 36) Write a function to add the class "test" to each row in the table
// 37) Write a function to add a red background to every link in the page
// 38) Console log "Page loaded" when the page is correctly loaded
// 39) Write a function to add new items to a UL
// 40) Write a function to empty a list
///
