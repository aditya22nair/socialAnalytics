<template>
  <nav>
    <router-link to="/" class="btn">Global</router-link>
    |
    <router-link to="/facebook" class="btn">Facebook</router-link>
    |
    <router-link to="/instagram" class="btn">Instagram</router-link>
    |
    <router-link to="/quora" class="btn">Quora</router-link>
  </nav>
  <h1>Analytics Dashboard</h1>
  <router-view> </router-view>
</template>
<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  background-color: #272953;
  padding-bottom: 20px;
}

.btn {
  padding: 10px 20px;
  color: rgb(77, 138, 55);
}

.btn:hover {
  padding: 10px 20px;
  color: rgb(63, 243, 54);
}

h1 {
  color: white;
  margin-top: 0;
}

nav {
  padding: 20px;
  color: rgb(70, 176, 79);
}

nav a {
  font-weight: bold;
  color: #16113a;
  font-size: 20px;
}
body {
  margin: 0;
}
</style>
