let array1 = [1,2,3,4,5];

//push method
array1.push(6);
console.log(array1);

//pop method 
array1.pop()
console.log(array1)

//shift method
array1.shift()
console.log(array1)

//unshift method 
array1.unshift(9)
console.log(array1)

//splice(start,deleteCount,insertelements)
let b = [1,2,3,5,6,7,8,9,10] ;
b.splice(6,5,11);
console.log(b);

//filter

let array2 = [1,2,3,5,6,7,8,9,10];
let result = array2.filter(i => i%2 === 0);
console.log(result);

//Recursion Afunction calling itself is known as Recursion 

function fact(n){
    if(n === 0){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}

let num = 6;
