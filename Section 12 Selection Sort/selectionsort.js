function selectionSort(arr) {
    let smallestIdx
    for (let i = 0; i < arr.length; i++) {
        smallestIdx = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[smallestIdx]) smallestIdx = j
        }
        swap(arr, i, smallestIdx)
    }
    return arr 
}

function swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]]
    return
}

console.log(selectionSort([323, 1, 24, 231, 20]))
console.log(selectionSort([323, 231, 24, 20, 1]))