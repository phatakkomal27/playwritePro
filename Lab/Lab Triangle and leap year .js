let year=2004;
if((year%4==0 && year%100!=0) || (year%400==0)){
    console.log(year+" is a leap year");
}   
else{
    console.log(year+" is not a leap year");
}   
console.log("****************   ****************  ");
let a=10, b=15, c=5;
if(a==b && b==c && a==c){
    console.log("Triangle is equilateral");
}
else if(a==b || b==c || a==c){
    console.log("Triangle is isosceles");
}
else{
    console.log("Triangle is scalene");
}