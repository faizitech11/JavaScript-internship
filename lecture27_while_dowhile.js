// ============================================
// LECTURE 27: While & Do-While Loops
// ============================================

// While Loop
let index = 0;
while (index <= 6) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

// Do-While Loop (Pehle chalega, condition baad me check hogi - Kam se kam 1 baar lazmi)
let score = 11;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10); // Condition false hai, phir bhi ek baar chala
