<template>
  <div class="playback-control">
    <header class="has-text-centered">
      <h1 class="title">CSS Animations</h1>
      <h2 class="subtitle">Animating SVGs using CSS</h2>
    </header>

    <div class="columns is-centered">
      <p class="column is-8-desktop is-10-tablet">
        The animations below are achieved using
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations"
          >CSS keyframe animations</a
        >
        to update various properties which
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties"
          >can be animated</a
        >. The source SVGs from <a href="https://undraw.co/">undraw.co</a> have
        been edited to group and name elements allowing easy selection with CSS.
        All animations loop infinitely using
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count"
          ><code>animation-iteration-count</code></a
        >.
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
            This animation uses a simple CSS
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform"
            >
              <code>transform</code>
            </a>
            animation to change the
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale"
              ><code>scale</code></a
            >
            and
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateZ"
              ><code>rotateZ</code></a
            >
            CSS properties to create the illusion of the flames flickering.
          </p>

          <p>
            The marshmallow colour is changed by updating the fill colour of the
            SVG element.
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
            This animation uses a CSS
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform"
            >
              <code>transform</code>
            </a>
            on the
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateZ"
              ><code>rotateZ</code></a
            >
            CSS property to turn the wheels.
          </p>
          <p>
            The illusion of the background depth is acheived by changing
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX"
              ><code>translateX</code></a
            >
            on the rocks using different
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration"
              ><code>animation-duration</code></a
            >
            on each rock.
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
            Here, the astronaut appears to float by updating a combination of
            CSS
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateZ"
              ><code>rotateZ</code></a
            >
            and
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate"
              ><code>translate</code></a
            >
            animation.
          </p>
          <p>
            The comet effect was achieved using
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scale"
              ><code>scale</code></a
            >
            and
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate"
              ><code>translate</code></a
            >
            but also updating the
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin"
              ><code>transform-origin</code></a
            >
            to give the illusion of streaking across the background.
          </p>
          <p>
            The stars and planets twinkle using
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/opacity"
              ><code>opacity</code></a
            >
            animation with a different
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay"
              ><code>animation-delay</code></a
            >
            on each.
          </p>
        </div>
      </div>
    </section>

    <section class="section is-medium has-text-centered">
      <h2 class="title">Progress Indicator</h2>
      <h3 class="subtitle">Pausing between steps</h3>
      <div class="columns is-vcentered">
        <div class="column has-text-left">
          <p>
            The marker moves using
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX"
              ><code>translateX</code></a
            >. The pausing of the marker between steps was accomplished using
            some
            <a
              href="https://css-tricks.com/css-keyframe-animation-delay-iterations/"
              >keyframes with no changes</a
            >.
          </p>
          <p>
            The fading in and out of the steps was achieved by updating the fill
            colour of the SVG elements with a specific
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay"
              ><code>animation-delay</code></a
            >
            on each.
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
            class="animation animation--dog-walking"
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

  .animation--dog-walking {
    background: #ddedfd;
  }
}
</style>
