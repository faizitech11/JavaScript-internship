// ============================================
// LECTURE 31: Filter Method
// ============================================

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter hamesha true/false condition check karke naya array return karta hai
const newNums = myNums.filter((num) => num > 4);
console.log(newNums); // Output: [5, 6, 7, 8, 9, 10]

// Agar scope {} lagao toh return keyword likhna mat bhoolna!
const newNums2 = myNums.filter((num) => {
    return num > 4;
});
console.log(newNums2);
