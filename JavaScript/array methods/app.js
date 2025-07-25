//multipe of 10

// let nums = [10, 20 ,30, 40];

// let ans = nums.every((el) => el % 10 == 0);

// console.log(ans);


//minimum number in array 

// let num = [2, 4 ,5, 7, 9, 2, 8];

// let ans = num.reduce((res, el) =>{
//     if  (res < el){
//         return res;
//     } else {
//         return el;
//     }
// } );

// console.log(ans);

// square and sum the array and then avrage of array 

// let nums = [2, 4 ,5, 7, 9, 2, 8];

// const square = nums.map((num) => num * num);
// console.log(square);

// let sum = square.reduce((acc, cur) => acc + cur, 0);

// let avg = sum / nums.length;
// console.log(avg);

//create new array using map function whose each element equal to the original element plus 5

// let nums = [2, 4 ,5, 7, 9, 2, 8];

// const newarr = nums.map((el) => el+5);
// console.log(newarr);

//create new array thats el in uppercase

// let arr = ["dipak", "sham","ram"];

// const newarr = arr.map((el) => el.toUpperCase());
// console.log(newarr);

// function doubleAndReturnArgs = (arr, args) =>[
//     ...arr,
//     ...args.map((v)=> v * 2),
// ];

// doubleAndReturnArgs([1,2,3],4,4);//[1,2,3,8,8]
// doubleAndReturnArgs([2],10,4);//[2,20,8]

// merge object

constmergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
mergeObjects( {a:1, b:2}, {c:3, d:4});//{a:1,b:2,c:3,d:4}