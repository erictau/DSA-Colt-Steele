function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) swap(arr, j, j+1)
        }
    }
    return arr
}

function swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]]
    return
}

console.log(bubbleSort([3,2,5,65,74,234]))