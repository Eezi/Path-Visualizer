<template>

  <div id="app">
    <Nav />
    <Tools />
    <PathVisualizer @animateNode="handleClick"  />
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
  methods: {
    handleClick() {
      console.loH('tomiko?')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;

}
</style>
