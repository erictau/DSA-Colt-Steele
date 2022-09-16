// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = this.tail.next
        }
        this.length++
        return this
    }
    pop(){
        // Edge Case - Empty list
        if (!this.head) return undefined
        // Edge Case - Only 1 item in list 
        if (!this.head.next) {
            let oldTail = this.tail
            this.tail = null
            this.head = null
            this.length--
            return oldTail
        }
        // Normal Case
        let newTail = this.head
        let oldTail = this.tail
        while (newTail.next !== oldTail) {
            newTail = newTail.next
        }
        this.tail = newTail
        newTail.next = null
        this.length--
        return oldTail
    }
    shift() {
        let oldHead = this.head
        // Edge Case - Empty List
        if (!oldHead) return undefined
        // Edge Case - Only 1 item in list
        if (!oldHead.next) {
            this.head = null
            this.tail = null
            this.length--
            return oldHead
        }

        // Normal Case
        this.head = this.head.next
        this.length--
        return oldHead
    }
    unshift(val) {
        let newNode = new Node(val)
        // Edge Case - empty list
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            this.length++
            return this
        }
        // Normal Case
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    get(idx) {
        if (idx < 0 || idx > this.length) return null
        let currNode = this.head
        for (let i = 0; i < idx; i++) {
            currNode = currNode.next
        }
        return currNode
    }
    set(idx, val) {
        const node = this.get(idx)
        if (node) {
            node.val = val
            return true
        } else {
            return false
        }
    }
    insert(idx, val) {
        // Edge Cases
        if (idx === 0) return !!this.unshift(val)
        if (idx === this.length) return !!this.push(val)
        // Normal Case
        const prevNode = this.get(idx - 1)
        const newNode = new Node(val)
        if (!prevNode) return false
        newNode.next = prevNode.next
        prevNode.next = newNode
        this.length++
        return true
    }
    remove(idx) {
        // Edge Cases
        if (idx === 0) return this.shift()
        if (idx === this.length - 1) return this.pop()
        // Normal Case
        const prevNode = this.get(idx - 1)
        if (!prevNode) return null
        const removedNode = prevNode.next
        prevNode.next = removedNode.next
        removedNode.next = null
        this.length--
        return removedNode
    }
    reverse() {
        // Edge Cases
        if (this.length <= 1) return this
        // Initialize Pointers
        let prev = null
        let curr = this.head
        let next = null
        // Flip Head and Tail
        this.head = this.tail
        this.tail = curr
        for (let i = 0; i < this.length; i++) {
            next = curr.next                  
            curr.next = prev
            prev = curr
            curr = next
        }
        return this
    }
}


var list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)

list.reverse()
for (let i = 0; i < list.length; i++) {
    console.log(list.get(i))
}


