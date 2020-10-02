<template>
  <div class="playback-control">
    <header class="has-text-centered">
      <h1 class="title">Intersection Observer API</h1>
      <h2 class="subtitle">
        Controlling the playing of animations based on the user's scroll
        position
      </h2>
    </header>

    <div class="columns is-centered">
      <div class="column is-8-desktop is-10-tablet">
        <p>
          If we have a long page with lots of animations, we might only want to
          play them when a user scrolls to them. This allows us to ensure that a
          user will see the animation from the start rather than part way
          through. It also means that the browser is not unnecessarily
          processing animations which can't be seen.
        </p>

        <p>
          For the animations below, we are using the
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            >Intersection Observer API</a
          >
          and WAAPI to play animations when they are fully visible in the
          browser viewport.
        </p>
      </div>
    </div>

    <section class="section is-medium has-text-centered">
      <h2 class="title">Campfire</h2>
      <h3 class="subtitle">Infinite looping animation</h3>
      <div class="columns is-vcentered">
        <div class="column">
          <inline-svg
            id="camping-animation"
            class="animation animation--camping"
            :src="require('@/assets/undraw_camping.svg')"
            @loaded="handleSvgLoaded"
          />
        </div>

        <div class="column has-text-left">
          <p>
            This animation will continually loop when in view. When out of view
            it will pause. When in view again it will resume from the position
            it was paused at.
          </p>
        </div>
      </div>
    </section>

    <section class="section is-medium has-text-centered">
      <h2 class="title">Space</h2>
      <h3 class="subtitle">Infinite looping animation</h3>
      <div class="columns is-vcentered">
        <div class="column has-text-left">
          <p>
            This animation will continually loop when in view. When out of view
            it will pause. When in view again it will resume from the position
            it was paused at.
          </p>
        </div>
        <div class="column">
          <inline-svg
            id="space-animation"
            class="animation animation--space"
            :src="require('@/assets/undraw_launch_day.svg')"
            @loaded="handleSvgLoaded"
          />
        </div>
      </div>
    </section>

    <section class="section is-medium has-text-centered">
      <h2 class="title">Progress Bar</h2>
      <h3 class="subtitle">
        Infinite looping animation which resets when paused
      </h3>
      <div class="columns is-vcentered">
        <div class="column">
          <inline-svg
            id="progress-bar-animation"
            class="animation animation--progress"
            :src="require('@/assets/undraw_progress_indicator.svg')"
            @loaded="handleSvgLoaded($event, true)"
          />
        </div>

        <div class="column has-text-left">
          <p>
            This animation will continually loop when in view. When out of view
            it will pause and reset back to the beginning.
          </p>
        </div>
      </div>
    </section>

    <section class="section is-medium has-text-centered">
      <h2 class="title">Bicycle</h2>
      <h3 class="subtitle">Infinite looping animation</h3>
      <div class="columns is-vcentered">
        <div class="column has-text-left">
          <p>
            This animation will continually loop when in view. When out of view
            it will pause. When in view again it will resume from the position
            it was paused at.
          </p>
        </div>
        <div class="column">
          <inline-svg
            id="bicycle-animation"
            class="animation animation--bicycle"
            :src="require('@/assets/undraw_Ride_a_bicycle.svg')"
            @loaded="handleSvgLoaded"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IntersectionObserverApiDemo',

  methods: {
    /**
     *  Attaches an intersection observer to the SVG to control play/pause of the animations within it
     *
     * @param {SVGElement} svg the svg to attach observers tp
     * @param {boolean} [resetWhenPaused=true] whether the animation should be reset to the beginning when paused
     */
    handleSvgLoaded(svg, resetWhenPaused = false) {
      // Pause all the animations on initial load, the observer will play them when needed
      svg
        .getAnimations({ subtree: true })
        .forEach((animation) => animation.pause())

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const animations = entry.target.getAnimations({ subtree: true })
            const animationNameString = entry.target.id.replace(/-/g, ' ')

            if (entry.intersectionRatio === 1) {
              console.info(`Playing ${animationNameString}`)
              animations.forEach((animation) => animation.play())
            } else {
              console.info(
                `Pausing ${
                  resetWhenPaused ? 'and resetting ' : ''
                }${animationNameString}`
              )
              animations.forEach((animation) => {
                animation.pause()

                if (resetWhenPaused) {
                  animation.currentTime = 0
                }
              })
            }
          })
        },
        {
          // Only fire callback when 100% of the animation is in view
          threshold: 1.0,
        }
      )

      observer.observe(svg)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/scss/common';
@import '~@/scss/animations';
</style>
