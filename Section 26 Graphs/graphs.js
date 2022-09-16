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
}

let graph = new Graph()
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)

graph.addEdge(1,2)
graph.addEdge(2,3)
graph.addEdge(3,4)
graph.addEdge(1,3)
graph.addEdge(1,4)
