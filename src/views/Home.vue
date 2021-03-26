<template>

  <div class="home">
    <div class="field" @click="moveIcon">
          <MoveIcon ref="icon1" />
    </div>
  </div>
</template>

<script>
import MoveIcon from '@/components/MoveIcon'

export default {
  name: 'Home',
  components: {
    MoveIcon
  },
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    draw() {
      console.log(this.drawer)
      this.drawer = !this.drawer
      console.log(this.drawer)
    },
    moveIcon(e) {
      this.$refs.icon1.moveTo(e.offsetX, e.offsetY)
    }
  }
}
</script>

<style scoped>
.field {
  position: relative;
  width: 100%;
  height: 550px;
  border: 1px solid #aaa;
  background-color: #f5f5f5;
  overflow: hidden;
}
.test {
  /* position: ablosute; */
  background: url(../assets/back.jpg) center;
  opacity: 0.5;
}
</style>
