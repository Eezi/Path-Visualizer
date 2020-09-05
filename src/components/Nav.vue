<template>
  <header>
      <p>Path Visualizer</p>

      <nav>
          <ul>
              <li class="visualize">Visualize!</li>
              <li>Dijkstra's Algorithm</li>
              <li>Clear Board</li>
              <li>Speed</li>
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
     display: grid;
     grid-template-columns: repeat(2, auto);
     top: 0;
     left: 0;
     position: absolute;
     width: 100% !important;
     font-size: 1rem;
 }

 p {
     padding: 1em 2em;
     display: block;
     text-transform: uppercase;
     font-weight: bold;
     color: #fff;
     font-size: 1em;
 }

 nav {
     justify-self: right;
 }
 ul {
     list-style: none;
 }
li {
    border-radius: 2%;
    display: inline;
    padding: 1em 2em;
    display: inline-block;
}
.visualize {
    border-radius: 5%;
    padding: 1em;
    background-color: #42b983;
    color: #fff;
    margin-right: 205px;
}
.visualize:hover{
    background-color: #338560;
    color: #fff;
    cursor: pointer;
}
li:hover {
    color: #42b983;
    cursor: pointer;
}

</style>>
 
