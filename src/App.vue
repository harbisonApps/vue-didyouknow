<template>
  <div id="app">
    <NavHeader/>
    <router-view/>
  </div>
</template>
<script>
import NavHeader from '@/components/NavHeader'
export default {
  components: {NavHeader}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  margin-top: 20px;
  font-weight: bold;
  color: #2c3e50;
  
}

#nav a.router-link-exact-active {
  color: #42b983;
}

form {
    min-width: 300px;
    max-width: 400px;
    margin: auto;
}
input,
textarea{
    border-radius: 25px;
    border: .5px solid grey;
    margin-top: 10px;
    width: 275px;
    font-size: 16px;
    padding: 7px;
}
button{
    margin-bottom: 20px;
    font-size: 16px;
}

</style>
