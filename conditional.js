//if statement 
let num = 6;
if(num>0){
    console.log("The is Positive");
}

//if-else 
 num = 1000;
 if(num%2 === 0){
    console.log("The number is Even");
 }
 else{
    console.log("The number is Odd");
 }

 //else-if Ladder

let a=5,b=6,c=7;
if(a>b && a>c){
    console.log("a is big");
}
else if(b>a && b>c){
    console.log("a is big");
}
else{
    console.log("c is big");
}

//Switch case 
let day = 'Monday';
switch(day){
    case 'Monday': console.log("4am");
                    break;
    case 'Tuesday': 
    case 'Wednesday':
    case 'Thursday':
                    console.log("5am");
                    break;
    case 'Friday':console.log("6am");
                  break;
    case 'Saturday':console.log("7am");
                    break;
    case 'Sunday':console.log("8am");
                    break;
    default : console.log("Learn Full Stack");
    
}

