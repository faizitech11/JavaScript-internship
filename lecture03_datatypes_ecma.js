// ============================================
// LECTURE 3: Data Types & ECMA Standards
// ============================================

"use strict"; // Saare JS code ko naye engine ke mutabiq treat karega

// alert(3 + 3) // Yeh error dega kyunki hum Node.js use kar rahe hain, browser nahi

let name = "hitesh";       // String
let age = 18;              // Number
let isLoggedIn = false;    // Boolean
let state = null;          // Standalone value (Khali hai)

console.log(typeof "hitesh");   // Output: string
console.log(typeof age);        // Output: number
console.log(typeof null);       // Output: object (Yeh JS ka purana bug/quirk hai!)
console.log(typeof undefined);  // Output: undefined
