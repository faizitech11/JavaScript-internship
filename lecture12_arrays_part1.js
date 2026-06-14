// ============================================
// LECTURE 12: Arrays (Part 1)
// ============================================

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

console.log(myArr[1]); // 1 (0-indexed array)

// Array Methods
myArr.push(6);   // End me add karega   -> [0,1,2,3,4,5,6]
myArr.pop();     // End se ek nikaal dega

myArr.unshift(9); // Start me add karega (Baqi sab shift karne padte hain, isliye slow hai)
myArr.shift();    // Start se ek nikaal dega

console.log(myArr.includes(9)); // false (Check karne ke liye)
console.log(myArr.indexOf(3));  // 3

const newNumArr = myArr.join(); // Array ko string me convert kar deta hai comma ke sath
console.log(newNumArr);
