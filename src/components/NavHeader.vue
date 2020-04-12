<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/facts">Facts</router-link> |
      <router-link to="/dashboard">Admin</router-link> |
      <router-link to="/login">Login</router-link> |
      <a @click="logOut" type="submit">Log Out</a>
    </div>
</template>
<script>
export default {
    name:'nav-header'
}
</script>