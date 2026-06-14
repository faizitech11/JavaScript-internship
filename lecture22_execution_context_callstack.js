// ============================================
// LECTURE 22: JS Execution Context & Call Stack
// ============================================

// Is lecture me theory thi, code ka dimag me dry-run tha:
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);

// 1. Global Execution Context banta hai (`this`)
// 2. Memory Phase:
//      val1    = undefined
//      val2    = undefined
//      addNum  = definition (puri function definition store hoti hai)
//      result1 = undefined
// 3. Execution Phase:
//      val1    = 10
//      val2    = 5
//      addNum ke liye naya execution context banta hai aur LIFO stack me jata hai
//      result1 = 15 (addNum ka context khatam hone ke baad)

console.log(result1); // Output: 15
