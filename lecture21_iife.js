// ============================================
// LECTURE 21: IIFE (Immediately Invoked Function Expression)
// ============================================

// Named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})(); // Semicolon (;) lagana zaroori hai loop end karne ke liye!

// Simple / Arrow IIFE with parameters
((name) => {
    console.log(`DB CONNECTED TWO TO ${name}`);
})('hitesh');
