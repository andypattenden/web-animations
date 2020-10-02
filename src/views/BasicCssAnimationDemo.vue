<template>
  <div class="playback-control">
    <header class="has-text-centered">
      <h1 class="title">CSS Animations</h1>
      <h2 class="subtitle">Animating SVGs using CSS</h2>
    </header>

    <div class="columns is-centered">
      <p class="column is-8-desktop is-10-tablet">
        The animations below are achieved using pure
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations"
          >CSS animations</a
        >. All animations play automatically and loop infinitely.
      </p>
    </div>

    <section class="section is-medium has-text-centered">
      <h2 class="title">Campfire</h2>
      <h3 class="subtitle">Simple flame animation</h3>
      <div class="columns is-vcentered">
        <div class="column is-two-thirds">
          <inline-svg
            class="animation"
            :src="require('@/assets/undraw_camping.svg')"
          />
        </div>

        <div class="column has-text-left">
          <p>
            This animation use simple transition animation to change the scale
            and rotate the flames.
          </p>
        </div>
      </div>
    </section>

    <section class="section is-medium has-text-centered">
      <h2 class="title">Bicycle</h2>
      <h3 class="subtitle">Wheel and background animation</h3>
      <div class="columns is-vcentered">
        <div class="column has-text-left">
          <p>
            This animation uses a simple transition animation to rotate the
            wheels. The illusion of the background depth is acheived by
            translating the rocks using different animation durations.
          </p>
        </div>

        <div class="column is-two-thirds">
          <inline-svg
            class="animation"
            :src="require('@/assets/undraw_Ride_a_bicycle.svg')"
          />
        </div>
      </div>
    </section>

    <section class="section is-medium has-text-centered">
      <h2 class="title">Space</h2>
      <h3 class="subtitle">Combining different animation types</h3>
      <div class="columns is-vcentered">
        <div class="column is-two-thirds">
          <inline-svg
            class="animation"
            :src="require('@/assets/undraw_launch_day.svg')"
          />
        </div>

        <div class="column has-text-left">
          <p>
            Astronaut appears to float using rotation and translation animation.
          </p>
          <p>
            The comet effect was achieved using scale and translation but also
            shifting the transform origin to give the illusion of streaking
            across the background.
          </p>
          <p>The stars and planets blink using delayed opacity animation.</p>
        </div>
      </div>
    </section>

    <section class="section is-medium has-text-centered">
      <h2 class="title">Progress Indicator</h2>
      <h3 class="subtitle">Pausing between steps</h3>
      <div class="columns is-vcentered">
        <div class="column has-text-left">
          <p>
            The pausing of the marker between steps was accomplished using some
            keyframes with no changes.
          </p>
          <p>
            The fading in and out of the steps was achieved using specific
            animation timings and delays.
          </p>
        </div>

        <div class="column is-two-thirds">
          <inline-svg
            class="animation"
            :src="require('@/assets/undraw_progress_indicator.svg')"
          />
        </div>
      </div>
    </section>

    <section class="section is-medium has-text-centered">
      <h2 class="title">Walking the Dog</h2>
      <h3 class="subtitle">Combining more advanced animations</h3>
      <div class="columns is-vcentered">
        <div class="column is-two-thirds">
          <inline-svg
            class="animation"
            :class="[
              'animate-background--tree',
              'animate-background--clouds',
              'animate-background--plant',
              'animate-background--building',
              'animate-dog--legs',
              'animate-dog--tail',
              'animate-dog--ears',
              'animate-man--legs',
              'animate-man--arms',
              'animate-man--body',
            ]"
            :src="require('@/assets/undraw_dog_walking.svg')"
          />
        </div>

        <div class="column has-text-left">
          <p>
            Using grouped elements within the SVG, each group can be animated
            separately and then combined to achieve this animation.
          </p>

          <p>
            A combination of the above techniques was used together with
            specific timing calculations.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/scss/common';
@import '~@/scss/animations';

::v-deep {
  #man__sweat,
  #dog__tongue {
    display: none;
  }
}
</style>
