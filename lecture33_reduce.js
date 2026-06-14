// ============================================
// LECTURE 33: Reduce Method
// ============================================

const nums = [1, 2, 3, 4];

// Bill calculation ya total sum ke liye use hota hai
const initialValue = 0;
const totalSum = nums.reduce((accumulator, currentValue) => {
    console.log(`acc: ${accumulator} and curr: ${currentValue}`);
    return accumulator + currentValue;
}, initialValue); // initialValue accumulator ko pehli baar milti hai

console.log(totalSum); // Output: 10
