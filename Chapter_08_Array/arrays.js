let fruit = ["apple", "banana", "orange"];
console.log(fruit[0]); // Output: apple
console.log(fruit[1]); // Output: banana
console.log(fruit[2]); // Output: orange    
// Modifying an element
fruit[1] = "grape";
console.log(fruit[1]); // Output: grape
// Adding a new element
fruit[3] = "kiwi";  
console.log(fruit[3]); // Output: kiwi
// Length of the array
console.log(fruit.length); // Output: 4
console.log(fruit); // Output: ["apple", "grape", "orange", "kiwi"]
console.log(fruit[4]); // Output: undefined

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Output: 1
let mixedArray = ["hello", 42, true, null];
console.log(mixedArray[0]); // Output: hello
let a =new Array(5); // Creates an array of length 5 with undefined values
