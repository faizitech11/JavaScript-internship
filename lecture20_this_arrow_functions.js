// ============================================
// LECTURE 20: THIS & Arrow Functions
// ============================================

const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`); // this matlab current context
        console.log(this); // Poora object print karega
    }
};
user.welcomeMessage();
user.username = "sam";
user.welcomeMessage(); // Ab 'sam' print hoga kyunki context badal gaya

console.log(this); // Node me {} dega, Browser me Window Object dega

// ----- ARROW FUNCTION -----
const chai = () => {
    let username = "hitesh";
    console.log(this.username); // Arrow function me 'this' object ko point nahi karta (Undefined dega)
};

// Implicit Return (Bina return keyword ke ek line me)
const addTwoNums = (num1, num2) => num1 + num2;
console.log(addTwoNums(3, 4)); // Output: 7
