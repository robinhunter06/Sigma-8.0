//Write a JS program to delete all occurrences of element ‘ num’ in a give narray

// let arr=[1,2,3,4,5,6,2,3];
// num =2;

// for (let i=0; i<arr.length; i++){
//    if(arr[i] == num){
//     arr.splice(i,1);
//    }
// }

//  console.log(arr);


// Write a JS program to find the no of digits in a number.

// let number = 287152;
// let count = 0;

// let copy = number;

// while (copy > 0) {
//     count++;
//     copy = Math.floor(copy/10);
// }

// console.log(count);

//Write a JS program to find the sum of digits in a number.

let number = 287152;
let sum = 0;

let copy = number;

while(copy > 0){
    digit=copy%10;
    sum += digit;
    copy = Math.floor(copy/10);
}

console.log(sum);