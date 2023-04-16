<template>
  <div class="informasi">
    <div class="gambarDiri">
      <img src="src/assets/nabila.png" class="img-thumbnail" alt="...">
      <p class="info"> This Is Me </p>
    </div>

    <p> Name: Nabila Al Rasyid </p>
  <p> Religion: Islam </p>
  <p> Gender: Female </p>
  <p> Studies: </p>
  <p> SMAS Cendana-Senior High School (2018-2021) </p>
  <p> UIN Suska Riau-Undergraduated Student (2021-Now) </p>
  <p> Volunteers: </p>
  <p> Staff of Secretariat Department HIMATIF - April 2022 - December 2022</p>
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
.informasi {
  font-family: "Lucida Bright";
  padding-top: 100px;
  background-color: lightgray;
  padding-left: 30px;
}
p {
  word-spacing: 3px;
  font-size: 20px;
  padding-top: 10px;
}

.gambarDiri {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
}

.info {
  font-family: "Lucida Bright";
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
}
</style>