<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand">Reading List</a>
        <div id="routers">
          <router-link to="/">Home</router-link>
        </div>
      </nav>
      
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted () {
    this.$store.dispatch("getBooks")
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

#nav a.router-link-exact-active {
  color: #42b983;
}

nav {
  color: #ffffff;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}


</style>
