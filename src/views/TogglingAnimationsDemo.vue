<template>
  <div class="css-animation-demo">
    <header class="has-text-centered">
      <h1 class="title">Toggling CSS Animation</h1>
      <h2 class="subtitle">Toggling CSS Animations using classes</h2>
    </header>

    <p>
      Animations can be stopped/started by interacting with the toggles to
      add/remove CSS classes to the animated element. Providing the ability to
      toggle animations allows users with vestibular disorders to disable them.
    </p>

    <section class="section">
      <dog-walking-animation />
    </section>
  </div>
</template>

<script>
import DogWalkingAnimation from '@/components/DogWalkingAnimation'

export default {
  name: 'TogglingAnimationsDemo',

  components: { DogWalkingAnimation },
}
</script>

<style lang="scss" scoped>
@import '~@/scss/common';
</style>
