<template>
  <div class="home">
    <h1 class="title">Web Animation Demo</h1>
    <p>
      Investigating various techniques for adding animations to web with SVGs
    </p>

    <div class="animation-container">
      <inline-svg
        class="animation"
        :src="require('@/assets/undraw_dog_walking.svg')"
      />
    </div>
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
