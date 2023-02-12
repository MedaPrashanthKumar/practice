//Ascending order
let array1 = [3,10,11,3,245,7890,9,111,345,789];
array1.sort(function(a,b){
    return a-b;
});
console.log("Ascending order of an array"+" " + array1);

//Descending order

array1 = [3,10,11,3,245,7890,9,111,345,789];
array1.sort(function(a,b){
    return b-a;
});
console.log("Descending order of an array"+" "+array1);

//Using random order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
console.log(points);


//maximum value

array1 = [3,10,11,3,245,7890,9,111,345,789];
array1.sort(function(a,b){
    return a-b;
});
console.log(array1[array1.length-1]);

//minimum value
array1 = [3,10,11,3,245,7890,9,111,345,789];
array1.sort(function(a,b){
    return b-a;
});
console.log(array1[array1.length-1]);


//Closure is the ability of the function to access the variable outside of the scope
//Example for the Closure
let a = 4 ;
function multiply()
{
    return a*a;
}

console.log(multiply())


//Reverse of a string 
let str = "My name is Prashanth Gupta";
let result = str.split(" ");
console.log(result);
let rev = result.reverse();
console.log(rev);
let joinArray = rev.join(" ")
console.log(joinArray);


//reverse of string using logic 

function reverseString(str){
    let revString = "";
    for(let i=str.length-1;i>=0;i--){
        revString+=str[i];
    }
    return revString;
}
console.log(reverseString('My name is Prashanth Gupta'));


//JS programs
//sum of two numbers

// let input1 = parseInt(prompt("enter the first number"));
// let input2 = parseInt(prompt("enter the second number"))
// let sum = input1 + input2 ;
// console.log(`The sum of ${input1} and ${input2} is ${sum}`);

//Swapping of two numbers
a = 6 ;
b = 8 ;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log("The value of a is " + a);
console.log("The value of b is " + b);

