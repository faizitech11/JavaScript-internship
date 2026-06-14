// ============================================
// LECTURE 14: Objects (Part 1) - Literals
// ============================================

const mySym = Symbol("key1"); // Symbol banana

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",       // Symbol ko object ki key banane ka sahi tarika brackets me hai
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false
};

// Access karne ke tarike
console.log(JsUser.email);
console.log(JsUser["email"]);      // Yeh behtar hai
console.log(JsUser["full name"]);  // Isko dot (.) se access nahi kar sakte space ki wajah se
console.log(JsUser[mySym]);        // Symbol access karna

JsUser.email = "hitesh@chatgpt.com"; // Value change karna
// Object.freeze(JsUser); // Iske baad object lock ho jata hai, koi change kaam nahi karega

JsUser.greeting = function () {
    console.log(`Hello JS user, my name is ${this.name}`); // this se object ke andar ki details nikalna
};
JsUser.greeting();
