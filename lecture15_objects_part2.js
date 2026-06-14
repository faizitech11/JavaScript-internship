// ============================================
// LECTURE 15: Objects (Part 2) - Constructor & API Destructuring
// ============================================

// Singleton / Constructor object
const tinderUser = new Object();
tinderUser.id = "123abs";
tinderUser.name = "Sam";

// Nested Objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: { firstname: "hitesh", lastname: "choudhary" }
    }
};
console.log(regularUser.fullname.userfullname.firstname); // Deep nesting access

// Objects ko aapas me jodna
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { ...obj1, ...obj2 }; // Spread operator yahan bhi chalega
console.log(obj3);

console.log(Object.keys(tinderUser)); // ['id', 'name'] -> Saari keys ka array bana deta hai loop ke liye

// ----- OBJECT DESTRUCTURING -----
const course = { coursename: "js in hindi", price: "999", courseInstructor: "hitesh" };

// Baar-baar course.courseInstructor likhne se bachne ke liye chota naam dena:
const { courseInstructor: instructor } = course;
console.log(instructor); // Output: hitesh
