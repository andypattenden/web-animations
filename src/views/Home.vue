<template>
  <div class="home">
    <inline-svg
      class="animation"
      :src="require('@/assets/undraw_dog_walking.svg')"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
