// ============================================
// LECTURE 9: Strings in JavaScript
// ============================================

const name = "hitesh";
const repoCount = 50;

// Modern tarika (String Interpolation)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com'); // Object tarika

console.log(gameName[0]);            // 'h'
console.log(gameName.length);        // 13
console.log(gameName.toUpperCase()); // HITESH-HC-COM
console.log(gameName.charAt(2));     // 't'
console.log(gameName.indexOf('t'));  // 2

const newString = gameName.substring(0, 4); // "hite" (4 include nahi hota)
const anotherString = gameName.slice(-8, 4);

const newStringOne = "   hitesh    ";
console.log(newStringOne.trim()); // Spaces khatam kar dega: "hitesh"

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-')); // URL saaf karne ke liye
