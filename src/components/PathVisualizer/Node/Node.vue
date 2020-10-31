<template>
  <div class="node" :style="this.visited ? activeAnimate : null">

  </div>
</template>

<script>
export default {
data() {
return {
  activeAnimate: {
    animation: 'colorEffect alternate',
    animationDirection: 'alternate',
    animationTimingFunction: 'ease-out',
    animationDuration: '2s',
    animationIterationCount: 1,
    animationFillMode: 'forwards'
    },
  
    startNode: this.isStart,
    finishNode: this.isFinish,
    visited: this.isVisited
  }
  
},
props: {
  col: Number,
  row: Number,
  isFinish: Boolean,
  isStart: Boolean,
  isVisited: Boolean
  
},
methods: {
  setStartingNode() {

  },
  setNodeVisited() {
    setTimeout(() => {
      this.visited = true;
      console.log('visited', this.visited)
    }, 3000)
  }
},
mounted() {
  //this.setNodeVisited();
  

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

.node:active {
  background: green;
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