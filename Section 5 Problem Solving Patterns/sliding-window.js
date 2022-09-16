function maxSubarraySum(nums, n) {
    // Input: An array of numbers - unsorted and all available integers
    // Output: The maximum sum found in a subarray of a specified size n

    // Breakdown: 
    // Solve this with a sliding window. 
    // Starting at the first subarray, calculate the subarray's sum
    // Loop through the array and update the sum by subtracting the value that was just removed and adding the value that was just included
    // Update a maxsum variable whenever the sum exceeds the existing max sum.
    
    // Examples:
    // maxSubarraySum([1,3,6,3,5], 3) => 1+3+6 = 10 => 10-1+3 = 12 => 12-3+5 = 14

    // Short circuit - edge case
    if (n > nums.length) return null

    // Initial maxsum and tempsum value
    let maxSum = 0
    for (let i = 0; i < n; i++) {
        maxSum += nums[i]
    }
    let tempSum = maxSum

    // Loop through and adjust tempSum on every iteration. Adjust maxSum only when new tempSum is greater than existing maxSum.
    for (let i = 1; i < nums.length - n + 1; i++) {
        tempSum = tempSum - nums[i-1] + nums[i+n-1]
        if (tempSum > maxSum) {
            maxSum = tempSum
        }
    }
    
    return maxSum
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))