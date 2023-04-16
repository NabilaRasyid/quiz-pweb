<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
    <h3 class = "title-navbar"> Get to Know Me More </h3>
    <ul class = "nav-link">
      <li><router-link to="/halaman" style="color: black"> Home </router-link></li>
      <li><router-link to="/info" style="color: black"> Profile </router-link></li>
      <li><router-link to="/portofolio" style="color: black"> Track </router-link></li>
    </ul>
  </nav>
  <hr>
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
h3 {
  font-family: "Lucida Bright";
  padding-left: 30px;
}

li {
  font-family: "Lucida Bright";
  list-style: none;
  float: left;
  padding: 23px 30px;
  font-size: 20px;
}

</style>