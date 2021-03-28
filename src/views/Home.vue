<template>
    <v-container class="home" :style="{height: windowHeight+'px'}">
      <transition name="code-show" v-on:after-enter="endCodeShow">
        <p v-if="type_completed" class="absolute back-code">
            <pre><span class="bl">&lt;h1&gt;</span><input size="7" v-model="title" :style="input_style_obj"><span class="bl">&lt;/h1&gt;</span></pre>
            <pre><span class="bl">&lt;v-row justify="center" class="btn_list"&gt;</span></pre>
            <pre>     <span class="bl">&lt;v-col v-for="(btn, i) in btn_list" :key="i"</span></pre>
            <pre>           <span class="bl">class="text-center" clos="9" md="3"</span></pre>
            <pre>     &gt;</pre>
            <pre>           &lt;<span class="bl">v-btn</span> <span class="bl2">block outlined class="ma-2"</span></pre>
            <pre>               <span class="bl2">:color="btn.color"</span></pre>
            <pre>           &gt;</pre>
            <pre>               {{ <span class="bl2">btn.text</span> }}</pre>
            <pre>           &lt;<span class="bl">v-btn</span>&gt;</pre>
            <pre>     &lt;/<span class="bl">v-col</span>&gt;</pre>
            <pre>&lt;/<span class="bl">v-row</span>&gt;</pre>
            <pre><br>&lt;<span class="bl">script</span>&gt;</pre>
            <pre>data() {</pre>
            <pre> return {</pre>
            <pre>  btn_list: [</pre>
            <pre class="text-caption">  {text: <input size="12" v-model="btn_list[0].text" :style="input_style_obj"> color: 'indigo', scrollTo: <v-select class="d-inline-flex" v-model="btn_list[0].scrollTo" :items="toList" style="width:70px" label="Where" dense></v-select>},</pre>
            <pre class="text-caption">  {text: <input size="12" v-model="btn_list[1].text" :style="input_style_obj"> color: 'indigo', scrollTo: <v-select class="d-inline-flex" v-model="btn_list[1].scrollTo" :items="toList" style="width:70px" label="Where" dense></v-select>},</pre>
            <pre class="text-caption">  {text: <input size="12" v-model="btn_list[2].text" :style="input_style_obj"> color: 'indigo', scrollTo: <v-select class="d-inline-flex" v-model="btn_list[2].scrollTo" :items="toList" style="width:70px" label="Where" dense></v-select>},</pre>
            <pre class="text-caption">  {text: <input size="12" v-model="btn_list[3].text" :style="input_style_obj"> color: 'indigo', scrollTo: <v-select class="d-inline-flex" v-model="btn_list[3].scrollTo" :items="toList" style="width:70px" label="Where" dense></v-select>},</pre>
        </p>
      </transition>

      <vue-typed-js v-if="!type_completed"
          :strings="typed_strings"
          :type-speed="0" :contentType="'null'" :fadeOutDelay="0" :fadeOut="true" :showCursor="false" @onStringTyped="typeComplete()">
          <pre class="typing"></pre>
      </vue-typed-js>

      <v-row justify="center" class="my-16">
          <transition name="slide-fade">
              <h1 v-show="type_completed" class="text-h2 primary--text font-weight-bold">{{title}}</h1>
          </transition>
      </v-row>

      <v-row justify="center" class="btn_list">
          <v-col block v-for="(btn, i) in btn_list" :key="i" class="text-center" cols="9" md="3">
        <transition name="slide-fade">
            <v-btn v-show="type_completed" block v-scroll-to="{ element: btn.scrollTo, duration: 2000 }"
              class="ma-2"
              outlined
              :color="btn.color"
            >
              {{ btn.text }}
            </v-btn>
        </transition>
          </v-col>
      </v-row>
    <!-- <div class="field" @click="moveIcon">
          <MoveIcon ref="icon1" />
    </div> -->
    </v-container>
</template>

<script>
// import MoveIcon from '@/components/MoveIcon'

var typed_str = 
`
<h1>Hello : )</h1>
<v-row justify="center" class="btn_list">
     <v-col v-for="(btn, i) in btn_list" :key="i"
           class="text-center" clos="9" md="3"
     >
           <v-btn block outlined class="ma-2"
               :color="btn.color"
           >
               {{ btn.text }}
           <v-btn>
     </v-col>
</v-row>

<script>
data() {
  return {
     btn_list: [
    {text: 'VIEW MY HOME' color: 'indigo', scrollTo: '#home'},
    {text: 'VIEW MY ABOUTME' color: 'indigo', scrollTo: '#about'},
    {text: 'VIEW MY WORKS' color: 'indigo', scrollTo: '#works'},
    {text: 'VIEW MY HISTORY' color: 'indigo', scrollTo: '#history'},
`

export default {
  name: 'Home',
  components: {
    // MoveIcon
  },
  data() {
    return {
      windowHeight: 600,
      title: 'Hello : )',
      text1: "VIEW MY HOME",
      toList: ['#home', '#about', '#works', '#history'],
      type_completed: false,
      input_style_obj: {
          transition: '1s',
          border: 0,
          borderColor: 'black',
          // opacity: 0.3
      },
      typed_strings: [typed_str, ''],
      btn_list: [
        {text: 'VIEW MY HOME', color: 'indigo', scrollTo: '#home'},
        {text: 'VIEW MY ABOUTME', color: 'indigo', scrollTo: '#about'},
        {text: 'VIEW MY WORKS', color: 'indigo', scrollTo: '#works'},
        {text: 'VIEW MY HISTORY', color: 'indigo', scrollTo: '#history'},
      ]
    }
  },

  methods: {
    moveIcon(e) {
      this.$refs.icon1.moveTo(e.offsetX, e.offsetY)
    },
    typeComplete() {
      this.type_completed = true
    },
    endCodeShow() {
        console.log(this.input_style_obj.border)
        this.input_style_obj.border = '4px solid #6666ff'
    },
  },

  mounted() {
    this.windowHeight = window.innerHeight
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

.back-code {
  position: relative;
  opacity: 0.4;
}

/* .input {
    transition: all 1s ease;
    border: 5px solid blue;
} */

.home {
  position: relative;
}

.absolute {
  position: absolute;
}

.btn_list {
  position: absolute;
  bottom: 70px;
  width: 100%
  /* left: 50%;
	transform : translate(-50%, -50%); */
}

pre {
  font-size: 13px;
}

.bl {
    color: blue
}
.bl2 {
  color: rgb(60, 166, 202)
}

.slide-fade-enter-active {
  transition: all 3s ease;
}

.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(30px);
  opacity: 0;
}
</style>
