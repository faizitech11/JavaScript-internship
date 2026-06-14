// ============================================
// LECTURE 16: Functions & Parameters
// ============================================

// Function banana (Definition)
function addTwoNumbers(num1, num2) {   // num1, num2 are Parameters
    let result = num1 + num2;
    return result;
    console.log("Yeh kabhi nahi chalega"); // Return ke baad code execute nahi hota
}

// Function chalana (Execution)
const finalResult = addTwoNumbers(3, 5); // 3, 5 are Arguments
console.log("Result is: ", finalResult); // Output: 8

function loginUserMessage(username = "Sam") { // Default value agar kuch pass na ho
    if (!username) {
        console.log("Pleases enter a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("Hitesh"));
