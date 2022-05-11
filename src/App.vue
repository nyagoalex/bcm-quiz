<template>
<div>
    <Nav/>
     <b-row class="mt-5 align-items-center">
        <b-col sm="0" md="5" 
          ><b-img src="/image.jpeg" fluid alt="Responsive image"></b-img></b-col
        >
        <b-col sm="12" md="7">
          
  <router-view />
        </b-col>
      </b-row>
      </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    Nav,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  padding: 0rem 3rem;
  background-color: #F9FAFB;
  align-content: center;
  min-height: 100vh;
}
</style>
