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
        <div class="column is-one-third">
          <inline-svg
            class="animation"
            :src="require('@/assets/undraw_camping.svg')"
          />
        </div>

        <div class="column is-one-third">
          <inline-svg
            class="animation"
            :src="require('@/assets/undraw_launch_day.svg')"
          />
        </div>

        <div class="column is-one-third">
          <inline-svg
            class="animation"
            :src="require('@/assets/undraw_progress_indicator.svg')"
          />
        </div>

        <div class="column is-one-third">
          <inline-svg
            class="animation"
            :src="require('@/assets/undraw_Ride_a_bicycle.svg')"
          />
        </div>

        <div class="column is-one-third">
          <inline-svg
            class="animation"
            :src="require('@/assets/undraw_dog_walking.svg')"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
@import '~@/scss/common';
</style>
