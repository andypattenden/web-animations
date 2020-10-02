<template>
  <div id="app" class="px-4">
    <nav class="nav">
      <ul class="columns is-centered">
        <li class="column is-narrow">
          <router-link to="/">Home</router-link>
        </li>
        <li class="column is-narrow">
          <router-link to="/basic-css-animation-demo"
            >CSS Animations</router-link
          >
        </li>
        <li class="column is-narrow">
          <router-link to="/toggling-animations-demo">
            Toggling CSS Animations
          </router-link>
        </li>
        <li class="column is-narrow">
          <router-link to="/web-animations-api-demo">
            Web Animations API
          </router-link>
        </li>
        <li class="column is-narrow">
          <router-link to="/intersection-observer-api-demo">
            Intersection Observer API
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="container">
      <router-view />
    </div>

    <footer class="footer has-text-centered">
      <p class="is-size-7">
        SVG images from <a href="https://undraw.io">undraw.io</a>
      </p>
    </footer>
  </div>
</template>

<style lang="scss">
@import '~@/scss/common';

.nav {
  margin-bottom: 2em;
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
