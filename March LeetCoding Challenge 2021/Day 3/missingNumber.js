// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

// Follow up: Could you implement a solution using only O(1) extra space complexity 
// and O(n) runtime complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const numsSum = nums.reduce((a, b) => a + b, 0)
  const rangeSum = (nums.length * (nums.length + 1)) / 2
  if (rangeSum === numsSum) {
    return 0
  }
  return rangeSum - numsSum
}
