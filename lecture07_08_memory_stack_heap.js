// ============================================
// LECTURE 7 & 8: Data Types Summary & Memory (Stack vs Heap)
// ============================================

// Primitive Types (Stack Memory me jate hain - Copy milti hai)
let myYoutubeName = "hiteshchoudharydotcom";
let anotherName = myYoutubeName; // Copy mili
anotherName = "chaiaurcode";

console.log(myYoutubeName); // hiteshchoudharydotcom (Original safe raha)
console.log(anotherName);   // chaiaurcode

// Non-Primitive (Heap Memory me jate hain - Reference/Address milta hai)
let userOne = { email: "user@google.com", upi: "user@ybl" };
let userTwo = userOne; // Same reference share ho raha hai

userTwo.email = "hitesh@google.com";

console.log(userOne.email); // hitesh@google.com (Original bhi badal gaya!)
console.log(userTwo.email); // hitesh@google.com
