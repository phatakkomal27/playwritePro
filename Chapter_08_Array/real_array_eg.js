let browser = ["Chrome", "Firefox", "Safari", "Edge"];
console.log(browser[0]); // Output: Chrome
console.log(browser[1]); // Output: Firefox
console.log(browser[2]); // Output: Safari
console.log(browser[3]);    
browser.pop(); // Removes "Edge"
console.log(browser);   
browser.push("Opera"); // Adds "Opera" to the end of the array
console.log(browser);   
browser.unshift("Brave"); // Adds "Brave" to the beginning of the array
console.log(browser);   
browser.shift();    
console.log(browser);

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
}   