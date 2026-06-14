// ============================================
// LECTURE 4: Datatype Conversion Confusion
// ============================================

let score = "33abc";

let valueInNumber = Number(score); // Explicit conversion
console.log(typeof valueInNumber); // Output: number
console.log(valueInNumber);        // Output: NaN (Not a Number)

// "33"    => 33
// "33abc" => NaN
//  true   => 1
//  false  => 0

let isLoggedInUser = "";
let booleanIsLoggedIn = Boolean(isLoggedInUser);
console.log(booleanIsLoggedIn); // Output: false (Khali string false hoti hai)
