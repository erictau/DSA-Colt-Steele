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
}

const tree = new BinarySearchTree()
console.log(tree.insert(1))
console.log(tree.insert(2))
console.log(tree.insert(-3))
console.log(tree.insert(-2))
console.log(tree.insert(5))
console.log(tree.insert(1))
console.log(tree.find(-30))

