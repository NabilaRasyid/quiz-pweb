<template>
  <div class="porto">
  <h4> Portofolio </h4>
    <img src="../assets/porto.png" class="rounded mx-auto d-block" alt="...">
  <div class="link">
  <a href="https://tirastimes.com/pucuk-kata-puisi-nabila-al-rasyid-menyerah/2021/01/31/"> Check This Page </a>
  </div>

  <p> I'm a good empath. Thinking too much make my soul always feeling tired. So, i make a bunch of words for distraction this negative feeling. One of my hobbies are make some poems. This is my first publication poem. My hobby of make some poems rise from this. </p>
  </div>

  <div class="achievements">
    <h5> Achievements </h5>
    <div class="gambarPenghargaan">
    <img src="../assets/penghargaan.jpg" class="img-thumbnail" alt="...">
    </div>
    <p> Wise man said experience is the best way for learning. Those word influence my mindset since school time. My goal from school was do many things. It ended up my school memories. </p>
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
.porto {
  background-color: lightgray;
  padding-bottom: 30px;
}

h4 {
  padding-top: 110px;
  padding-bottom: 10px;
  font-family: "Lucida Bright";
  text-align: center;
}

.link {
  text-align: center;
  padding-top: 20px;
  font-weight: bold;
}

p {
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: justify;
}

.achievements {
  background-color: lightgray;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.gambarPenghargaan {
  width: 350px;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
</style>