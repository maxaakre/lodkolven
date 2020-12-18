<template>
  <div id="app" class="grid">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Roboto, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #131414;
  width: 100%;
  box-sizing: border-box;
  border: none;
  p{
    font-size:18px ;
  }
}
body {
  font-family: Roboto, Helvetica, sans-serif;
  background-color: #f2f2f2;
}

.grid {
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
 
}
h1 {
  font-size: 28;
}
h2 {
  font-size: 24;
}

@media screen and (min-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 3fr;
    max-width: 1200px;
    margin: auto;
  }
  #app{
    p,li{
    font-size:24px ;
  }
  }
}
</style>
