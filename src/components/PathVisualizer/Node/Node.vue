<template>
  <div 
  v-bind:id="['node', this.row, this.col]"
  @mousedown="setWall"
  @mouseenter="mouseEnter"
  @mouseup="mouseUp"
  class="node" 
  :class="[setStartingNode, wall]">

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
    nodeRow: this.row,
    isWall: this.mousePressed,
    
  }
  
},
props: {
  col: Number,
  colNumber: Number,
  row: Number,
  isFinish: Boolean,
  isStart: Boolean,
  isVisited: Boolean,
  mousePressed: Boolean,
  handleMouseDown: Function,
  handleMouseEnter: Function,
  handleMouseup: Function
  
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
  wall(){
    return {
      'is-wall': this.isWall
    }
  }
},
methods: {

setWall() {
  this.isWall = true;
  this.handleMouseDown(this.row, this.col);
},

mouseEnter() {
  this.handleMouseEnter(this.row, this.col);
},

mouseUp() {
  this.handleMouseup(this.row, this.row);
}

},

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

.is-wall {
  background: #2c3e50;
}

.node-visited {
   animation-name: visitedAnimation;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
  
}
@keyframes visitedAnimation {
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

.node-shortest-path{
   animation-name: shortestAnimation;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
  
}
@keyframes shortestAnimation {
   0% {
     transform: scale(0.3);
     background: rgb(34, 34, 34);
     border-radius: 100%;
   } 
   25% {
     background: #424026;
   }
   50% {
    transform: scale(.8); 
     background: #474b20;
   }
   75% {
     background: #6f8014;
   }
   100% {
     transform: scale(1);
    background: #fcff66;
   }

  } 
</style>