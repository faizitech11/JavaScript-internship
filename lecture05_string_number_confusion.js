// ============================================
// LECTURE 5: Why String to Number Conversion is Confusing
// ============================================

let value = 3;
let negValue = -value; // -3

// Operations ka siyapa
console.log("1" + 2);       // "12"
console.log(1 + "2");       // "12"
console.log("1" + 2 + 2);  // "122" -> Pehle string aa gayi toh sab string ban gaye
console.log(1 + 2 + "2");  // "32"  -> Pehle maths chal gayi, fir string judi

console.log(+true); // 1
console.log(+"");   // 0
