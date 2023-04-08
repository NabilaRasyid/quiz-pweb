<template>
  <router-link to="/halaman" style="color: black;"> Profile </router-link>
  <router-link to="/info" style="color: black;"> Experience </router-link>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir;
  webkit-font-smoothing: antialiased;
  moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: lightgray;
  font-size: 20px;
  padding-top: 20px;
  padding-left: 20px;
}
</style>