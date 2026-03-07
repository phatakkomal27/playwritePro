let tests = ["login", "signup", "logout", "profile"];
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}  
console.log("------------------------------");
//for...of loop is used to iterate over the values of an array.
for (let test of tests) {
    console.log(test);
}

//forEach method
tests.forEach((test,index) => {
    console.log(`${index}: ${test}`);
});

tests.forEach(function(test) {
    console.log(test);
});

//entries() method
for (let [index, test] of tests.entries()) {
    console.log(`${index}: ${test}`);
}   
 // for ...in loop gives index of the array, not the value.
 //  It is generally used for iterating over object properties,
 //  not arrays.
let students = ["Alice", "Bob", "Charlie"];
for (let student in students) {
    console.log(student+ "->" + students[student]);
}