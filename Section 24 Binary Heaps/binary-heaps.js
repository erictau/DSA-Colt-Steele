class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    
    insert(val) {
        // Insert the val at the end of the values array.
        this.values.push(val)
        // Set up index and val variables to make code more readable.
        let currIdx = this.values.length - 1
        let parentIdx = findParentIdx(currIdx)
        let currVal = this.values[currIdx]
        let parentVal = this.values[parentIdx]
        // Loop until the currentVal is in the correct place.
        while (currVal > parentVal && currIdx) {
            this.values[parentIdx] = currVal
            this.values[currIdx] = parentVal
            currIdx = parentIdx
            parentIdx = findParentIdx(currIdx)
            currVal = this.values[currIdx]
            parentVal = this.values[parentIdx]
        }
        return
    }

    extractMax() {
        // Swap Root and last value, then pop the array.
        let currIdx = 0
        let currVal = this.values[currIdx]
        this.values[0] = this.values[this.values.length - 1]
        this.values[this.values.length - 1] = currVal
        let extracted = this.values.pop()

        // Update currVal to the new Root.
        currVal = this.values[currIdx]
        let leftChildIdx = findLeftChildIdx(currIdx)
        let rightChildIdx = findRightChildIdx(currIdx)
        let leftChildVal = this.values[leftChildIdx]
        let rightChildVal = this.values[rightChildIdx]

        // Bubble Down
        while (leftChildIdx < this.values.length || rightChildIdx < this.values.length) {
            // Figure out which 
            let largerChildIdx;
            if (leftChildVal && rightChildVal) {
                largerChildIdx = leftChildVal > rightChildVal ? leftChildIdx : rightChildIdx
            } else if (!rightChildVal) {
                largerChildIdx = leftChildIdx
            } 

            if (this.values[largerChildIdx] > currVal) {
                currIdx = this.swapValues(currIdx, largerChildIdx)
                currVal = this.values[currIdx]
                leftChildIdx = findLeftChildIdx(currIdx)
                rightChildIdx = findRightChildIdx(currIdx)
                leftChildVal = this.values[leftChildIdx]
                rightChildVal = this.values[rightChildIdx]
            } else {
                break
            }
        }
        return extracted

    }

    swapValues(currIdx, swappedIdx) {
        const temp = this.values[currIdx]
        this.values[currIdx] = this.values[swappedIdx]
        this.values[swappedIdx] = temp
        return swappedIdx
    }
}


// Helper Functions
function findParentIdx(currIdx) {
    if (currIdx < 1) return null
    return Math.floor((currIdx - 1) / 2)
}
function findLeftChildIdx(currIdx) {
    return currIdx * 2 + 1
}
function findRightChildIdx(currIdx) {
    return currIdx * 2 + 2
}



// Run Code
let heap = new MaxBinaryHeap()
heap.insert(10)
heap.insert(5)
heap.insert(3)
heap.insert(6)
heap.insert(100)
heap.insert(2)
heap.insert(4)
console.log(heap)
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
console.log(heap)

