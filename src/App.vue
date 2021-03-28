<template>
  <v-app>
    <v-navigation-drawer 
      app
      v-model="drawer"
    >
      <v-container>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2">
              Navigation lists
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="nav_item in nav_list" :key="nav_item.name" v-scroll-to="{ element: nav_item.scrollTo, duration: scroll_dur }">
            <v-list-item-icon>
              <v-icon>{{ nav_item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ nav_item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-container>
    </v-navigation-drawer>

    <v-app-bar
      app
      light
    >
      <v-app-bar-nav-icon class='hidden-md-and-up' @click="draw"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class='hidden-sm-and-down'>
        <v-btn v-scroll-to="{ element: '#home', duration: scroll_dur }">HOME</v-btn>
        <v-btn text v-scroll-to="{ element: '#about', duration: scroll_dur }">ABOUT</v-btn>
        <v-btn text v-scroll-to="{ element: '#works', duration: scroll_dur }">WORKS</v-btn>
        <v-btn text v-scroll-to="{ element: '#history', duration: scroll_dur }">HISTORY</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    
    <v-main class="main-screen">
      <!-- <v-container> -->
        <!-- <router-view /> -->
        <!-- <div class="field" @click="moveIcon">
          <MoveIcon ref="icon1" />
        </div> -->
        <Home id="home" />
        <About id="about" />
        <Works id="works" />
        <History id="history" />
        <!-- <FreeField /> -->
      <!-- </v-container> -->
    </v-main>

    <v-footer
      color="primary"
      dark
      app
      inset
      absolute
    >
      Vuetify
    </v-footer>
  </v-app>
</template>

<script>
import 'normalize.css'
import Home from './views/Home'
import About from './views/About'
import Works from './views/Works'
import History from './views/History'

// import MoveIcon from './components/MoveIcon'
// import FreeField from './components/FreeField'
export default {
  components: {
    About,
    Home,
    Works,
    History
  //   MoveIcon,
  //   FreeField
  },

  data() {
    return {
      drawer: false,
      items: [
        'a', 'b', 'c', 'd', 'e'
      ],
      nav_list: [
        {name: 'HOME',icon: 'mdi-vuetify', link: '/', scrollTo: '#home'},
        {name: 'ABOUT',icon: 'mdi-cogs', link: '/about', scrollTo: '#about'},
        {name: 'WORKS',icon: 'mdi-palette', link: '/works', scrollTo: '#works'},
        {name: 'HISTORY',icon: 'mdi-view-dashboard', link: '/history', scrollTo: '#history'},
      ],
      scroll_dur: 1000,
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

.main-screen {
  background-color: #fbfbfb
}
</style>