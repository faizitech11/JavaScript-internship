// ============================================
// LECTURE 17: Functions with Objects & Rest Operator
// ============================================

// Rest Operator (...) saare inputs ko array me dalne ke liye
function calculateCartPrice(...num1) {
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000)); // Output: [200, 400, 500, 2000]

// Passing Object to Function
const user = { username: "hitesh", price: 199 };

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

// Passing Array to Function
const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray)); // Output: 400
