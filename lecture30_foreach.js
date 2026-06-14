// ============================================
// LECTURE 30: For Each Loop
// ============================================

const coding = ["js", "ruby", "java", "python"];

// Callback function me naam nahi hota
coding.forEach(function (val) {
    console.log(val);
});

// Arrow function version (Sabse zyada use hota hai)
coding.forEach((item, index, arr) => {
    console.log(item, index, arr); // Item, uska index aur poora array teeno mil sakte hain
});

// IMPORTANT: forEach kabhi koi value return nahi karta (Undefined dega)
const values = coding.forEach((item) => {
    return item;
});
console.log(values); // Output: undefined
