<template>
<div>
<button @click="this.dijkstran">Visualize</button>
  <div class="container" >
   <div v-for="row in grid" :key="row.col">
      <Node 
      v-for="col in row" :key="col.col" 
      :col="col.col"
      :row="col.row"
      :distance="col.distance"
      :isFinish="col.isFinish"
      :isStart="col.isStart"
      :isWall="col.isWall"
      :previousNode="col.previousNode"

      />
      

   </div>
   
   
  </div> 
</div>
</template>

<script>
import Node from './Node/Node.vue'
import { dijkstra, getNodesInShortestPathOrder } from '../../Algorithm/dijkstra'
export default {
  data() {
    return {
      grid: {},
      start_node_row: 8,
      start_node_column: 6,
      finish_node_row: 8,
      finish_node_column: 40

    }

  },
  methods: {
  getInitialGrid(){
    const gridi = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 47; col++) {
        currentRow.push(this.createNode(col, row));
      }
      gridi.push(currentRow);
    }
   
    
    return gridi;
  },
  dijkstran() {
    const startNode = this.grid[this.start_node_row][this.start_node_column];
    const finishNode = this.grid[this.finish_node_row][this.finish_node_column];
    const visitedNodesInOrder =  dijkstra(this.grid, startNode, finishNode);
    const shortestPathOrder = getNodesInShortestPathOrder(finishNode)
    this.animateDijkstra(visitedNodesInOrder, shortestPathOrder);
   
  },

  animateDijkstra(visitedNodesInOrder, shortestPathOrder) {
    for(let i = 0; i <= visitedNodesInOrder.length; i++) {
      if(i === visitedNodesInOrder.length){
         setTimeout(() => {
          this.animateShortestPath(shortestPathOrder);
        }, 10 * i);
      }
      setTimeout(() => {
          const node = visitedNodesInOrder[i];
          console.log('node', node)
          if(node){
            document.getElementById(`node,${node.row},${node.col}`).className =
            'node node-visited';
          }
          
        }, 10 * i); 
      
      }
     
  },

  animateShortestPath(visitedNodesInOrder) {
    for(let i = 0; i <= visitedNodesInOrder.length; i++){
       setTimeout(() => {
        const node = visitedNodesInOrder[i];
        if(node){
        document.getElementById(`node,${node.row},${node.col}`).className =
          'node node-shortest-path';
        }
      }, 50 * i);
    }

  },

  getNewGridWithWalls(grid, row, col){
      const newGrid = grid.slice();
      const node = newGrid[row][col];

      const newNode = {
        ...node,
        isWall: !this.isWall
      }
      newGrid[row][col] = newNode;
      return newGrid;

  },
  

  createNode(col, row) {
        return {
          col, 
          row,
          isStart: col == this.start_node_column && row == this.start_node_row,
          isFinish: col == this.finish_node_column && row == this.finish_node_row,
          isWall: false,
          distance: Infinity,
          isVisited: false,
          previousNode: null
        }
    }
  },

 mounted() {
  this.grid = this.getInitialGrid();

  

 },
 
  components: {
    Node
  }

}
</script>

<style scoped>
button {
   border-radius: 5%;
    padding: 1em;
    background-color: #42b983;
    color: #fff;
    margin-left: 45%;

}
  

.container {
   height: 73vh;
   margin-left: 1rem;
    /*outline: 1px solid rgb(4, 81, 112);*/
}
</style>