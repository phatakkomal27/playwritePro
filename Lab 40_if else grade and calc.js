/* Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59 */
let marks =85;
if(marks>=90 && marks<=100)
{
    console.log("Grade: A");
}   
else if(marks>=80 && marks<=89)
{
    console.log("Grade: B");
}
else if(marks>=70 && marks<=79)
{
    console.log("Grade: C");
}
else if(marks>=60 && marks<=69)
{
    console.log("Grade: D");
}   
else if(marks>=0 && marks<=59)
{       
    console.log("Grade: F");
}   

console.log("*************************");

/*Write a program that prints numbers from 1 to 100. However, for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."*/
for(let i=1;i<=100;i++)
{   
    if(i%3==0 && i%5==0)
    {
        console.log(i+" FizzBuzz");
    }
    else if(i%3==0)
    {
        console.log(i+ " Fizz");
    }
    else if(i%5==0)
    {
        console.log(i+" Buzz");
    }
    else
    {
        console.log(i);
    }  
}