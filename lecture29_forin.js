// ============================================
// LECTURE 29: For In Loop
// ============================================

// Objects ke upar loop chalane ke liye for...in best hai
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby'
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Arrays par for...in lagane se sirf Index (0, 1, 2...) milta hai
const programming = ["js", "rb", "py"];
for (const key in programming) {
    console.log(programming[key]); // Aise value nikalte hain
}
