<template>
  <div 
  v-bind:id="['node', this.row, this.col]"
  @click="wallOff"
  @mousedown="mouseDown"
  @mouseenter="mouseEnter"
  @mouseup="mouseUp"
  class="node" 
  :class="[setStartingNode, wall]">
<unicon v-if="this.isStart" name="arrow-circle-right"></unicon>
<unicon v-if="this.isFinish" name="crosshair"></unicon>
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
    
  }
  
},
props: {
  col: Number,
  colNumber: Number,
  row: Number,
  isWall: Boolean,
  isFinish: Boolean,
  isStart: Boolean,
  isVisited: Boolean,
  mousePressed: Boolean,
  handleMouseDown: Function,
  handleMouseEnter: Function,
  handleMouseup: Function,
  handleWallOff: Function
  
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

wallOff() {
  this.handleWallOff(this.row, this.col)
},

mouseDown(){
  this.handleMouseDown(this.row, this.col);
  //this.isWall = true;
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

.unicon svg{
  height: 31px;
  width: 31px;
}
.is-wall {
  animation-name: wallAnimation;
  animation-duration: .3s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
  
}
@keyframes wallAnimation {

  30% {
 transform: scale(.4); 
     border-radius: 50%;
  }
  
   50% {
    transform: scale(.8); 
     border-radius: 25%;
   }
   
   100% {
     transform: scale(1);
    background: #2c3e50;
    outline: 1px solid #2c3e50;
   }

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
.node-visited {
   animation-name: visitedAnimation;
  animation-duration: .5s;
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