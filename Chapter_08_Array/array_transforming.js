let salary = [50000, 60000, 55000, 70000];
// Using map to increase each salary by 10%
let increasedSalary = salary.map(sal => sal * 1.10);
console.log(increasedSalary); // Output: [55000, 66000, 60500, 77000]   

let scores = [85, 90, 78, 92];

let grades = scores.map(s=> s> 70 ? "Pass" : "Fail");
console.log(grades); // Output: ["Pass", "Pass", "Pass", "Pass"]    

//filtering an array to get only the passing scores
let passingScores = scores.filter(s => s > 70);
console.log(passingScores); // Output: [85, 90, 78, 92]     

// Using reduce to calculate the total score
let totalScore = scores.reduce((sum, score) => sum + score, 0);
console.log(totalScore); // Output: 345

//flattening a nested array
let nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray.flat()); // Output: [1, 2, 3, 4, 5, 6]

