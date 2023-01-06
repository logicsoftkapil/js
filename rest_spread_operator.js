arr1 = [1,2,3,4];
arr2 = [5,6,7,8];

const res1 = arr1.concat(arr2); //1st way to combine two array 

console.log(res1);

arr3 = [9,10,11,arr2];
console.log(arr3);

//spread operator takes an array or (iterables) and spread its value.
arr4 = [...arr2, 9, 10, 11] //spread operator
console.log(arr4);

var combinedArr = [...arr1, ...arr2,];
console.log(combinedArr);
