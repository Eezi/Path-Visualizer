<template>
  <div id="app">
    <Nav />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #fff;
  height: 100vh;

}
</style>
