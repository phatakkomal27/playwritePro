let result = ["pass", "fail", "pass", "pass", "fail"];
console.log(result.indexOf("pass")); // Output: 0
console.log(result.indexOf("fail")); // Output: 1
console.log(result.indexOf("pass", 1)); // Output: 2
console.log(result.indexOf("pass", 3)); // Output: 3
console.log(result.indexOf("pass", 4)); // Output: -1       
console.log(result.lastIndexOf("pass")); // Output: 3
console.log(result.lastIndexOf("fail")); // Output: 4
console.log(result.lastIndexOf("pass", 2)); // Output: 2
console.log(result.lastIndexOf("pass", 1)); // Output: 0
console.log(result.lastIndexOf("pass", 0)); // Output: 0

let numbers = [1, 2, 3, 4, 5];
numbers.find(num => num > 3); // Output: 4
numbers.find(num => num > 5);   // Output: undefined
numbers.findIndex(num => num > 3);      
// Output: 3
numbers.findIndex(num => num > 5);      
// Output: -1   

numbers.lastIndexOf(3); // Output: 2
numbers.lastIndexOf(6); // Output: -1
