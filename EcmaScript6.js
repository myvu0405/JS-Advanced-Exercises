//===============Exercise 1=============
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)

let user ={
    name: "John",
    years: 30
}

let {name,years,isAdmin}=user;

isAdmin=(typeof(isAdmin)=='undefined')?false:isAdmin;
console.log(name,years,isAdmin);

// ==============Exercise 2=============
// Give the right name:

// Create the variable with the name of our planet. How would you name such a variable?
// Create the variable to store the name of the current visitor. How would you name that variable?
const ourPlanet='Earth';
let currentVisitor='My Vu';

// ============Exercise 3===============
// Look at the code. What will be result of the call at the last line and why?

// JAVASCRIPT
// let phrase = "Hello"

// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`)
//   }
// }

// sayHi()
// Answer: Last call returns alert showing message 'hello, john'

// =========Exercise 4===================
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.


let user1 =new Object();
user1['name']='John';
user1['surname']='Smith';
user1['name']='Pete';
delete user1.name;

//========== Exercise 5===================
// Is it possible to change an object declared with const, how do you think and why?

// JAVASCRIPT
// const user = {
//   name: "John"
// }

// // does it work?
// user.name = "Pete"
//Answer: No. Because we cant change value of variable defined by const 

// ============Exercise 6=====================
// We have an object storing salaries of our team:
// JAVASCRIPT
// let salaries = {
//   Fred: 100,
//   Ted: 160,
//   Ghaith: 130
// }
//Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.
let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
}
let abc ={};
let salaryVals=Object.values(salaries);
let salariesSum=sumSalaries(...salaryVals);
console.log(`Sum of all salaries is: ${salariesSum}`);

function sumSalaries(...salaryArr){
    let sum=0;
    if (typeof(salaryArr)!=undefined) {
        for (let val of salaryArr) {
            sum+=val;
        }
    }
    return sum;
}

// ===========Exercise 7=========================
// Rewrite this if using the ternary operator '?':

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
let a=1;
let b=5;

let result= ((a+b)<4)? 'Below':'Over';
console.log(`Result is: ${result}`);

// ==========Exercise 8================
// Rewrite if..else using multiple ternary operators '?'.

// JAVASCRIPT
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
let login='Employee';
let message = (login=='Employee')? 'Hello': ((login=='Director')? 'Greetings':((login=='')? 'No login':''));
console.log(`Message is: ${message}`);