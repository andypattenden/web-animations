<template>
  <div class="css-waapi">
    <header class="has-text-centered">
      <h1 class="title">Web Animations API</h1>
      <h2 class="subtitle">Adding interactivity to animated elements</h2>
    </header>

    <p>
      Interactivity can be added to the
      <router-link to="/css-animation-demo">CSS animation</router-link>
      through the use of the
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API"
        >Web Animations API (WAAPI)</a
      >. We can provide users with even more control over animations.
      Particularly those with vestibular disorders, instead of having to disable
      animations completely, they can slow them down.
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

    <section class="section has-text-centered">
      <dog-walking-animation
        class="mb-5"
        :playback-rate="playbackRate"
        :min-playback-rate="minPlaybackRate"
        :max-playback-rate="maxPlaybackRate"
        @svg-loaded="handleSvgLoaded"
      />

      <h2 class="title is-5">Playback Controls</h2>
      <p class="subtitle is-7">
        Manipulate the animation through the Web Animations API
      </p>
      <div class="columns is-centered">
        <div class="column is-narrow">
          <div class="buttons is-centered has-addons">
            <button
              class="button is-small is-primary"
              type="button"
              :disabled="playing"
              @click="playAllAnimations"
            >
              Play
            </button>

            <button
              class="button is-small is-primary"
              type="button"
              :disabled="!playing"
              @click="pauseAllAnimations"
            >
              Pause
            </button>
          </div>
        </div>
        <div class="column is-narrow">
          <div class="buttons is-centered">
            <button
              class="button is-small is-primary"
              type="button"
              :disabled="minPlaybackRateReached"
              @click="decreaseAllAnimationsSpeed"
            >
              &#x25BC; Speed
            </button>

            <button
              class="button is-small is-primary"
              type="button"
              :disabled="playbackRate === 1"
              @click="resetAllAnimationsSpeed"
            >
              Speed Reset
            </button>

            <button
              class="button is-small is-primary"
              type="button"
              :disabled="maxPlaybackRateReached"
              @click="increaseAllAnimationsSpeed"
            >
              &#x25B2; Speed
            </button>
          </div>
        </div>
      </div>

      <div class="columns is-vcentered is-centered">
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
                v-for="(figure, figureName) in animationStates"
                :key="figureName"
                :value="figureName"
              >
                {{ figureName | capitalise }}
              </option>
            </select>
          </div>
        </div>

        <div class="column is-narrow">elements</div>
      </div>

      <div v-if="animationPlaybackControlsToShow">
        <p class="is-size-7">
          Note: if the speed has been increased using the global controls, the
          controls below will be affected by the speed decreasing
        </p>

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
                    pausePartAnimation(
                      animationPlaybackControlsToShow,
                      partName
                    )
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
                  @click="
                    resetPartSpeed(animationPlaybackControlsToShow, partName)
                  "
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
    </section>
  </div>
</template>

<script>
import DogWalkingAnimation from '@/components/DogWalkingAnimation'

export default {
  name: 'WebAnimationsApiDemo',

  components: { DogWalkingAnimation },

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
      man: null,
      dog: null,
      dogElements: null,
      dogGrowAnimation: null,
      manShrinkAnimation: null,
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
    /**
     * Whether the animation is running fast
     *
     * @returns {boolean} Is the animation running fast
     */
    animationFast() {
      return this.playbackRate > 3
    },

    /**
     * Whether the animation is running at its fastest
     *
     * @returns {boolean} Is the animation running at its fastest
     */
    animationFastest() {
      return this.playbackRate > 4
    },

    /**
     * Whether the main animation has reached the maximum playback rate
     *
     * @returns {boolean} Is the animation running at its max rate
     */
    maxPlaybackRateReached() {
      return this.playbackRate >= this.maxPlaybackRate
    },

    /**
     * Whether the main animation has reached the minimum playback rate
     *
     * @returns {boolean} Is the animation running at its min rate
     */
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
      this.resetManAndDogAnimations()
    },

    dogWalkingPast() {
      this.resetManAndDogAnimations()
    },
  },

  methods: {
    /**
     * Handle the SVG being loaded
     * Sets up animations and event handlers on the SVG
     */
    handleSvgLoaded() {
      this.dog = document.getElementById('dog')

      this.dogGrowAnimation = this.setupAnimation(
        this.dog,
        [
          { transform: 'scale(1)' },
          { transform: 'translate(-40%, -90%) scale(2)' },
        ],
        {
          duration: 4000,
          easing: 'ease-in-out',
          fill: 'both',
        },
        () => this.reverseAnimation(this.dogGrowAnimation)
      )

      this.setupEventListeners(this.dog, this.dogGrowAnimation)
    },

    /**
     * Setup animations on an element
     *
     * @param {HTMLElement} element element to bind the animations to
     * @param {object[]} keyframes the keyframes to animate
     * @param {object} options the options for the animation
     * @param {Function} [finishHandler] a function to run when the animation has finished
     *
     * @returns {Animation} the animation
     */
    setupAnimation(element, keyframes, options, finishHandler = null) {
      const animation = element.animate(keyframes, options)

      if (finishHandler && typeof finishHandler === 'function') {
        animation.onfinish = finishHandler
      }

      animation.pause()

      return animation
    },

    /**
     * Setup event listeners to run animations on an element
     *
     * @param {HTMLElement} element the element to attach event listeners to
     * @param {Animation} animation the animation to run on the events
     */
    setupEventListeners(element, animation) {
      element.addEventListener(
        'mousedown',
        () => this.playAnimation(animation),
        false
      )
      element.addEventListener(
        'touchstart',
        () => this.playAnimation(animation),
        false
      )
      element.addEventListener(
        'mouseup',
        () => this.pauseAnimation(animation),
        false
      )
      element.addEventListener(
        'mouseout',
        () => this.pauseAnimation(animation),
        false
      )
      element.addEventListener(
        'touchend',
        () => this.pauseAnimation(animation),
        false
      )
    },

    /**
     * Plays the passed in animation
     *
     * @param {Animation} animation the animation to play
     */
    playAnimation(animation) {
      // Hide the dog lead so that it doesn't look odd when the players change size
      this.dog.querySelector('#dog__lead').style = 'display: none'
      animation.play()
    },

    /**
     * Pause the passed animation
     *
     * @param {Animation} animation the animation to pause
     */
    pauseAnimation(animation) {
      animation.pause()
    },

    /**
     * Reverses the play direction of an animation
     *
     * @param {Animation} animation the animation to reverse
     */
    reverseAnimation(animation) {
      if (animation.playbackRate < 0) {
        animation.playbackRate = 1
      } else {
        animation.playbackRate = -1
      }

      animation.play()
    },

    /**
     * Reset the dog and man animations so that they always appear in sync when
     * walking together
     */
    async resetManAndDogAnimations() {
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

    /**
     * Pause all animations
     */
    pauseAllAnimations() {
      document.getAnimations().forEach((animation) => animation.pause())
      this.playing = false
    },

    /**
     * Play all animations
     */
    playAllAnimations() {
      document.getAnimations().forEach((animation) => animation.play())
      this.playing = true
    },

    /**
     * Increases the speed of all animations
     *
     * Also sets an interval to slowy reduce the speed back to normal
     */
    increaseAllAnimationsSpeed() {
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

    /**
     * Decreases the speed of all animations
     */
    decreaseAllAnimationsSpeed() {
      this.playbackRate = Math.round(this.playbackRate * 0.9 * 10) / 10
    },

    /**
     * Reset the speed of all the animations
     */
    resetAllAnimationsSpeed() {
      this.playbackRate = 1
    },

    /**
     * Pause part of an animated figure
     *
     * @param {string} figure the figure who we want to update
     * @param {string} part the part of the figure to pause
     */
    pausePartAnimation(figure, part) {
      document.getAnimations().forEach((animation) => {
        if (
          animation.animationName &&
          animation.animationName.startsWith(`${figure}-${part}`)
        ) {
          animation.pause()
        }
      })

      this.animationStates[figure][part].playing = false
    },

    /**
     * Play part of an animated figure
     *
     * @param {string} figure the figure who we want to update
     * @param {string} part the part of the figure to pause
     */
    playPartAnimation(figure, part) {
      document.getAnimations().forEach((animation) => {
        if (
          animation.animationName &&
          animation.animationName.startsWith(`${figure}-${part}`)
        ) {
          animation.play()
        }
      })

      this.animationStates[figure][part].playing = true
    },

    /**
     * Increase the animation speed of part of an animated figure
     *
     * @param {string} figure the figure who we want to update
     * @param {string} part the part of the figure to pause
     */
    increasePartSpeed(figure, part) {
      const animationState = this.animationStates[figure][part]

      animationState.playbackRate =
        Math.round(animationState.playbackRate * 1.2 * 10) / 10

      document.getAnimations().forEach((animation) => {
        if (
          animation.animationName &&
          animation.animationName.startsWith(`${figure}-${part}`)
        ) {
          animation.updatePlaybackRate(animationState.playbackRate)
        }
      })
    },

    /**
     * Decrease the animation speed of part of an animated figure
     *
     * @param {string} figure the figure who we want to update
     * @param {string} part the part of the figure to pause
     */
    decreasePartSpeed(figure, part) {
      const animationState = this.animationStates[figure][part]

      animationState.playbackRate =
        Math.round(animationState.playbackRate * 0.9 * 10) / 10

      document.getAnimations().forEach((animation) => {
        if (
          animation.animationName &&
          animation.animationName.startsWith(`${figure}-${part}`)
        ) {
          animation.updatePlaybackRate(animationState.playbackRate)
        }
      })
    },

    /**
     * Reset the animation speed of part of an animated figure
     *
     * @param {string} figure the figure who we want to update
     * @param {string} part the part of the figure to pause
     */
    resetPartSpeed(figure, part) {
      const animationState = this.animationStates[figure][part]

      animationState.playbackRate = 1

      document.getAnimations().forEach((animation) => {
        if (
          animation.animationName &&
          animation.animationName.startsWith(`${figure}-${part}`)
        ) {
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
