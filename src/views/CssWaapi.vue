<template>
  <div class="css-waapi">
    <h2>CSS &amp; Web Animations API</h2>

    <p>This takes the animation from the <router-link to="css">CSS example</router-link> and adds functionality via the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API">Web Animations API (WAAPI)</a></p>

    <p>When the animation is sped up, the man and dog get hot. They will slow down to their original speed after a short time</p>

    <div class="animation-container">
      <span class="playback-rate">
        Animation Speed: {{ playbackRate }}
      </span>

      <inline-svg
        class="animation"
        :class="{
          'animation--dog-walking-past': dogWalkingPast,
          'animation--man-walking-past': manWalkingPast,
          'animation--fast': animationFast,
          'animation--fastest': animationFastest,
        }"
        :src="require('@/assets/undraw_dog_walking.svg')"
      />
    </div>

      <p>
        <button
          @click="playAnimation"
          type="button"
        >
          Play
        </button>

        <button
          @click="pauseAnimation"
          type="button"
        >
          Pause
        </button>

        <button
          @click="speedUp"
          type="button"
          :disabled="maxPlaybackRateReached"
        >
          Speed up
        </button>

        <button
          @click="slowDown"
          type="button"
          :disabled="minPlaybackRateReached"
        >
          Slow down
        </button>

        <button
          @click="resetSpeed"
          type="button"
        >
          Reset Speed
        </button>

        <br/>

        <label>
          <input type="checkbox" v-model="manWalkingPast" />
          Man Walks Past
        </label>

        <label>
          <input type="checkbox" v-model="dogWalkingPast" />
          Dog Walks Past
        </label>
      </p>
  </div>
</template>

<script>
export default {
  name: 'Home',

  watch: {
    playbackRate(value) {
      document.getAnimations().forEach(animation => {
        if(animation.animationName !== 'sweat') {
          animation.updatePlaybackRate(value)
        }
      })
    }
  },

  computed: {
    animationFast() {
      return this.playbackRate > 3
    },

    animationFastest() {
      return this.playbackRate > 4
    },

    maxPlaybackRateReached() {
      return this.playbackRate >= this.maxPlaybackRate
    },

    minPlaybackRateReached() {
      return this.playbackRate <= this.minPlaybackrate
    }
  },

  data() {
    return {
      dogWalkingPast: false,
      manWalkingPast: false,
      playbackRate: 1,
      maxPlaybackRate: 6,
      minPlaybackrate: 0.5,
      decayInterval: null
    }
  },

  created() {

  },

  methods: {
    pauseAnimation() {
      document.getAnimations().forEach(animation => animation.pause())
    },

    playAnimation() {
      document.getAnimations().forEach(animation => animation.play())
    },

    speedUp() {
      this.playbackRate = Math.round((this.playbackRate * 1.2) * 10) /10

      // Set an interval to reduce speed back down to 1
      if(!this.decayInterval) {
          this.decayInterval = setInterval(() => {
          // Make sure the playback rate never falls below 1
          if (this.playbackRate > 1) {
            this.slowDown()
          } else {
            clearInterval(this.decayInterval)
            this.decayInterval = null
          }

        }, 3000)
      }
    },

    slowDown() {
      this.playbackRate = Math.round((this.playbackRate * 0.9) * 10) / 10
    },

    resetSpeed() {
      this.playbackRate = 1
    },
  }
}
</script>

<style lang="scss" scoped>

@import '~@/scss/common';
@import '~@/scss/animations';

::v-deep {
  .animation {
    &--dog-walking-past {
      #dog {
        animation: background 10s infinite linear reverse;

        &__lead {
          display: none;
        }
      }
    }

    &--man-walking-past {
      #man {
        animation: background 10s infinite linear reverse;
      }

      #dog {
        &__lead {
          display: none;
        }
      }
    }

    &--fast {
      #sweat,
      #dog__tongue {
        opacity: 1;
      }

      #dog__tongue {
        animation-name: dog-tongue;
      }

      #man__face,
      #man__neck {
        fill: #f99a9a
      }
    }

    &--fastest {
      #man__face,
      #man__neck {
        fill: #f66f6f
      }
    }
  }

  #sweat {
    display: block;
    opacity: 0;

    &-drop-1 {
      transform-box: fill-box;
      animation: sweat 1s linear 0.25s infinite;
    }

    &-drop-2 {
      transform-box: fill-box;
      animation: sweat 1s linear 0.5s infinite ;
    }

    &-drop-3 {
      transform-box: fill-box;
      animation: sweat 1s  linear 0s infinite;
    }
  }

  @keyframes sweat {
    0% {
      scale: 0;
      transform: translateY(0);
      opacity: 0;
    }

    50% {
      scale: 1;
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  }

  // Dog
  #dog {
    &__tongue {
      display: block;
      opacity: 0;
      transform-box: fill-box;
      transform-origin: top left;
      animation-duration: 0.5s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;

      @keyframes dog-tongue {
        from {
          transform: rotateZ(0deg) scaleY(0.2)
        }

        to {
          transform: rotateZ(20deg) scaleY(1)
        }
      }
    }
  }

  // Man
  #man {
    &__face,
    &__neck {
      transition: fill 2s ease-in-out;
    }
  }
}
</style>
