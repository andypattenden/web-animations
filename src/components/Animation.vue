<template>
  <div>
    <div class="">
      <div class="columns">
        <div class="column is-four-fifths animation-container">
          <span class="playback-rate">
            Speed: {{ playbackRate }}
            <template v-if="maxPlaybackRateReached"> (Max) </template>
            <template v-if="minPlaybackRateReached"> (Min) </template>
          </span>
          <inline-svg
            class="animation"
            :class="{
              'animation--dog-walking-past': dogWalkingPast,
              'animation--man-walking-past': manWalkingPast,
              'animation--fast': animationFast,
              'animation--fastest': animationFastest,
              'animate-background--tree': animateBackgroundTree,
              'animate-background--clouds': animateBackgroundClouds,
              'animate-background--plant': animateBackgroundPlant,
              'animate-background--building': animateBackgroundBuilding,
              'animate-dog--legs': animateDogLegs,
              'animate-dog--tail': animateDogTail,
              'animate-dog--ears': animateDogEars,
              'animate-man--legs': animateManLegs,
              'animate-man--arms': animateManArms,
              'animate-man--body': animateManBody,
            }"
            :src="require('@/assets/undraw_dog_walking.svg')"
          />
        </div>

        <div class="column has-text-left">
          <h2 class="title is-5">Animation Toggles</h2>
          <p class="subtitle is-7">
            Toggle CSS classes to enable/disable animations
          </p>

          <h4 class="subtitle is-6 mb-2">Background</h4>
          <ul class="animation-toggles mb-5">
            <li>
              <label class="">
                <input
                  v-model="animateBackgroundTree"
                  type="checkbox"
                  class="switch"
                />
                Tree
              </label>
            </li>
            <li>
              <label class="">
                <input
                  v-model="animateBackgroundPlant"
                  type="checkbox"
                  class="switch"
                />
                Plant
              </label>
            </li>
            <li>
              <label class="">
                <input
                  v-model="animateBackgroundClouds"
                  type="checkbox"
                  class="switch"
                />
                Clouds
              </label>
            </li>
            <li>
              <label class="">
                <input
                  v-model="animateBackgroundBuilding"
                  type="checkbox"
                  class="switch"
                />
                Building
              </label>
            </li>
          </ul>

          <h4 class="subtitle is-6 mb-2">Dog</h4>
          <ul class="animation-toggles mb-5">
            <li>
              <label class="">
                <input
                  v-model="dogWalkingPast"
                  type="checkbox"
                  class="switch"
                />
                Walks Past
              </label>
            </li>
            <li>
              <label class="">
                <input
                  v-model="animateDogLegs"
                  type="checkbox"
                  class="switch"
                />
                Legs
              </label>
            </li>
            <li>
              <label class="">
                <input
                  v-model="animateDogTail"
                  type="checkbox"
                  class="switch"
                />
                Tail
              </label>
            </li>
            <li>
              <label class="">
                <input
                  v-model="animateDogEars"
                  type="checkbox"
                  class="switch"
                />
                Ears
              </label>
            </li>
          </ul>

          <h4 class="subtitle is-6 mb-2">Man</h4>
          <ul class="animation-toggles">
            <li>
              <label class="">
                <input
                  v-model="manWalkingPast"
                  type="checkbox"
                  class="switch"
                />
                Walks Past
              </label>
            </li>
            <li>
              <label class="">
                <input
                  v-model="animateManLegs"
                  type="checkbox"
                  class="switch"
                />
                Legs
              </label>
            </li>
            <li>
              <label class="">
                <input
                  v-model="animateManArms"
                  type="checkbox"
                  class="switch"
                />
                Arms
              </label>
            </li>
            <li>
              <label class="">
                <input
                  v-model="animateManBody"
                  type="checkbox"
                  class="switch"
                />
                Body
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Animation',

  props: {
    playbackRate: {
      type: Number,
      required: false,
      default: 1,
    },
    minPlaybackRate: {
      type: Number,
      required: false,
      default: 0.5,
    },
    maxPlaybackRate: {
      type: Number,
      required: false,
      default: 6,
    },
  },

  data() {
    return {
      dogWalkingPast: false,
      manWalkingPast: false,
      animateDogTail: true,
      animateDogEars: true,
      animateDogLegs: true,
      animateManLegs: true,
      animateManBody: true,
      animateManArms: true,
      animateBackgroundClouds: true,
      animateBackgroundPlant: true,
      animateBackgroundTree: true,
      animateBackgroundBuilding: true,
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
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/scss/animations';

.animation-container {
  position: relative;

  .playback-rate {
    position: absolute;
    right: 1em;
    top: 1em;
  }
}

::v-deep {
  .animation {
    background: #ddedfd;
    height: auto;
    width: 100%;

    @keyframes walk-past {
      from {
        transform: translateX(100%);
      }

      to {
        transform: translateX(-100%);
      }
    }

    &--dog-walking-past {
      #dog {
        animation: walk-past 10s infinite linear reverse;

        &__lead {
          display: none;
        }
      }
    }

    &--man-walking-past {
      #man {
        animation: walk-past 10s infinite linear reverse;
      }

      #dog {
        &__lead {
          display: none;
        }
      }
    }

    &--fast {
      #man__sweat,
      #dog__tongue {
        opacity: 1;
      }

      #dog__tongue {
        animation-name: dog-tongue;
      }

      #man__face,
      #man__neck {
        fill: #f99a9a;
      }
    }

    &--fastest {
      #man__face,
      #man__neck {
        fill: #f66f6f;
      }
    }
  }

  // Dog
  #dog {
    &__tongue {
      animation-direction: alternate;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      opacity: 0;
      transform-box: fill-box;
      transform-origin: top left;

      @keyframes dog-tongue {
        from {
          transform: rotateZ(0deg) scaleY(0.2);
        }

        to {
          transform: rotateZ(20deg) scaleY(1);
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

    &__sweat {
      opacity: 0;

      &-drop-1 {
        animation: sweat 1s linear 0.25s infinite;
        transform-box: fill-box;
      }

      &-drop-2 {
        animation: sweat 1s linear 0.5s infinite;
        transform-box: fill-box;
      }

      &-drop-3 {
        animation: sweat 1s linear 0s infinite;
        transform-box: fill-box;
      }
    }

    @keyframes sweat {
      0% {
        opacity: 0;
        scale: 0;
        transform: translateY(0);
      }

      50% {
        opacity: 1;
        scale: 1;
      }

      100% {
        opacity: 0;
        transform: translateY(20px);
      }
    }
  }
}
</style>
