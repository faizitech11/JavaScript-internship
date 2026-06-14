// ============================================
// LECTURE 23: Control Flow (If-Else, Switch)
// ============================================

const isUserloggedIn = true;
const temperature = 41;

if (temperature < 50) {
    console.log("temperature is less than 50");
} else {
    console.log("temperature is greater than 50");
}

// Switch Case
const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March"); // Yeh chalega
        break; // break na lagao toh niche ka code bina check kiye chal jata hai (fallthrough)
    default:
        console.log("default case match");
        break;
}
