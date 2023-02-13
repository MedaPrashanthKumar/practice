function getUnique(arr){

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
getUnique(array);



//remove the duplicate elements

let array1 = [ 1,2,3,4,5,5,56,1,2,3];
let set1 = [...new Set(array1)];
console.log(set1);

//remove duplicate strings 
let str = "aaaaabrvjehfkagnjkgnesghnhkkhn";
let str1 = new Set(str);
console.log(str1);


function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array2 = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array2);
