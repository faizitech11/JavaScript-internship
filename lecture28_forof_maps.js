// ============================================
// LECTURE 28: For Of & Maps
// ============================================

// For Of - Array par
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}

// MAPS (Unique values aur order maintain karta hai)
const map = new Map();
map.set('IN', "India");
map.set('PK', "Pakistan");

for (const [key, value] of map) { // Destructuring array style
    console.log(key, ':-', value);
}
