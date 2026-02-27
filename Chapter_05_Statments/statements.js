let age=18;
if(age>=18)
{
    console.log("Eligible to vote");
} else
{
    console.log("Not eligible to vote");
}       

let countOfLocators=5;
if(countOfLocators>0)
{
    console.log("Locators are present");
}   else 
{
    console.log("Locators are not present");
}

let statusCode=200;
if(statusCode==200)
{  
    console.log("Request is successful");
} else if(statusCode==404)
{
    console.log("Page not found");
} else if(statusCode==500)
{
    console.log("Internal server error");
} else
{
    console.log("Unknown status code");
}   
        