// Cyclic sort algorihm

// 268. Missing Number  (Find missing number in the array)

let nums = [3, 0, 1];
function findMissing(nums) {
  let i = 0;
  let temp = 0;
  while (i < nums.length) {
    let currentIndx = nums[i];
    if (i != currentIndx && currentIndx > nums.length) {
      temp = nums[i];
      nums[i] = nums[currentIndx];
      nums[currentIndx] = temp;
    } else i++;
  }

  for (let j = 0; j < nums.length; j++) {
    if (j != nums[j]) {
      return j;
    } else return n;
  }
}
findMissing(nums);

console.log(findMissing());
