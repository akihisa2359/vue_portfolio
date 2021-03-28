<template>
  <div class="about">
    <v-parallax dark :height="windowHeight" src="../assets/autumn-studio-PaM7SD5wM6g-unsplash.jpg">

    <div class="text-center"> 
      <h1>about me</h1>
      <p> 大阪出身</p>
      <p>あいうえお</p>
    </div>
    <!-- <div style="height: 500px"></div> -->
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