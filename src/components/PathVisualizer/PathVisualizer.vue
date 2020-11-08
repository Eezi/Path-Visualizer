<template>
<div>
<button @click="this.dijkstran">Visualize</button>
  <div class="container" >
   <div v-for="row in this.grid" :key="row.col">
      <Node 
      v-for="col in row" :key="col.col" 
      :col="col"
      :colNumber="col.col"
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
import { dijkstra } from '../../Algorithm/dijkstra'
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
    this.animateDijkstra(visitedNodesInOrder);
   
  },

  animateDijkstra(visitedNodesInOrder) {
    for(let i = 0; i <= visitedNodesInOrder.length; i++) {
      const node = visitedNodesInOrder[1];
      setTimeout(() => {
        node.isVisited = true;
        console.log('visits', node.isVisited)
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-visited';
      }, 10 * i)
    }
    return;
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

  //this.animateNode();

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
}
.container {
   height: 73vh;
   
    /*outline: 1px solid rgb(4, 81, 112);*/
}
</style>