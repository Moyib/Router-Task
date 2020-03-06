<template>
  <div id="app">  

     <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <b-icon-egg-fried font-scale="4"></b-icon-egg-fried>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <router-view></router-view>
      <div class="tab">
        <keep-alive>
         <component v-bind:is="component"></component>
        </keep-alive>
       <button v-on:click="toggle">Let us serve you now</button>

        <b-list-group>
          <b-list-group-item href="#" v-for="item in items" :key="item">
            {{ item.message }}
          </b-list-group-item>
          <b-list-group-item href="#">
            Mochiato <b-badge>4 cups left</b-badge>
          </b-list-group-item>
        </b-list-group>

        <div class="text-center">
          <b-button variant="primary" size="sm" v-on:click="shoutout">
            <h5>Click here to give us a shoutout (or two 😉) <b-badge variant="bold"> {{ count }}</b-badge></h5>
          </b-button>
        </div>
      </div>
  
  </div>
</template>

<script>

import serve from './components/serve.vue'
import name from './components/name.vue'

export default {
  name: 'App',
  components: {
    serve, name
  },
  data() {
    return {
      component: 'serve',
      items: [
        { message: 'Burnt Coffee' },
        { message: 'Capuccino' },
        { message: 'Espresso' },
        { message: 'Latte-Coffee' },
        { message: 'Machiato' }
      ]
    }
  },

  methods: {
    increment() {
      this.$store.commit.increment
    },
    toggle() {
      if(this.component === serve) {
        this.component = name;
      }
      else {
        this.component = serve;
      }
    },
  },

 computed: {
    count() {
      return this.$store.state.count
    }
 }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Muli:300,400,600&display=swap');

#app {
  font-family: 'Muli', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

button {
  background-color: #0CD6A5;
  color: #FFFFFF;
}

</style>
