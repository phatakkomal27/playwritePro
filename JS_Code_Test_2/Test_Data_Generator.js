//Test data generator
/* As an SDET, you frequently need to generate test data for form testing. 
Write a JavaScript program that generates test user data using a for loop. 
Each user should have a unique ID (USR-0001 format), name, email, and role 
(cycling through: admin, editor, viewer, tester, manager). Every 3rd user 
should be inactive (edge case testing). Demonstrate proper use of var
(global counter), let (loop variables), and const (fixed values).*/

let usrId="USR-000";
let userName="TestUser_";
let userEmail;//="testuser1@testingacademy.com";
const roles = ["admin", "editor", "viewer", "tester", "manager"];
const totalUsers = 8;
for (let i = 1; i <= totalUsers; i++) {
    usrId = usrId+`${i}`;
    userEmail = `testuser${i}@testingacademy.com`;
    let role = roles[(i - 1) % roles.length];
    let isActive = (i % 3 === 0) ? "Inactive" : "Active";
    console.log(`ID: ${usrId}, Name: ${userName}${i}, Email: ${userEmail}, Role: ${role}, Status: ${isActive}`);
    usrId = "USR-000";
} 
