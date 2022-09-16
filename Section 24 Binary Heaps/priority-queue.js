class Node {
    constructor(priority, value) {
        this.priority = priority
        this.value = value
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }
    
    enqueue(priority, value) {
        // Insert the value at the end of the values array.
        let newNode = new Node(priority, value)
        this.values.push(newNode)
        // Set up index and value variables to make code more readable.
        let currIdx = this.values.length - 1
        let parentIdx = findParentIdx(currIdx)
        let currNode = this.values[currIdx]
        let parentNode = this.values[parentIdx]
        // Loop until the currentVal is in the correct place.
        while (currIdx && currNode.priority < parentNode.priority) {
            currIdx = this.swapValues(currIdx, parentIdx)
            parentIdx = findParentIdx(currIdx)
            currNode = this.values[currIdx]
            parentNode = this.values[parentIdx]
        }
        return
    }

    dequeue() {
        // Swap Root and last value, then pop the array.
        this.swapValues(0, this.values.length - 1)
        let currIdx = 0
        let currNode = this.values[currIdx]
        let extracted = this.values.pop()

        // Initialize children indices and nodes
        let leftChildIdx = findLeftChildIdx(currIdx)
        let rightChildIdx = findRightChildIdx(currIdx)
        let leftChildNode = this.values[leftChildIdx]
        let rightChildNode = this.values[rightChildIdx]

        // Bubble Down
        while (leftChildIdx < this.values.length || rightChildIdx < this.values.length) {
            // Figure out which 
            let smallerChildIdx;
            if (leftChildNode && rightChildNode) {
                smallerChildIdx = leftChildNode.priority < rightChildNode.priority ? leftChildIdx : rightChildIdx
            } else if (!rightChildNode) {
                smallerChildIdx = leftChildIdx
            } 

            if (this.values[smallerChildIdx].priority < currNode.priority) {
                currIdx = this.swapValues(currIdx, smallerChildIdx)
                currNode = this.values[currIdx]
                leftChildIdx = findLeftChildIdx(currIdx)
                rightChildIdx = findRightChildIdx(currIdx)
                leftChildNode = this.values[leftChildIdx]
                rightChildNode = this.values[rightChildIdx]
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
