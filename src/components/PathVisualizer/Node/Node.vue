<template>
  <div 
  class="node" :style="this.startNode ? { 'background': 'green' } : this.finishNode ? { 'background': 'red' } : null">

  </div>
</template>

<script>
export default {
data() {
  return {
    startNode: this.isStart,
    finishNode: this.isFinish
  }
  
},
props: {
  col: Number,
  row: Number,
  isFinish: Boolean,
  isStart: Boolean
  
},
methods: {
  setStartingNode() {

  }
},
mounted() {
  console.log('props', this.startNode)

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

.node {
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