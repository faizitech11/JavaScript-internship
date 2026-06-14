// ============================================
// LECTURE 24: Truthy & Falsy Values
// ============================================

const userEmail = []; // Khali array truthy hota hai

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Khali array check karne ka sahi tarika:
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// Khali Object check karne ka sahi tarika:
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null, undefined ko handle karne ke liye
let val1;
val1 = null ?? 10;         // Output: 10
let val2 = undefined ?? 15; // Output: 15
console.log(val1, val2);
