function sumZero(arr) {
    // Input: A sorted array of numbers
    // Output: A pair of values where the sum of the two values equals zero

    // Breakdown:
    // Since it is a sorted array, we will want to have 2 pointers at the edges of the array. 
    // Using a while loop and a conditional statement, converge the pointers until we find a solution.
    // If pointers converge on the same index, solution does not exist.

    // Example: [-4,-2,0,1,2]
    let left = 0;
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else if (sum < 0) {
            left++
        }
    }
    return false
}

// console.log(sumZero([-4,-2,0,1,2]))
// console.log(sumZero([-4,-1,0,1,2]))
// console.log(sumZero([-4,-3,0,1,2]))

function countUniqueValues(arr) {
    // Input: Array of sorted numbers
    // Output: A count of the unique numbers in the array

    // Breakdown: 
    // Have a counter and a pointer. Loop through the array and compare the value at i with the value at the pointer. Every time there isn't a match, update the counter by 1 and the pointer to the new position. Once we've reached the end of the array, we have our total counter and we return that value.
    if (arr.length === 0) return 0

    let counter = 1
    let holdPtr = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[holdPtr] !== arr[i]) {
            counter++
            holdPtr = i
        }
    }
    return counter
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4

