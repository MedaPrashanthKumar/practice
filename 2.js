let num1= 6;
let num2 = 6;
let result = num1 + num2 ;
console.log(`The addition of ${num1} and is ${num2} is ${result}`); //template literal 



//for loop
/*let i;
for(i=1;i<=5;i++){
    console.log("Hi",i)
    for(let j=1;j<=5;j++){
        console.log("Hello",j);
    }

}*/

//Reverse of  a Number
num1 = 123;
num2 = 0;
let rem;
while(num1>0){
    rem = num1%10;
    //console.log(rem);
    num2 = num2*10+rem;
    //console.log(num2);
    num1 = parseInt(num1/10);
    //console.log(num1);
    
}

console.log("The Reverse of the number is" + " "+ num2);

/*
let alien = {
    name : 'Ram',
    skill : 'JS',
    laptop : {
        processor : 'i7',
        ram : 4 ,
        speed : "8Ghz" 
    }
}

for(let i in alien){
    console.log(i,alien[i]);
}*/




