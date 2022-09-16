class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        const newNode = new Node(val);
        let currNode = this.root;
        if (!currNode) this.root = newNode
        while(currNode) {
            if (currNode.val > newNode.val) {
                if (currNode.left) {
                    currNode = currNode.left
                } else {
                    currNode.left = newNode
                    return this.root
                }
            } else if (currNode.val < newNode.val) {
                if (currNode.right) {
                    currNode = currNode.right
                } else {
                    currNode.right = newNode
                    return this.root
                }
            } else {
                return undefined
            }
        }
        return this.root
    }

    find(val) {
        let currNode = this.root;
        while (currNode) {
            if (currNode.val === val) break
            currNode.val > val ? currNode = currNode.left : currNode = currNode.right
        }
        return currNode
    }

    bfs() {
        if (!this.root) return null
        const queue = [this.root]
        const visited = []
        
        while(queue.length) {
            let dequeued = queue.pop()
            if (dequeued.left) queue.unshift(dequeued.left)
            if (dequeued.right) queue.unshift(dequeued.right)
            visited.push(dequeued.val)
        }
        return visited
    }

    dfsPreOrder() {
        const visited = []
        const curr = this.root

        function recursion(node) {
            visited.push(node.val)
            if (node.left) recursion(node.left)
            if (node.right) recursion(node.right)
        }
        recursion(curr)
        return visited
    }

    dfsPostOrder() {
        const visited = []
        const curr = this.root

        function recursion(node) {
            if (node.left) recursion(node.left)
            if (node.right) recursion(node.right)
            visited.push(node.val)
        }
        recursion(curr)
        return visited
    }

    dfsInOrder() {
        const visited = []
        const curr = this.root

        function recursion(node) {
            if (node.left) recursion(node.left)
            visited.push(node.val)
            if (node.right) recursion(node.right)
        }
        recursion(curr)
        return visited
    }
}

const tree = new BinarySearchTree()
console.log(tree.insert(10))
console.log(tree.insert(6))
console.log(tree.insert(15))
console.log(tree.insert(3))
console.log(tree.insert(8))
console.log(tree.insert(20))
console.log(tree.dfsInOrder())
