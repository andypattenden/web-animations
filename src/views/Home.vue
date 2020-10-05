<template>
  <div class="home">
    <header class="has-text-centered">
      <h1 class="title">Web Animation Demo</h1>
      <h2 class="subtitle">
        Demonstrating how to animate SVGs and add interactivity
      </h2>
    </header>

    <section class="section">
      <div class="columns is-multiline is-centered">
        <div v-for="image in images" :key="image" class="column is-one-third">
          <inline-svg
            class="animation"
            :src="require(`@/assets/${image}.svg`)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      images: [
        'undraw_camping',
        'undraw_Ride_a_bicycle',
        'undraw_launch_day',
        'undraw_progress_indicator',
        'undraw_dog_walking',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@/scss/common';
</style>
