var input1 = 1728;
var input2 = 1;
var result = input1 + input2;
console.log("The sum of ".concat(input1, " and ").concat(input2, " is ").concat(result));
//Control Statements
//If statement
var x = 10, y = 20;
//if statement
if (x < y) {
    console.log("x is less than y");
}
//if-else statement
if (x < y) {
    console.log("x is less than y");
}
else {
    console.log("x is greater than y");
}
//Ternary operator
x < y ? console.log("x is less than y") : console.log("x is greater than y");
//Switch Expression
var day = 2;
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
var array = [1, 2, 3, 4, 6, 89, 99, 95, 99, 45];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var i = array_1[_i];
    console.log("Array of element " + i);
}
//for-in element
for (var i in array) {
    console.log(i, array[i]);
}
//Function to add numbers 
function Add(d, e) {
    return d + e;
}
var output = Add(4, 5);
console.log("The Sum of two numbers ", output);
