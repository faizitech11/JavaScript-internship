// ============================================
// LECTURE 10: Numbers and Maths
// ============================================

const score = 400;
const balance = new Number(100); // Explicitly number banana

console.log(balance.toFixed(2)); // "100.00" (E-commerce bill me kaam aata hai)

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // "123.9" (Round off)

// ----- MATHS OBJECT -----
console.log(Math.abs(-4));    // 4 (Negative ko positive banana)
console.log(Math.round(4.6)); // 5 (Normal round off)
console.log(Math.ceil(4.2));  // 5 (Thoda sa bhi upar ho toh badi value)
console.log(Math.floor(4.9)); // 4 (Niche wali value)

console.log(Math.random()); // 0 aur 1 ke beech me koi bhi decimal value

// Sarkaari Formula kisi range me random number nikalne ke liye:
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
