<template>
  <div class="container" >
   <div v-for="row in this.grid" :key="row.col">
      <Node v-for="col in row" :key="col.col" />
      

   </div>
   
   
  </div>
</template>

<script>
import Node from './Node/Node.vue'
export default {
  data() {
    return {
      grid: {},
      start_node_row: 10,
      start_node_column: 15,
      finish_node_row: 15,
      finish_node_column: 25

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
  const gridi = this.getInitialGrid();
 this.grid = gridi;
   console.log('wud?', this.grid)
 },
 
  components: {
    Node
  }

}
</script>

<style scoped>
.container {
   height: 73vh;
   
    /*outline: 1px solid rgb(4, 81, 112);*/
}
</style>