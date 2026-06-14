// ============================================
// LECTURE 18: Global vs Local Scope
// ============================================

let a = 100; // Global Scope (Kahin bhi use ho sakta hai)

if (true) {
    let a = 10;   // Local/Block Scope (Sirf is {} ke andar)
    const b = 20;
    var c = 30;   // Siyapa! var scope nahi maanta
    console.log("INNER: ", a); // Output: 10
}

console.log(a); // Output: 100 (Global wala safe raha)
// console.log(b); // Error dega (b is not defined) - Yeh sahi baat hai
console.log(c); // Output: 30 (var bahar leak ho gaya - Isliye var ban hai)
