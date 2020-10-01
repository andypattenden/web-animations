<template>
  <div id="app" class="has-text-centered">
    <nav class="nav">
      <ul class="columns is-centered is-mobile">
        <li class="column is-narrow"><router-link to="/">Home</router-link></li>
        <li class="column is-narrow">
          <router-link to="/css">CSS</router-link>
        </li>
        <li class="column is-narrow">
          <router-link to="/css-waapi"
            >CSS &amp; Web Animations API</router-link
          >
        </li>
      </ul>
    </nav>

    <div class="container">
      <router-view />
    </div>

    <footer class="footer">
      <p class="is-size-7">
        SVG images from <a href="https://undraw.io">undraw.io</a>
      </p>
    </footer>
  </div>
</template>

<style lang="scss">
@import '~@/scss/common';

.nav {
  padding: 1em;

  a {
    border-bottom: 4px solid transparent;
    color: $dark;
    display: block;
    font-weight: bold;
    padding-bottom: 0.5em;
    text-decoration: none;
    transition: border-color 0.2s ease-in-out;

    &:not(:last-child) {
      margin-right: 1em;
    }

    &.router-link-exact-active {
      border-color: $primary;
    }

    &:hover {
      border-color: $primary-dark;
    }
  }
}
</style>
