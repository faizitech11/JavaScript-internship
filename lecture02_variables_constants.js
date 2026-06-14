// ============================================
// LECTURE 2: Variables & Constants
// ============================================

const accountId = 144553;              // Isay change nahi kiya ja sakta (Constant)
let accountEmail = "faizan@google.com"; // Modern tarika, block scope follow karta hai
var accountPassword = "12345";          // Purana tarika, scope leak hota hai (Don't use!)
accountCity = "Jaipur";                 // Bina keyword ke variable (Galti se bhi mat likhna)
let accountState;                       // Sirf declare kiya, value nahi di

// accountId = 2; // Error dega: Assignment to constant variable.

accountEmail = "hc@hc.com";
accountPassword = "aodns";
accountCity = "Bengaluru";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// accountState me 'undefined' print hoga
