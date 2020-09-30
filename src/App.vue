<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/css">CSS</router-link>
      <router-link to="/css-waapi">CSS &amp; Web Animations API</router-link>
    </div>

    <router-view/>

    <footer>
      <p>SVG images from <a href="https://undraw.io">undraw.io</a></p>
    </footer>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 1em;

  a {
    font-weight: bold;
    color: #2c3e50;
    border-bottom: 4px solid transparent;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 1em;
    }

    &.router-link-exact-active {
      border-color: #42b983;
    }

    &:hover {
      border-color: #ade1ca;
    }
  }
}
</style>
