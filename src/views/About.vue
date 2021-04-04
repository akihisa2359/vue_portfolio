<template>
  <div class="about">
    <v-parallax dark :height="windowHeight" src="../assets/autumn-studio-PaM7SD5wM6g-unsplash.jpg">

    <div class="text-center"> 
      <h1>about me</h1>
      <p> Birthyear ： 1995</p>
      <p> From ： Osaka</p>
      <p> Living ： Tokyo</p>
      <p> Sport ： Basketball</p>
      <p> Likes ： Games, Manzai
      <p> note ： <a blank href="https://note.com/maki_note_" target="_blank" rel="noopener">https://note.com/maki_note_</a></p>
      <p> GitHub ： <a blank href="https://note.com/maki_note_" target="_blank" rel="noopener">https://github.com/akihisa2359</a></p>
    </div>
    </v-parallax>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowHeight: 600,
    }
  },
  mounted() {
    this.windowHeight = window.innerHeight
  }
}
</script>