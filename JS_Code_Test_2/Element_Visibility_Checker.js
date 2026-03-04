//Element Visibility Checker
/* In UI automation (Cypress/Playwright), you often need to validate
 element states before interacting with them. Write a JavaScript program 
 that checks an element's properties (isPresent, isDisplayed, isEnabled)
  and prints the appropriate action a QA engineer should take. Use strict 
  equality (===), logical operators (&&, ||), and the ternary operator for
   severity level.
States: READY (all true), DISABLED (present+displayed but not enabled),
 HIDDEN (present but not displayed), NOT FOUND (not present).
Severity: CRITICAL (not present), WARNING (not displayed or not enabled),
 OK (all good).*/

 let isPresent = true;
 let isDisplayed = true;
 let isEnabled = true;  
if(isPresent === true && isDisplayed === true && isEnabled === true) {
    console.log("Element State: READY");
}   
else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    console.log("Element State: DISABLED");
}
else if (isPresent === true && isDisplayed === false) {
    console.log("Element State: HIDDEN");
}
else if (isPresent === false) {
    console.log("Element State: NOT FOUND");
}   

let severity = (isPresent === false) ? "CRITICAL" :
               (isDisplayed === false || isEnabled === false) ? "WARNING" :
               "OK";
console.log(`Severity Level: ${severity}`); 