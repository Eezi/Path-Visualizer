<template>
    <div class="container">
        <div class="marks">

            <div class="wall"></div>
            <p>Wall Node</p>

            <div class="unvisited"></div>
            <p>Unvisited Node</p>

            <unicon name="arrow-circle-right">Start Node</unicon>
            <p>Start Node</p>

            <unicon name="crosshair"></unicon>
            <p>Target Node</p>
            
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.container{
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    background-color: #fff;
    height: 200px;
    color: black;
    
    
}
.marks {
    padding: 150px 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    

}
p{
    display: inline;
    padding: 5px 20px;
    margin: 0;
}
.wall{
    background-color: #2c3e50;
    height: 30px;
    width: 30px;
  
    top: 150px;
    
}
.unvisited{
  
    background-color: #fff;
    outline: 1px solid rgb(115, 201, 235);
    height: 30px;
    width: 30px;
}
</style>