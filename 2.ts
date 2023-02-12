var input1: number = 1728;
var input2: number = 1;
var result: number = input1 + input2;
console.log(`The sum of ${input1} and ${input2} is ${result}`);

//Control Statements

//If statement

var x: number = 10,
  y = 20;

//if statement
if (x < y) {
  console.log("x is less than y");
}

//if-else statement
if (x < y) {
  console.log("x is less than y");
} else {
  console.log("x is greater than y");
}

//Ternary operator
x < y ? console.log("x is less than y") : console.log("x is greater than y");

//Switch Expression
var day: number = 2;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid choice");
    break;
}


//for-of Loop
var array = [1,2,3,4,6,89,99,95,99,45];
for(let i of array){
    console.log("Array of element " + i);
}

//for-in element

for(let i in array){
    console.log(i,array[i]);
}

