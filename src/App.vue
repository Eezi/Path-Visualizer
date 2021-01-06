<template>

  <div id="app">
    <Nav />
    <Tools />
    <PathVisualizer  />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Tools from './components/Tools.vue'
import PathVisualizer from './components/PathVisualizer/PathVisualizer.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Tools,
    PathVisualizer
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;

}
</style>
