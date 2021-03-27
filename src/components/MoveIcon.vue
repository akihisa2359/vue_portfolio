<template>
    <!-- <div id='app'> -->
    <!-- <v-app app dark> -->
    <v-container>
        <transition name="code-show" v-on:after-enter="endCodeShow">
        <p v-if="type_completed" class="absolute back-code">
            <pre><span class="bl">&lt;h1&gt;</span><input size="4" v-model="title" :style="input_style_obj"><span class="bl">&lt;/h1&gt;</span></pre>
            <pre><span class="bl">&lt;div class=</span>"move_icon"</pre>
            <pre>    <span class="bl">:style="</span>{</pre>
            <pre>        transform: 'translate(<input type='text' size='3' placeholder='100' v-model="x" :style="input_style_obj">px, <input type='text' size="3" placeholder="250" v-model="y"  :style="input_style_obj">px)'</pre>
            <pre>        transition: 'transform <input type='text' size='3' placeholder='500' v-model="dur"  :style="input_style_obj">ms'</pre>
            <pre>   }"</pre>
            
        </p>
        </transition>

        <vue-typed-js v-if="!type_completed"
            :strings="[
                `
                <h1>Hello</h1>
                <div class=&quot;move_icon&quot;
                    :style=&quot;{
                        transform: 'translate(100px,100px)'
                        transition: 'transform 500ms'
                    }&quot;
                `.replace(/\n {12}/g, '\n'),
                ''
            ]"
            :type-speed="0" :contentType="'null'" :fadeOutDelay="0" :fadeOut="true" @onStringTyped="typeComplete()">
            <pre class="typing"></pre>
        </vue-typed-js>

        <v-row justify="center" class="my-16">
            <transition name="slide-fade">
                <h1 v-show="type_completed" class="text-h2 font-weight-bold">{{title}}</h1>
            </transition>
        </v-row>

        <div class="move_icon absolute"
            :style="{
                transform: `translate(${x}px, ${y}px)`,
                transition: `transform ${dur}ms`
            }"
        />

        <v-btn @click="star_num++">add</v-btn>
        <v-btn @click="flg=!flg">switch</v-btn>
        <div class="star" v-show="flg" v-for="n of star_num" :key="n">
            ★
        </div>
        <!-- <transition appear v-for="n of star_num" :key="n" name="star-kirakira" class="absolute">
            <div class="star">
                ★
            </div>
        </transition> -->
        <!-- <v-btn @click="star_num++; flg=!flg">add</v-btn> -->
        <!-- <v-btn @click="tmpdo">clsadd</v-btn>
        <transition name="star-kirakira">
            
                <div class="star">★</div>
            
        </transition> -->

    <!-- </div> -->
    </v-container>
    <!-- </v-app> -->
</template>


<script>

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// const wait2 = () => new Promise (resolve => {
//     while()
// })

export default {
    data () {
        return {
            title: 'Hi there : )',
            x: 100,
            y: 10,
            dur: 500,
            typing: true,
            type_completed: false,
            flg: false,
            tmpobj: {
                star:true
            },
            input_style_obj: {
                transition: '1s',
                border: 0,
                borderColor: '',
                // opacity: 0.3
            },
            star_num: 1
        }
    },
    methods: {
        tmpdo() {
            this.tmpobj.star = !this.tmpobj.star
        },
        async moveTo(x, y) {
            const lastY = this.y
            this.x = x
            // this.dur = 500
            console.log(x)
            await wait(this.dur)

            this.y = y
            this.dur = 200
            console.log(y)
            await wait(this.dur)

            this.y = lastY
            this.dur = 200

            await wait(this.dur)
        },
        typeComplete() {
            this.type_completed = true

            // this.input_style_obj.opacity = 0.3
        },
        endCodeShow() {
            console.log(this.input_style_obj.border)
            this.input_style_obj.border = '4px solid #6666ff'
            // this.input_style_obj.opacity = 1
            // this.input_style_obj.borderColor = 'rgba(170, 50, 220, .9)'
        },
    },
    mounted() {
        console.log('mounted')
        console.log(`
        <div class=&quot;move_icon&quot;
        :styles={</pre>`.replace(/^ {4}/, ''))
    //     new Typed("#typed", {
    //     stringsElement: "#type",
    //     startDelay: 2000,
    //     backSpeed: 15,
    //     typeSpeed: 1,
    //     loop: false,
    //     showCursor: false,
    //     contentType: "html",
    // });
        // let themejs = document.createElement('script')
        // themejs.setAttribute('src', 'vue-typed-js/dist/vue-typed-js.browser.js')
        // document.head.appendChild(themejs)
  },
}
</script>

<style scoped>
.move_icon {
    width: 80px;
    height: 80px;
    margin-left: -40px;
    box-sizing: border-box;
    background: url(../assets/logo.png) no-repeat center;
    background-size: 100%;
    transform-origin: 50% 100%;
    transition: transform 500ms;
}
.bl {
    color: blue;
}
.absolute {
    position: absolute;
}
.indent {
    text-indent: 1em;
}

.back-code {
    opacity: 0.3;
}

input {
    border: 0.5px solid blue;
}

li {
    list-style: none;
    line-height: 1;
}

.slide-fade-enter-active {
  transition: all 2s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(30px);
  opacity: 0;
}

.code-show-enter-active {
    transition: opacity 3s;
}
.code-show-enter-active {
    opacity: 0.9
}
.code-show-enter-to {
    opacity: 0.3
}

.star-kirakira-enter-active {
  animation: kirakira 3s linear infinite;
  /* animation-iteration-count: infinite;
  animation-direction: alternate; */
}
/* .star-kirakira-leave-active {
  transition: all .8s ease;
}
.star-kirakira-enter, .star-kirakira-leave-to{
  animation-iteration-count: infinite;    
  transform:translateY(0) rotateY(3600deg) scale(2, 2);
  opacity: 0;
} */

.star {
    /* animation: kirakira 8s linear; */
    color: #b3b627;
    display: inline-block;
    height: 1em;
    line-height: 1em;
    font-size: 40px;
    /* position: fixed; */
    /* top: -1em; */
    z-index: 1000;
    /* animation-iteration-count: infinite;
    animation-direction: alternate; */
    transition: all 3s ease;
    transform:translateY(10px) rotateY(3600deg) scale(2, 2);
}

.anim {
    --max: 4
}

@keyframes kirakira {
    0% {
        transform:translateY(0) rotateY(0);
    }
    100% {
        transform:translateY(0) rotateY(3600deg) scale(2, var(--max));
    }
}

</style>