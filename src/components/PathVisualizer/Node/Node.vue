<template>
  <div 
  id="'node'-'this.nodeRow'-'this.nodeCol'"
  class="node" 
  :class="setStartingNode">

  </div>
</template>

<script>
export default {
data() {
return {
    startNode: this.isStart,
    finishNode: this.isFinish,
    visited: false,
    nodeCol: this.col,
    nodeRow: this.row
  }
  
},
props: {
  col: Number,
  colNumber: Number,
  row: Number,
  isFinish: Boolean,
  isStart: Boolean,
  isVisited: Boolean
  
},
watch: {
    isVisited: (newValue, oldValue) => {
   }
},
computed: {
   setStartingNode() {
     return {
       'start-node': this.isStart,
       'finish-node': this.isFinish,
       'node-visited': this.isVisited 
     }
  },
},
methods: {



},

updated() {
  console.log('VISITED', this.isVisited)
  this.visited = this.isVisited;
}

}
</script>

<style>
.node {
    background-color: #fff;
    outline: 1px solid rgb(115, 201, 235);
    display: inline-block;
    height: 30px;
    width: 30px;
}

.start-node {
  background: green;
}

.finish-node {
  background: red;
}


.node-visited {
  animation: colorEffect 1.5s ease-out alternate;
  animation-iteration-count: 1;
  
}
@keyframes colorEffect {
   0% {
     transform: scale(0.3);
     background: black;
     border-radius: 100%;
   } 
   25% {
     background: #35495e;
   }
   50% {
    transform: scale(.8); 
     background: #2c5551;
   }
   75% {
     background: #42b883;
   }
   100% {
     transform: scale(1);
    background: #6ff3b8;
   }

  } 
</style>