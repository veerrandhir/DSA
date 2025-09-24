// let age = prompt("What is your age");
// let age = Number(age);
// console.log("your age is :", age);
/*f
let a = 20;
let b = 30;

let c = b;
b = a;

console.log(c);
//maths
// console.log(Math.round)
let ce = Math.ceil(89.25);
let rd = Math.round(95.2, "Rounded Value");
let fl = Math.floor(110.56, "Floor value");
let tr = Math.trunc(10.8, "Truncat value");
let cel = Math.ceil(10.1, "ceil val");

console.log(ce, ": for ceil ");
console.log(fl, ": for floor ");
console.log(rd, ": for round ");
console.log(tr, ": for trunc ");
console.log(cel, ": for ceil ");

console.log(Math.pow(2, 5)); // give square value
console.log(Math.sqrt(25)); // give square root

console.log(Math.cbrt(69));
console.log(Math.min[(45, 64, 974, 6498, 48489, 64984, 65897, 7865)]);
console.log(Math.max[(25, 65, 565, 987, 967, 467489, 458)]);
console.log(Math.random());
// console.log(tofix(fl));
*/

/*
// Electricity bill calculator 
let unit = 700 ;
let amount = 0;
if(unit> 400){
    amount += (unit -400)*13
    unit = 400
}
if (unit > 200){
    amount += (unit -200)*8
    unit = 200
}
if (unit > 100){
    amount += (unit - 100)*6
    unit = 100
}
amount += unit*4.5


console.log(amount)
*/

// Two sum
let nums = [2, 7, 11, 15];
target = 9;

// Brute force solution
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

twoSum(nums, target);
//Optimized Solution (Using Hash Map)
/*
Idea:

Iterate once through the array.

For each element num, check if target - num already exists in the hash map.

If yes → return indices.

If not → store num with its index in the hash map.
*/
/*
function twoSumHas(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let component = target - nums[i];
    if (map.hasOwnProprety(component)) {
      return [map[component], i];
    }
    map[nums[i]] = i;
  }
  return [];
}
*/

//How we can create an Arry and asign value into it using prompt
/*
let arr = [];
for (let i = 0; i < 5; i++) {
  let newNum = Number(prompt("Enter a value:"));
  arr.push(newNum);
}
console.log(arr);
*/

// Swap and arrange all element in group
/*
let arr = [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1];

let i = 0,
  j = 0;

while (i <= arr.length) {
  if (arr[i] === 0) {
    let temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}

console.log(arr);
*/

/*
let string = "MCD";
function romanToInt(string) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    if (roman[string[i]] < roman[string[i + 1]]) {
      sum -= roman[string[i]];
    } else {
      sum += roman[string[i]];
      console.log(
        `At ${string[i]}: ${roman[string[i]]}, next is ${string[i + 1]}: ${
          roman[string[i + 1]]
        }`
      );
    }
  }
  return sum;
}

console.log(romanToInt(string));
console.log("i am roman to int"); */

/* Wrong code// X

let a = [1, 2, 17, 34];
let b = [1, 2, 3, 8, 12, 24];

let lena = a.length;
let lenb = b.length;
let min = Math.min(lena, lenb);
console.log(min);

console.log("inside fn", min);
for (let i = min; i >= 0; i--) {
  console.log("inside fjorloop ", min);
}

console.log(min);

// findHcf(a, b, min);

// let array = b;
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }



// Right code mistake in returning // 
function findHcf(){

let a = 34
let b = 24

for(let i = b; i >= 0; i--){
    console.log("it has not been called", b,a,i)
    if(a % i == 0 &&  b%i ==0){
        console.log("hcf of ", a , "and", b, "is ", i)
        return i
    }// i were returning in else position due to which my code was not getting into loop
    
    
    
}return 0

}


findHcf()


*/
/*
Standered way to print factorial numbers

// find factor of a  given no
let n = 45;
for (let i = 0; i < Math.floor(Math.sqrt(n)); i++) {
  if (n % i == 0) {
    process.stdout.write(i + "");
    if (n / i !== i) {
      process.stdout.write(" " + n / i + " ");
    }
  }
}
*/
