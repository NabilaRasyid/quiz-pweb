<template>
  <div class="gambarDiri">
    <img src="../assets/bela.png" class="img-thumbnail" alt="...">
    <h5> This Is Me </h5>
  </div>

  <div class="data">
    <p> Name: Nabila Al Rasyid </p>
  <p> Religion: Islam </p>
  <p> Gender: Female </p>
  <p> Studies: </p>
  <p> SMAS Cendana-Senior High School (2018-2021) </p>
  <p> UIN Suska Riau-Undergraduated Student (2021-Now) </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
.gambarDiri {
  padding-top: 100px;
  width: 350px;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

h5 {
  text-align: center;
  font-family: "Lucida Bright";
  padding-top: 10px;
  background-color: lightgray;
  padding-bottom: 20px;
}

.data {
  background-color: lightgray;
  font-family: "Lucida Bright";
  padding-bottom: 20px;
}

h4 {
  padding-top: 130px;
  font-family: "Lucida Bright";
  text-align: center;
}

p {
  word-spacing: 2px;
  font-size: 20px;
  padding-top: 10px;
}
</style>