<template>
  <div class="css-waapi">
    <h1 class="title">CSS &amp; Web Animations API</h1>

    <p>
      This takes the animation from the
      <router-link to="css">CSS example</router-link> and adds functionality via
      the
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API"
        >Web Animations API (WAAPI)</a
      >
    </p>

    <p>
      When toggling the CSS classes to enable/disable the animations, the
      animation will jump back to its start. When we start/stop animations using
      WAAPI, the animation will continue from where it was stopped without
      jumping.
    </p>

    <p>
      When the animation is sped up, the man and dog get hot. They will slow
      down to their original speed after a short time
    </p>

    <animation
      class="mb-5"
      :playback-rate="playbackRate"
      :min-playback-rate="minPlaybackRate"
      :max-playback-rate="maxPlaybackRate"
    />

    <section>
      <h2 class="title is-5">Playback Controls</h2>
      <p class="subtitle is-7">
        Manipulate the animation through the Web Animations API
      </p>
      <div class="columns is-centered">
        <div class="column is-narrow buttons is-centered has-addons">
          <button
            class="button is-small is-primary"
            type="button"
            :disabled="playing"
            @click="playAnimation"
          >
            Play
          </button>

          <button
            class="button is-small is-primary"
            type="button"
            :disabled="!playing"
            @click="pauseAnimation"
          >
            Pause
          </button>
        </div>
        <div class="column is-narrow buttons is-centered">
          <button
            class="button is-small is-primary"
            type="button"
            :disabled="minPlaybackRateReached"
            @click="decreaseSpeed"
          >
            &#x25BC; Speed
          </button>

          <button
            class="button is-small is-primary"
            type="button"
            :disabled="playbackRate <= 1"
            @click="resetSpeed"
          >
            Speed Reset
          </button>

          <button
            class="button is-small is-primary"
            type="button"
            :disabled="maxPlaybackRateReached"
            @click="increaseSpeed"
          >
            &#x25B2; Speed
          </button>
        </div>
      </div>
    </section>

    <section class="columns is-vcentered is-centered">
      <label for="column is-narrow animation-select has-tect-right">
        Show playback controls for:
      </label>

      <div class="column is-narrow">
        <div class="select is-primary">
          <select
            id="animation-select"
            v-model="animationPlaybackControlsToShow"
          >
            <option disabled>Choose an option</option>
            <option
              v-for="(item, itemName) in animationStates"
              :key="itemName"
              :value="itemName"
            >
              {{ itemName | capitalise }}
            </option>
          </select>
        </div>
      </div>

      <div class="column is-narrow">elements</div>
    </section>

    <template
      v-for="(value, partName) of animationStates[
        animationPlaybackControlsToShow
      ]"
    >
      <h3
        :key="`${animationPlaybackControlsToShow}-${partName}-heading`"
        class="subtitle is-6 mb-2"
      >
        {{ partName | capitalise }}

        <small>
          (Speed:
          {{ value.playbackRate }})</small
        >
      </h3>
      <div
        :key="`${animationPlaybackControlsToShow}-${partName}-play-controls`"
        class="columns is-centered"
      >
        <div class="column is-narrow">
          <div class="buttons is-centered has-addons">
            <button
              class="button is-small is-primary"
              type="button"
              :disabled="value.playing"
              @click="
                playPartAnimation(animationPlaybackControlsToShow, partName)
              "
            >
              Play
            </button>

            <button
              class="button is-small is-primary"
              type="button"
              :disabled="!value.playing"
              @click="
                pausePartAnimation(animationPlaybackControlsToShow, partName)
              "
            >
              Pause
            </button>
          </div>
        </div>

        <div class="column is-narrow">
          <div
            :key="`${animationPlaybackControlsToShow}-${partName}-speed-controls`"
            class="buttons is-centered"
          >
            <button
              class="button is-small is-primary"
              type="button"
              @click="
                decreasePartSpeed(animationPlaybackControlsToShow, partName)
              "
            >
              &#x25BC; Speed
            </button>

            <button
              class="button is-small is-primary"
              type="button"
              :disabled="value.playbackRate === 1"
              @click="resetPartSpeed(animationPlaybackControlsToShow, partName)"
            >
              Speed Reset
            </button>

            <button
              class="button is-small is-primary"
              type="button"
              @click="
                increasePartSpeed(animationPlaybackControlsToShow, partName)
              "
            >
              &#x25B2; Speed
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Animation from '@/components/Animation'

export default {
  name: 'CSSWaapi',

  components: { Animation },

  filters: {
    capitalise: function (value) {
      if (!value) {
        return ''
      }
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },

  data() {
    return {
      animationPlaybackControlsToShow: null,
      dogWalkingPast: false,
      manWalkingPast: false,
      playbackRate: 1,
      maxPlaybackRate: 6,
      minPlaybackRate: 0.5,
      decayInterval: null,
      playing: true,
      dogPlaying: true,
      animationStates: {
        background: {
          tree: {
            playing: true,
            playbackRate: 1,
          },
          clouds: {
            playing: true,
            playbackRate: 1,
          },
          plant: {
            playing: true,
            playbackRate: 1,
          },
          building: {
            playing: true,
            playbackRate: 1,
          },
        },
        dog: {
          leg: {
            playing: true,
            playbackRate: 1,
          },
          tail: {
            playing: true,
            playbackRate: 1,
          },
          ear: {
            playing: true,
            playbackRate: 1,
          },
        },
        man: {
          leg: {
            playing: true,
            playbackRate: 1,
          },
          foot: {
            playing: true,
            playbackRate: 1,
          },
          tail: {
            playing: true,
            playbackRate: 1,
          },
          ear: {
            playing: true,
            playbackRate: 1,
          },
        },
      },
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
      return this.playbackRate <= this.minPlaybackRate
    },
  },

  watch: {
    playbackRate(value) {
      document.getAnimations().forEach((animation) => {
        if (animation.animationName !== 'man__sweat') {
          animation.updatePlaybackRate(value)
        }
      })
    },

    manWalkingPast() {
      this.reset()
    },

    dogWalkingPast() {
      this.reset()
    },
  },

  created() {},

  methods: {
    async reset() {
      await this.$nextTick()
      document.getAnimations().forEach((animation) => {
        if (
          animation.animationName.startsWith('man') ||
          animation.animationName.startsWith('dog')
        ) {
          animation.startTime = 0
        }
      })
    },
    pauseAnimation() {
      document.getAnimations().forEach((animation) => animation.pause())
      this.playing = false
    },

    playAnimation() {
      document.getAnimations().forEach((animation) => animation.play())
      this.playing = true
    },

    increaseSpeed() {
      this.playbackRate = Math.round(this.playbackRate * 1.2 * 10) / 10

      // Set an interval to reduce speed back down to 1
      if (!this.decayInterval) {
        this.decayInterval = setInterval(() => {
          // Make sure the playback rate never falls below 1
          if (this.playbackRate > 1) {
            this.decreaseSpeed()
          } else {
            clearInterval(this.decayInterval)
            this.decayInterval = null
          }
        }, 3000)
      }
    },

    decreaseSpeed() {
      this.playbackRate = Math.round(this.playbackRate * 0.9 * 10) / 10
    },

    resetSpeed() {
      this.playbackRate = 1
    },

    pausePartAnimation(item, part) {
      document.getAnimations().forEach((animation) => {
        if (animation.animationName.startsWith(`${item}-${part}`)) {
          animation.pause()
        }
      })

      this.animationStates[item][part].playing = false
    },

    playPartAnimation(item, part) {
      document.getAnimations().forEach((animation) => {
        if (animation.animationName.startsWith(`${item}-${part}`)) {
          animation.play()
        }
      })

      this.animationStates[item][part].playing = true
    },

    increasePartSpeed(item, part) {
      const animationState = this.animationStates[item][part]

      animationState.playbackRate =
        Math.round(animationState.playbackRate * 1.2 * 10) / 10

      document.getAnimations().forEach((animation) => {
        if (animation.animationName.startsWith(`${item}-${part}`)) {
          animation.updatePlaybackRate(animationState.playbackRate)
        }
      })
    },

    decreasePartSpeed(item, part) {
      const animationState = this.animationStates[item][part]

      animationState.playbackRate =
        Math.round(animationState.playbackRate * 0.9 * 10) / 10

      document.getAnimations().forEach((animation) => {
        if (animation.animationName.startsWith(`${item}-${part}`)) {
          animation.updatePlaybackRate(animationState.playbackRate)
        }
      })
    },

    resetPartSpeed(item, part) {
      const animationState = this.animationStates[item][part]

      animationState.playbackRate = 1

      document.getAnimations().forEach((animation) => {
        if (animation.animationName.startsWith(`${item}-${part}`)) {
          animation.updatePlaybackRate(animationState.playbackRate)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/scss/common';

.animation-toggles:not(:last-child) {
  border-bottom: 1px solid $grey-lighter;
  margin-bottom: 0.5em;
  padding-bottom: 0.5em;
}
</style>
