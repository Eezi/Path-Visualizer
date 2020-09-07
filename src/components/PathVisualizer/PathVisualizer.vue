<template>
  <div class="container" >
    <Node />
  </div>
</template>

<script>
import Node from './Node/Node.vue'
export default {
  data: () => {
    return {
      grid: [],
      start_node_row: 10,
      start_node_column: 15,
      finish_node_row: 15,
      finish_node_column: 25
    }
  },
  methods: {
    gridInitializer() {
      const grid = [];
      console.log('terve')
      for(let row = 0; row < 20; row++) {
        const currentRow = [];
        for(let column = 0; column < 50; column++){
          
          currentRow.push(row, column);
        }
         grid.push(currentRow);
        
      }
       
      return grid;
    },
    createNode: (col, row) => {
        return {
          col, 
          row,
          isStart: col == start_node_column && row == start_node_row,
          isFinish: col == finish_node_column && row == finish_node_row,
          isWall: false,
          distance: Infinity,
          isVisited: false,
          previousNode: null
        }
    }
  },
  components: {
    Node
  }

}
</script>

<style scoped>
.container {
    height: 74vh;
    outline: 1px solid rgb(115, 201, 235);;
}
</style>