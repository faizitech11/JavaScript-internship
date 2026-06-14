// ============================================
// LECTURE 19: Scope Level & Mini Hoisting
// ============================================

// Nested Function (Lexical Scope)
function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username); // Sahi hai: Child parent se le sakta hai
    }
    // console.log(website); // Error: Parent child se nahi le sakta
    two();
}
one();

// ----- HOISTING -----
console.log(addone(5)); // Chale ga (Output: 6) - Normal function pehle call ho sakta hai
function addone(num) {
    return num + 1;
}

// console.log(addTwo(5)); // Error dega! (Cannot access before initialization)
const addTwo = function (num) { // Function Expression
    return num + 2;
};
