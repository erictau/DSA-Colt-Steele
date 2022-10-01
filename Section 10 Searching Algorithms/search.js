function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i
    }
    return -1
}

function binarySearch(arr, target) {
    let l = 0, r = arr.length - 1, mid
    while (l <= r) {
        mid = Math.floor((l + r)/2)
        if (arr[mid] === target) return mid
        if (arr[mid] < target) {
            l = mid + 1
        } else if (arr[mid] > target) {
            r = mid - 1
        }
    }
    return -1
}

function naiveStringSearch(long, short) {
    let count = 0
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i+j]) break
            if (j === short.length - 1) count++
        }
    }
    return count
}

console.log(linearSearch([1,2,3,4,5], 3))
console.log(binarySearch([1,2,3,4,5], 1))
console.log(naiveStringSearch("lorie loled", "lol"))