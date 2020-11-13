<template>
  <header>
      <p>PATH VISUALIZER</p>

      <nav>
          <ul>
              <p class="visualize">Visualize Dijkstra's Algorithm!</p>
              <!--<li></li>
              <li>Clear Board</li>
              <li>Speed</li>-->
          </ul>
      </nav>    
  </header>
</template>

<script>
export default {
 
}
</script>

<style scoped>
header {
     background-color: #2c3e50;
    display: flex;
     top: 0;
     left: 0;
     position: absolute;
     width: 100% !important;
     font-size: 1rem;
     color: #fff;
 }

 p {
     padding: .5rem 1.5rem;
     display: block;
     
     font-weight: bold;
     color: #fff;
     font-size: 1em;
 }

 
 ul {
     list-style: none;
 }
li {
    border-radius: 2%;
    display: inline;
   
    display: inline-block;
}

/*.visualize:hover{
    background-color: #338560;
    color: #fff;
    cursor: pointer;
}*/


</style>>
 
