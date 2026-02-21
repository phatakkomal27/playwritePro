var a=10;
console.log("a="+a);

var first_name = "komal";
console.log("Name="+ first_name);
console.log("************************");
console.log("difference between var and let");

var b=20;
console.log("b="+b);
funb();
console.log("b="+b);
function funb()
{
     var b=30;
    console.log("inside fun b="+b);
}
console.log("-------------");
let c=20;
console.log("c="+c);
func();
console.log("c="+c);
function func()
{
     let c=30;
    console.log("inside fun c="+c);
}