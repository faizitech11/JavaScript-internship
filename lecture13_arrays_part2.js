// ============================================
// LECTURE 13: Arrays (Part 2) - Advanced Methods
// ============================================

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Do arrays ko sahi jodne ka tarika (Spread Operator)
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); // Poori khichdi array ko flat kar dega ek line me
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));  // false (Check karne ke liye)
console.log(Array.from("Hitesh"));     // ['H', 'i', 't', 'e', 's', 'h'] (String se array banana)

// ---- SLICE VS SPLICE (VIVA KA FAVOURITE) ----
const arrTest = [0, 1, 2, 3, 4, 5];
console.log("Original: ", arrTest);

const myn1 = arrTest.slice(1, 3);
console.log("Slice (1,3): ", myn1);          // [1, 2] -> index 3 include nahi hua
console.log("Array after slice: ", arrTest); // [0,1,2,3,4,5] -> Original array nahi badla

const myn2 = arrTest.splice(1, 3);
console.log("Splice (1,3): ", myn2);          // [1, 2, 3] -> index 3 bhi include hua
console.log("Array after splice: ", arrTest); // [0, 4, 5] -> Spliced elements original array se BAHAR NIKAL GAYE!
