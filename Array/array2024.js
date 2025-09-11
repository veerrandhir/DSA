// Here I will keep Array questions and its answer

/*
let arr = [15, 465, 4564, 4568];

let max = arr[0]; // considering first element as max
let sMax = [];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    // implemet first condition
    sMax = max;
    max = arr[i];
  } else if (arr[i] > sMax && max != arr[i]) {
    // case if any number repeated or if we already have max but value is grater then sMax
    sMax = arr[i];
  }
}
console.log("Max elemetn is : ", max); // show result
console.log("Second max element is :", sMax);

*/

/*
// REVERSE Array
let arr = [15, 465, 4564, 4568, 43546];
let j = arr.length - 1;
let i = 0;
let temp = [];

while (i <= j) { // while (i < j) { it will not work for odd number of element as the loop skip the element and it become infinite
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}

console.log("sorted array is  : ", arr);
// console.log("Second max element is :" , sMax)

*/

/*

// Short an arry keep all 0 and 1 in single side
let arr = [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0];
let i = 0,
  j = 0;
while (i < arr.length) {
  if (arr[i] == 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}

console.log(arr);

*/

/*
// Short an array in ascending order
let arr = [5, 7, 9, 1, 6, 8];
for (let i = 0; i < arr.length; i++) {
  // iterate for i it itreate ones
  let temp = arr[i];
  // we declear temp here so on each innerloop (j) iteration it will restore value of i and we get and array get sorted for each loop let j= 1;
  for (let j = 0; j < arr.length; j++) {
    // when outer loop iterate once it will iterate length of array times
    if (arr[j] > temp) {
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
}
console.log(arr);


*/

/*
// 1480. Running Sum of 1d Array 
let nums = [3, 1, 2, 10, 1];
let n = nums.length;
function runningSum(nums) {
  let i = 0;
  let sum = 0; // we need to keep the value
  while (i < nums.length) {
    sum = sum + nums[i]; // if we declear sum here on every loop it's value get vanish
    nums[i] = sum;
    i++;
    // console.log(sum);
  }
  return nums;
}
// runningSum(nums);

*/

/*
// Remove duplicate array form shorted array
// let nums = [0, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6];
let nums = [5, 5, 5, 6];
let i = 0;
let j = 1;
console.log("First case - i & j are ", i, " ", j);
while ((i < nums.length) & (j < nums.length)) {
  if (nums[i] == nums[j]) {
    console.log(nums[i], " i : Array values are equal: j value", nums[j]);

    // i++;
    j++;
  } else {
    i++;
    nums[i] = nums[j];
    console.log(nums[i], "i val : Arry val not equal   : j val", nums[j]);
    // i++;
    j++;
  }
}
console.log(nums);

console.log(nums.slice(0, i + 2)); // [0, 1, 2, 3, 4, 5, 6]
let mergArr = new Array(nums.length).push(9);
console.log("My name is veer ");
console.log(mergArr);
*/
// merge two shorted array
/*
let nums1 = [1, 2, 6, 15, 544];
let nums2 = [2, 10, 11];
let m = nums1.length;
let n = nums2.length;
var merge = function (nums1, m, nums2, n) {
  let mergeArr = new Array(m + n);
  let i = (j = k = 0);
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      mergeArr[k++] = nums1[i++];
    } else {
      mergeArr[k++] = nums2[j++];
    }
  }
  while (j < n) {
    mergeArr[k++] = nums2[j++];
  }
  // while (j<nums2.length){
  //     mergeArr[k++] = nums2[j++]
  // }
  while (i < m) {
    mergeArr[k++] = nums1[i++];
  }
  console.log(mergeArr);

  return mergeArr;
};

merge(nums1, m, nums2, n);

*/
/*
// leetcode 122 Best time to buy and sell stock II

let prices = [7, 5, 9, 3, 6, 4];
let currentPrice = prices[0];
let netProfit = 0;
for (let i = 0; i < prices.length; i++) {
  if (currentPrice > prices[i]) {
    // buy stock
    currentPrice = prices[i];
  }
  let profit = Math.max(currentPrice, prices[i]);
  netProfit = profit;
  // return netProfit;
}

console.log(netProfit);


// find no. of each element ocured in a string

let str =
  "I am going to market and will catch all the elements which I have picked up ";

let countObj = {};

for (let i = 0; i < str.length; i++) {
  let char = str.charAt(i); // for each char of string str save in a variable
  // let key = "name"; // to ckeck object property
  if (!countObj[char]) {
    // It will check for each element if there is no element it will put 0
    countObj[char] = 0;
  }
  countObj[char] += 1; // if element found  increse count
  // countObj[key] = 6; // check object properties
}
// console.log(countObj);

// self practice count no. of letter repeated
*/
/*
let word = "Hello dear I am here for you";
let wordCount = {};
for (let i = 0; i < word.length; i++) {
  let wordChar = word.charAt(i);
  //   if (!wordCount[wordChar]) { // first iteration each element is undefined so alligned 0 to save code crash
  //     wordCount[wordChar] = 0;
  //   }

  //   wordCount[wordChar] += 1;
  // }
  wordCount[wordChar] = (wordCount[wordChar] || 0) + 1; //this line of code is compact and most efecctive 
}
console.log(wordCount);
*/

/*
// Return pair in sorted array with target sum
let arr = [7, 9, 11, 13, 17, 21];
let target = 24;
let pair = [];
function findPair(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // let pairIndices = new Array(); eleminated for sorted form // defined a array which holds pair array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        console.log("We found the pair which meet target", i, j);
        // pairIndices.push(i); // push on element array
        // pairIndices.push(j);
        // pair.push(pairIndices); // keep all paired element list on a single array
        // shorted form of above line
        pair.push([i, j]);
      }
    }
  }
  console.log(pair); // if we log here it will run single turn
  return pair; // return
}
findPair(arr, target);
*/
/*

// The above question has low performance as Time Complexity is O(n^2) let's Optimisze the solution

// I have to solve this logic there are error in this logic

// This code will only work on two consetutive pairs of no. not in other 

let arr = [7, 9, 11, 13, 17, 21];
let target = 18;
let pair = [];
function findPair(arr, target) {
  let i = 0;
  while (i < arr.length) {
    let j = i + 1;
    if (arr[i] + arr[j] === target) {
      pair.push([i, j]);
      i++;
      j++;
    }
    i++;
    j++;
  }
  console.log(pair);

  return pair;
}
findPair(arr, target);
*/

// let's solve the question with the help of two pointers method one at first and another at last element

// bubble sort algorithm
/*
let arr = [2, 9, 7, 1, 4, 6];
let n = arr.length;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      // let k = j + 1;
      let temp = 0;
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
*/
/*
// 27. Remove Element (Wrong Attempt )
// let nums = [3, 2, 2, 3];
// let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let nums = [2];
let val = 2;
let i = 0;
let j = nums.length - 1;
console.log("Value of j : ", j);
function check(nums, val) {
  while (i <= j) {
    if (nums.length == 1) {
      console.log("hey i an calling from if condition ");
      return;
    } else if (nums[i] == val && nums[i] == nums[j]) {
      j--;
    } else if (nums[i] != val) {
      i++;
    } else if (i == j) {
      return;
    } else {
      nums[i] = nums[j];
      nums[j] = val;
      i++;
      j--;
    }
    // return i + 1;
  }
}
*/
/*
// let nums = [3, 2, 2, 3];
// let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let nums = [2];
let val = 2;
// let i = 0;
// let j = nums.length;
function removeElement() {
  let i = 0;
  let j = nums.length;
  while (i < j) {
    if (nums[i] === val) {
      nums[i] = nums[j - 1];
      j--;
    } else {
      i++;
    }
  }
  console.log("hey i am inside and i have only one element");

  console.log("Value of i :", i);
  console.log("our nums is :", nums, nums.length);
  console.log(j);
  return j;
}
removeElement(nums, val);
*/
// leetccode 15 3Sum question
// to find out this solution I have put 3 hrs and more but unable to findout perfect answer.
/*
let arr = [-1, 0, 2, 1, -1, 4];
let resultArry = new Array();
let newNrry = [];

function result() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        for (let k = 0; k < arr.length; k++) {
          if ((j != k) & (i != k) & (i != j)) {
            let sum = arr[i] + arr[j] + arr[k];
            // console.log(
            //   `hey in ${i}th iteration i is ${i}( value is ${arr[i]}) , j is ${j} (value is ${arr[j]}) and k is ${k} (value is ${arr[k]}) and there is Sum is ${sum}`
            // );
            if (sum == 0) {
              newNrry = [arr[i], arr[j], arr[k]];
              resultArry.push(newNrry);
              // console.log(resultArry);
            }
          }
        }
      }
    }
  }
  const newArr = [...new Set(resultArry)];
  console.log(resultArry);
  console.log(newArr, "This is new array with unique value");
}
result(arr);
//

*/
/*
let arr = [-1, 0, 2, 1, -1, 4];
let resultArry = [];

function result() {
  for (let i = 0; i < arr.length; i++) {
    // console.log("Hey I am i", i);

    for (let j = i + 1; j < arr.length; j++) {
      // console.log("Hey I am j", j);

      for (let k = j + 1; k < arr.length; k++) {
        // console.log("Hey I am k", k);

        let sum = arr[i] + arr[j] + arr[k];
        if (sum === 0) {
          let triplet = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);
          let key = triplet.join(",");
          console.log("Hwy I am key", key);

          if (!resultArry.some((item) => item.join(",") === key)) {
            console.log("Hey I am resultArray", resultArry);

            resultArry.push(triplet);
          }
        }
      }
    }
  }

  console.log("Unique triplets with sum 0:", resultArry);
}
result();
*/

let nums = [1, 2, 3, 5, 6];
let target = 4;
// function searchInsert(nums, target) {
//   console.log("Hey there I am your frined");
//   for (let i = 0; i < nums.length; i++) {
//     console.log("hellow I am  inside for loop ");

//     if (nums[i] == target) {
//       console.log(i);
//       return i;
//     } else if (nums[i] > target) {
//       console.log(i - 1);

//       return i - 1;
//     }
//   }
// }

function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      console.log(i);
      return i;
    }
  }
  return console.log(nums.length);
}

searchInsert(nums, target);
