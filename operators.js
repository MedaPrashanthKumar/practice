//Arithmetic Operators +,-,*,/,%
let a = 5;
let b =6 ;
console.log("Addition"+" "+(a+b));
console.log("Subtraction"+" "+(a-b));
console.log("Multiplication"+" "+(a*b));
console.log("Divison"+" "+(a/b));
console.log("modulo"+" "+(a%b));

//Assignment operators += , -=, *= , /= ,%= , ++ , --

let c = 5;
let num = c++; //post increment 
console.log(num);
console.log(c);


 c1 = 10;
 num1 = ++c1; //preincrement 
console.log(num1);
console.log(c1);

//Comparison operators > , < , >= , =< , == , ===

let d = "6";
let e = 6;
// result = a==b;
// result1 = a===b;
console.log(d == e);//it checks only values
console.log(d === e);//it checks both datatype and values

//logical operators  && , || ,!

//Bitwise operators & , | , !, ^ 

//conditional opeartors 

let res = (e%2 === 0)?console.log(`The number  ${e} is Even`):console.log(`The number ${e} is odd`);


