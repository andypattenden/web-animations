<template>
  <div class="css">
    <h1 class="title">CSS Only</h1>

    <p>
      The below animation is achieved with an SVG which has its elements
      grouped. CSS is then used to add keyframe animations and transitions.
    </p>

    <animation />
  </div>
</template>

<script>
import Animation from '@/components/Animation'

export default {
  name: 'CSS',

  components: { Animation },
}
</script>

<style lang="scss" scoped>
@import '~@/scss/common';
</style>
