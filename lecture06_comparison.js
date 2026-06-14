// ============================================
// LECTURE 6: Comparison of Data Types
// ============================================

console.log(2 > 1);   // true
console.log("2" > 1); // true (JS ne string ko number me convert kiya automatic)

// Yeh confuse karta hai (Avoid in real code)
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true (Kyunki comparison operators null ko 0 bana dete hain)

// Strict Check (===)
console.log("2" === 2); // false (Kyunki data type string aur number match nahi hote)
