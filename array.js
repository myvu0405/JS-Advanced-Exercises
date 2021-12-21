// ==========Exercise 1================
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.
// The function should not modify the array. It should return the new array.
let anArray=[9,6,4,8,4,2,1];
let extractArr =filteredRange(anArray,1,4);
console.log(`extracted array: ${extractArr}`);
console.log(`original array: ${anArray}`)

function filteredRange(arr,x,y) {
    let result = [];
    for (let i =x; i<=y;i++) {
        result.push(arr[i]);
    }
    return result;
}

// ===============Exercises 2================
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 } ;
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let  names = users.map(x => x.name);
console.log(names);

// ===============Exercises 3==================
// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

// The formula for the average is (age1 + age2 + ... + ageN) / N.
let getAverageAge =(arrUsers)=>{
    let ages=arrUsers.map(x=>x.age);
    let sum=0;
    ages.forEach(x => {
        sum+=x;
    });
    return sum/ages.length;
}
console.log(getAverageAge(users));
