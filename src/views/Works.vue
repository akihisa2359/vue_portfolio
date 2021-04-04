<template>
  <div :style="{height: windowHeight + 'px'}">
    <v-container class="py-15" ref="works" >
      <h1 class= "text-center mt-0 py-15">works</h1>
      
        <!-- work1 -->
      <v-dialog v-model="dialog1" max-width="85vw">
          <v-card>
            <v-toolbar light>
              <v-spacer></v-spacer>
              <v-btn icon dark @click="dialog1 = false">
                <v-icon color="black">mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-row>
              <v-col md="6">
                <div>
                  <v-card-title>My Portfolio</v-card-title>
                  <v-card-text class="grey--text text--darken-3">当サイトです。vue.jsを利用し、ランディングページ風のポートフォリオを作成しました。トップページはコーディングに馴染みのない人でも気軽にHTMLに触れられるようにリアクティブな機能を取り入れました。</v-card-text>
                  <v-divider class="mx-4"></v-divider>
                  <v-card-title>使用言語</v-card-title>
                  <v-card-text class="grey--text text--darken-3">Vue.js, Vuetify, HTML/CSS, Docker</v-card-text>
                </div>
              </v-col>
              <v-col md="6">
                <v-img src="../assets/this_site.png" height="300" class="mt-md-8 mb-5" contain> </v-img>
              </v-col>
            </v-row>
          </v-card>
      </v-dialog>

      <!-- work_progress -->
      <v-dialog v-model="dialog_progress" max-width="85vw" >
          <v-card>
            <v-toolbar light>
              <v-spacer></v-spacer>
              <v-btn icon dark @click="dialog_progress = false">
                <v-icon color="black">mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-row>
              <v-col cols="12" md="6">
                <div>
                  <v-card-title>On Progress...</v-card-title>
                  <v-card-text class="grey--text text--darken-3">製作中です。</v-card-text>
                  <v-divider class="mx-4"></v-divider>
                  <v-card-title>使用言語</v-card-title>
                  <v-card-text class="grey--text text--darken-3">...</v-card-text>
                </div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" md="4">
                <div class="grey lighten-3 ma-5" style="height:300px">
                </div>
              </v-col>
            </v-row>
          </v-card>
      </v-dialog>
      <v-row justify="center" class="mb-15">
        <!-- work1 -->
        <!-- 全条件でcolsを12にし、sm以上の場合に3にする（＝xsのみ12する） py-sm-10 はsm以上の場合のみ適用-->
        <v-col cols="10" sm="3">
          <v-lazy
            :options="{
              threshold: .7
            }"
            min-height="200"
            transition="fade-transitio1n"
          >
            <div>
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                >
                  <v-img src="../assets/this_site.png" height="100%" @click.stop="dialog1 = true" contain />
                </v-card>
              </v-hover>
              <p class="text-center">This site</p>
            </div>
          </v-lazy>
        </v-col>

        <!-- work2 -->
        <!-- spの場合縦並びのため、sp時のみマージン有 -->
        <v-col cols="10" sm="3" class="mt-5 mt-sm-0">
          <v-lazy
            :options="{
            threshold: .7
            }"
            min-height="200"
            transition="fade-transition"
          >   
            <div>     
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                >
                  <v-row justify="center" :style="{height: $vuetify.breakpoint.smAndDown ? '180px' : '250px'}" align-content="center" @click.stop="dialog_progress = true">
                    <v-col cols="12">
                        <p class="text-center">on progress...</p>
                    </v-col>
                  </v-row>
                </v-card>
              </v-hover>
              <p class="text-center mt-5">Work</p>
            </div>
          </v-lazy>
        </v-col>

        <!-- work3 -->
        <v-col cols="10" sm="3" class="mt-5 mt-sm-0">
          <v-lazy
            :options="{
            threshold: .7
            }"
            min-height="200"
            transition="fade-transition"
          >   
            <div>     
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                >
                  <v-row justify="center" :style="{height: $vuetify.breakpoint.smAndDown ? '180px' : '250px'}" align-content="center" @click.stop="dialog_progress = true">
                    <v-col cols="12">
                        <p class="text-center">on progress...</p>
                    </v-col>
                  </v-row>
                </v-card>
              </v-hover>
              <p class="text-center mt-5">Work</p>
            </div>
          </v-lazy>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            dialog1: false,
            dialog_progress: false,
            windowHeight: 600,
        }
    },
    methods: {

    },
    mounted() {
      var dom = this.$refs.works
      var rect = dom.getBoundingClientRect()
      this.windowHeight = window.innerHeight > rect.height ? window.innerHeight : rect.height + 50
    }
}
</script>
