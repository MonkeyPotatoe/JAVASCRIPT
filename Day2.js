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
Create and array containing the first 5 positive numbers.
*/

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let user = {
  name: "Enrico",
  surname: "Bonadiman",
  email: "enrico.bonadiman.sk@gmail.com",
  age: "26",
};
console.log(user);

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

user.hasdrivinglicense = true;
console.log(user);

/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete user.age;
console.log(user);

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

let user2 = {};
Object.assign(user, user2);
user2.name = "Giorgio";
user2.surname = "Calabbrese";
user2.email = "Gioercalabba@gmail.com";
console.log(user2);
if (user.email !== user2.email) {
  console.log("the emails are different");
} else {
  console.log("the email are equal");
}

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/
const totalShoppingCart = 49;
const totalShipping = 10;
if (totalShoppingCart > 50) {
  console.log(totalShoppingCart - totalShipping);
} else {
  console.log(totalShoppingCart);
}

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let blackFriday = (totalShoppingCart * 20) / 100;
console.log(totalShoppingCart - blackFriday);

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

const car = {
  brand: "fiat",
  model: "punto",
  licensePlate: "H1BB908",
};
const car1 = Object.assign({}, car);
car1.licensePlate = "HUF678";
const car2 = Object.assign({}, car);
car2.licensePlate = "HUL908";
const car3 = Object.assign({}, car);
car3.licensePlate = "NOM783";
const car4 = Object.assign({}, car);
car4.licensePlate = "KUBB34";
const car5 = Object.assign({}, car);
car5.licensePlate = "M1NCH1";

console.log(car, car1, car2, car3, car4, car5);

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = [car, car1, car2, car3, car4, car5];
console.log(carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop();
console.log(carsForRent);

carsForRent.shift();
console.log(carsForRent);

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

// console.log(typeof car, typeof car.licensePlate, typeof car.brand);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

// const carsForSale = [];
// carsForSale.push(car, car1, car2);
// console.log(carsForSale);

// const totalCars = carsForSale.length() + carsForRent.length();
// console.log(totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

// console.log(carsForSale);

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/
