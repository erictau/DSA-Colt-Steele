class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(edge => edge !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(edge => edge !== vertex1)
    }

    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            this.adjacencyList[vertex].forEach(edge => {
                this.removeEdge(vertex, edge) 
            })
            delete this.adjacencyList[vertex]
        }
    }

    dfs_recursive(vertex) {
        const results = []
        const visited = {}
        const adjList = this.adjacencyList

        recursion(vertex)
        return results

        // Recursive Helper
        function recursion(vertex) {
            // Base Case
            if (!vertex) return
            
            // Action
            results.push(vertex)
            visited[vertex] = true

            // Recursive Case
            adjList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) recursion(neighbor)
            })
        }
    }

    dfs_iterative(vertex) {
        if (!vertex) return []
        const results = []
        const visited = {}
        const stack = [vertex]
        let currVertex

        while (stack.length) {
            currVertex = stack.pop()
            if (!visited[currVertex]) {
                results.push(currVertex)
                visited[currVertex] = true
                this.adjacencyList[currVertex].forEach(neighbor => stack.push(neighbor))
            }
        }
        return results
    }
    
    bfs(vertex) {
        if (!vertex) return []
        const results = []
        const visited = {}
        const queue = [vertex]
        let currVertex
        visited[vertex] = true

        while (queue.length) {
            currVertex = queue.shift()
            results.push(currVertex)
            this.adjacencyList[currVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return results
    }
}

let graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")


console.log(graph.bfs("A"))