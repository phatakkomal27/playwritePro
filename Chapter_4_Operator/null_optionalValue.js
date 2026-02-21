//null and optional value operator or nullish coalescing operator

let a= null;
a= a ?? 10;
console.log("a="+a); 
if(a===null)
{
    console.log("a is null");
} else
{
    console.log("a is not null");
}

let b= undefined ?? 20;
console.log("b="+b);    
let c= null ?? undefined ?? 30;
console.log("c="+c);
let d= null ?? "optional value" ?? 40;