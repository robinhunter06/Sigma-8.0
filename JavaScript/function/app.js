// function printPoem() {
//     console.log("Twinkle Twinkle, little star");
//     console.log("how I wonder what you are");
// }

// function dice() {
//     let rand = Math.floor(Math.random() * 6) + 1;
//     console.log(rand);
// }

// //Average of three numbers

// function calcAvg(a, b, c) {
//     let Avg = (a + b + c) / 3;
//     console.log(Avg);
// }


// //Print a multiplication table

// function printTable(n) {
//     for (let i = n; i <= n * 10; i += n) {
//         console.log(i);
//     }
// }

// //Return keyword
// //Return a sum of number between 1 to n

// function getSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// //concatinate the string

// let str = ["dipak", " ","vilas"," ", "shelkamde"];

// function concat(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         result += str[i];
//     }
//     return result;
// }

// Write a JavaScript function that returns array elements larger than a number

// let arr = [2,5,2,4,5,3,7,];
// const largerNo = 7;

// function arrayEle(arr , largerNo){
//     if (arr.length > largerNo){
//         console.log(arr);
//     } else {
//         console.log(largerNo);
//     }
// }

// arrayEle(arr, largerNo);

// letarr=[8,9,10,1,2,3,4,5,6,7]; 
// letnum=5;
// //elementslargerthananumbernum
// function  getElements(arr,num){
//     for(leti=0;i<arr.length;i++){
//         if(arr[i]>num){
//             console.log(arr[i]);g
//         }
//     }
// }
// getElements(arr,num);

//Write a JavaScript function to extract unique characters from astring.
// Example:str=“abcdabcdefgggh”
// ans=“abcdefgh”


// let str = "abcdabcdefgggh";
// //functiontogetStringwithalluniqueelements 
// function getUnique(str) {
//     letans = "";
//     for (let i = 0; i < str.length; i++) {
//         let currChar = str[i];
//         if (ans.indexOf(currChar) == -1) {
//             //if current character is not added,then additin ans.

//             //Other wise it is a duplicate.
//             ans += currChar;
//         }
//     }
//     return ans;

// }
// getUnique(str);


// WriteaJavaScriptfunctionthatacceptsalistofcountrynamesasinputandreturnsthelongestcountrynameasoutput.
// Example:country=["Australia","Germany","UnitedStatesofAmerica"]
// output:"UnitedStatesofAmerica"

// let country =["Australia","Germany","UnitedStatesofAmerica"];
// function longestName(country){
//     let ansIdx=0;
//     for(let i=0;i<country.length;i++){
//         let ansLen=country[ansIdx].length;
//         let currLen=country[i].length;
//         if(currLen>ansLen){
//             ansIdx=i;
//         }
//     }
//     return country[ansIdx];
// }
// longestName(country);

//Write a JavaScript function to count the number of vowels in a String argument. a e i o u

// let str = "apnacollage";

// function countVowel(str) {
//     count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) == "a" ||
//             str.charAt(i) == "e" ||
//             str.charAt(i) == "i" ||
//             str.charAt(i) == "o" ||
//             str.charAt(i) == "u" 
//         ){
//         count++;
//         }
//     }
//     return count;
// }

// countVowel(str);

//Arrow function

//Write anarrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

// const arrayAverage =(arr)=>{
//     let total = 0;
//     for(let number of arr){
//         total += number;
//     }
//     return total / arr.length;  
// };

// let arr = [2,1,4,6,3,5,4];
// console.log(arrayAverage(arr));

// even or not


let num = 10;

const isEven = (num) => num % 2 == 0 ;
  

