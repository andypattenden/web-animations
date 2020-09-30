<template>
  <div class="css">
    <h2>CSS Only</h2>

    <p>The below animation is achieved with an SVG which has its elements grouped. CSS is then used to add keyframe animations and transitions.</p>

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
  name: 'CSS',
}
</script>

<style lang="scss" scoped>
  @import '~@/scss/common';
  @import '~@/scss/animations';
</style>
