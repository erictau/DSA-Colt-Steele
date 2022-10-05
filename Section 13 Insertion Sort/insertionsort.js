function insertionSort(arr) {
    
    for (let i = 1; i < arr.length; i++) {
        let currVal = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (currVal > arr[j]) {
                arr[j + 1] = currVal
                break
            }
             
            arr[j + 1] = arr[j]

            if (j === 0 && currVal < arr[j]) {
                arr[j] = currVal
            }
        }
    }
    return arr
}

console.log(insertionSort([23,5234,13,21,43]))