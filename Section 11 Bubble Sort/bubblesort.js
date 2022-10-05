function bubbleSort(arr) {
    let swapped
    for (let i = arr.length - 1; i > 0; i--) {
        swapped = false
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
                swapped = true
            }
        }
        if (swapped === false) break
    }
    return arr
}

function swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]]
    return
}

console.log(bubbleSort([323, 1, 24, 231, 20]))