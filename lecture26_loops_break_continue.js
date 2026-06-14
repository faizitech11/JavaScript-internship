// ============================================
// LECTURE 26: Loops (For, Break, Continue)
// ============================================

// Break - Loop se poora bahar nikal dega
for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        console.log(`Detected 3, breaking loop...`);
        break;
    }
    console.log(`Value of i is ${i}`);
}

// Continue - Sirf us iteration ko skip karega, loop chalta rahega
for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        console.log(`Detected 3, skipping this turn...`);
        continue; // Sirf 3 ko print nahi karega, 4 par jump kar jayega
    }
    console.log(`Value of i is ${i}`);
}
