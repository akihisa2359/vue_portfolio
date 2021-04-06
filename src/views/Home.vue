<template>
    <v-container class="home" ref="home"
      :style="{
        height: this.windowHeight+'px',
        width: this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'
      }"
      mt-2 mt-md-10
    >
      <transition name="code-show" v-on:after-enter="endCodeShow">
        <p v-if="type_completed" class="absolute back-code">
            <pre>&lt;<span class="bl">h1</span> <span class="bl2">style</span>="<span class="bl2">color</span>: <input size="4" v-model="title_color" :style="input_style_obj">"&gt;<input size="7" v-model="title" :style="input_style_obj">&lt;<span class="bl">/h1</span>&gt;</pre>
            <pre>&lt;<span class="bl">v-row</span> <span class="bl2">justify</span>=<span class="or">"center"</span> <span class="bl2">class</span>=<span class="or">"btn_list"</span>&gt;</pre>
            <pre>    &lt;<span class="bl">v-col</span> <span class="bl2">v-for</span>="(<span class="bl">btn, i</span>) in <span class="bl2">btn_list</span>"</pre>
            <pre>         <span class="bl2">class</span>=<span class="or">"text-center"</span> <span class="bl2">clos</span>=<span class="or">"12"</span> <span class="bl2">md</span>=<span class="or">"6"</span></pre>
            <pre>         <span class="bl2">style</span>="<span class="bl2">margin</span>: <input v-model="margin_input" type="number" pattern="\d*" min="0" max="12" :style="input_style_obj">"</pre>
            <pre>    &gt;</pre>
            <pre>         &lt;<span class="bl">v-btn</span> <span class="bl2">block outlined class</span>=<span class="or">"ma-2"</span></pre>
            <pre>             <span class="bl2">:color</span>=<span class="or">"btn.color"</span></pre>
            <pre>         &gt;</pre>
            <pre>             {{ <span class="bl2">btn.text</span> }}</pre>
            <pre>         &lt;<span class="bl">v-btn</span>&gt;</pre>
            <pre>    &lt;/<span class="bl">v-col</span>&gt;</pre>
            <pre>&lt;/<span class="bl">v-row</span>&gt;</pre>
            <pre><br>&lt;<span class="bl">script</span>&gt;</pre>
            <pre>data() {</pre>
            <pre>   return {</pre>
            <pre class="mb-2">       btn_list: [</pre>
            <pre :style="btn_style_obj">{text:'<input size="10" v-model="btn_list[0].text" :style="[input_style_obj,btn_style_obj]">' color:'blue', scrollTo:<v-select class="d-inline-flex" height="34px" hide-details="true" v-model="btn_list[0].scrollTo" :items="toList" :style="btn_style_obj" style="width:70px" dense></v-select>},</pre>
            <pre :style="btn_style_obj">{text:'<input size="10" v-model="btn_list[1].text" :style="[input_style_obj,btn_style_obj]">' color:'blue', scrollTo:<v-select class="d-inline-flex" height="34px" hide-details="true" v-model="btn_list[1].scrollTo" :items="toList" :style="btn_style_obj" style="width:70px" dense></v-select>},</pre>
            <pre :style="btn_style_obj">{text:'<input size="10" v-model="btn_list[2].text" :style="[input_style_obj,btn_style_obj]">' color:'blue', scrollTo:<v-select class="d-inline-flex" height="34px" hide-details="true" v-model="btn_list[2].scrollTo" :items="toList" :style="btn_style_obj" style="width:70px" dense></v-select>},</pre>
            <pre :style="btn_style_obj">{text:'<input size="10" v-model="btn_list[3].text" :style="[input_style_obj,btn_style_obj]">' color:'blue', scrollTo:<v-select class="d-inline-flex" height="34px" hide-details="true" v-model="btn_list[3].scrollTo" :items="toList" :style="btn_style_obj" style="width:70px" dense></v-select>},</pre>
            <pre class="mt-3">       ]</pre>
            <pre>   }</pre>
            <pre>}</pre>
            <pre>&lt;<span class="bl">/script</span>&gt;</pre>
            <pre><br></pre>
            <pre></pre>
        </p>
      </transition>

      <vue-typed-js v-if="!type_completed"
          :strings="typed_strings"
          :type-speed="0" :contentType="'null'" :fadeOutDelay="0" :fadeOut="true" :showCursor="false" @onStringTyped="typeComplete()">
          <pre class="typing"></pre>
      </vue-typed-js>

      <v-row justify="center" class="mt-15 mb-5 mb-md-10">
          <transition name="slide-fade">
              <h1 v-show="type_completed" class="text-h2 font-weight-bold" :style="{color: title_color}">{{title}}</h1>
          </transition>
      </v-row>

      <transition name="slide-fade">
        <v-row v-show="type_completed" justify="center" class="btn_list pt-md-15" :style="$vuetify.breakpoint.smAndDown ? 'width:50%' : 'width:100%'">
            <v-col block v-for="(btn, i) in btn_list" :key="i" class="text-center px-0 px-sm-3" :class="'ma-' + margin_input" cols="12" md="6">
                  <v-btn block v-scroll-to="{ element: '#' + btn.scrollTo, duration: 2000 }"
                    class="my-2 mx-0"
                    outlined
                    :color="btn.color"
                  >
                    {{ btn.text }}
                  </v-btn>
            </v-col>
            <v-col cols="12" md="8" class="mt-6 mt-md-15">
              <v-btn rounded color="indigo" dark block @click="resetCss">reset css</v-btn>
            </v-col>
        </v-row>
      </transition>
    </v-container>
</template>

<script>
var typed_str = 
`
<h1 style="color: navy ">Hello : )  </h1>
<v-row justify="center" class="btn_list">
    <v-col v-for="(btn, i) in btn_list"
         class="text-center" clos="12" md="6"
         style="margin: 0 "
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

{text:'VIEW MY HO' color:'indigo', scrollTo: 'home'},

{text:'VIEW MY AB' color:'indigo', scrollTo: 'about'},

{text:'VIEW MY WO' color:'indigo', scrollTo: 'works'},

{text:'VIEW MY HI' color:'indigo', scrollTo: 'history'},

       ]
   }
}
<script> 
`
// typed_str = 'a'
var default_title = 'Hello : )'
var default_title_color = 'navy'
var default_margin_input = '0'
var default_btn_texts = ['VIEW MY HOME', 'VIEW MY ABOUTME', 'VIEW MY WORKS', 'VIEW MY HISTORY']
var default_scroll_tos = ['home', 'about', 'works', 'history']

// typed_str = 'a'
export default {
  name: 'Home',
  data() {
    return {
      windowHeight: 600,
      title: default_title,
      title_color: default_title_color,
      margin_input: default_margin_input,
      toList: ['home', 'about', 'works', 'history'],
      type_completed: false,
      input_style_obj: {
        transition: '2s',
        border: 0,
        opacity: 0.8
      },
      btn_style_obj: {
        transition: '2s',
        fontSize: '13px',
      },
      typed_strings: [typed_str, ''],
      btn_list: [
        {text: default_btn_texts[0], color: 'indigo', scrollTo: default_scroll_tos[0]},
        {text: default_btn_texts[1], color: 'indigo', scrollTo: default_scroll_tos[1]},
        {text: default_btn_texts[2], color: 'indigo', scrollTo: default_scroll_tos[2]},
        {text: default_btn_texts[3], color: 'indigo', scrollTo: default_scroll_tos[3]},
      ],
    }
  },

  methods: {
    typeComplete() {
      this.type_completed = true
    },
    endCodeShow() {
        this.input_style_obj.border = '3px solid #6666ff'
        this.btn_style_obj.fontSize = '10px' // スマホだと横幅をオーバーしてしまうため
    },
    resetCss() {
      this.title = default_title
      this.title_color = default_title_color
      this.margin_input = default_margin_input
      this.btn_list = [
        {text: default_btn_texts[0], color: 'indigo', scrollTo: default_scroll_tos[0]},
        {text: default_btn_texts[1], color: 'indigo', scrollTo: default_scroll_tos[1]},
        {text: default_btn_texts[2], color: 'indigo', scrollTo: default_scroll_tos[2]},
        {text: default_btn_texts[3], color: 'indigo', scrollTo: default_scroll_tos[3]},
      ]
    }
  },

  mounted() {
    var dom = this.$refs.home
    var rect = dom.getBoundingClientRect()
    this.windowHeight = window.innerHeight > rect.height ? window.innerHeight : rect.height + 50
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
  transition: 2s;
  position: relative;
  animation: back_opacity 2s ease forwards;
}
@keyframes back_opacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
}

.btn_setting {
  transition: 2s;
  /* transform: scale(0.6); */
  animation: small 2s ease forwards;
}
@keyframes small {
  0% {
    font-size: 13px;
  }
  100% {
    font-size: px;
  }
}

.home {
  position: relative;
}

.inner {
  position: relative;
}

.absolute {
  position: absolute;
}

.btn_list {
  left: 0;
  right: 0;
  margin: auto;
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
.or {
  color: rgb(255, 106, 0)
}

.slide-fade-enter-active {
  transition: all 3s ease;
}

.slide-fade-enter {
  transform: translateY(30px);
  opacity: 0;
}
</style>
