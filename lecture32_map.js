// ============================================
// LECTURE 32: Map Method
// ============================================

const myNumbers = [1, 2, 3, 4, 5];

// Map har element par operation karke naya array banata hai
const newNumbers = myNumbers.map((num) => num + 10);
console.log(newNumbers); // Output: [11, 12, 13, 14, 15]

// CHAINING: Ek sath kai method lagana
const chainNums = myNumbers
    .map((num) => num * 10)    // Pehle sab 10 se multiply hue
    .map((num) => num + 1)     // Phir sab me 1 plus hua
    .filter((num) => num > 30); // Phir check hua jo 30 se bade hain

console.log(chainNums);
