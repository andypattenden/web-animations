<template>
  <div class="home">
    <inline-svg
      class="animation"
      :src="require('@/assets/undraw_dog_walking.svg')"
    />

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
  </div>
</template>

<script>
export default {
  name: 'Home',

  methods: {
    pauseAnimation() {
      document.getAnimations().forEach(animation => animation.pause())
    },

    playAnimation() {
      document.getAnimations().forEach(animation => animation.play())
    }
  }
}
</script>

<style lang="scss">

.animation {
  width: 100%;
  height: auto;
}

$walking-animation-speed: 0.75s;
$dog-walking-animation-speed: $walking-animation-speed * 0.33333333;

// Dog
#dog {
  @keyframes dog-leg-left {
    from {
      transform: rotateZ(20deg);
    }

    to {
      transform: rotateZ(60deg) translateY(60%);
    }
  }

  &__ear-right,
  &__ear--left {
    transform-origin: center;
    transform-box: fill-box;

    @keyframes dog-ear {
      from {
        transform: rotateZ(0deg);
      }

      to {
        transform: rotateZ(30deg);
      }
    }
  }

  &__ear--left {
    animation: dog-ear 1s ease-in-out infinite alternate-reverse;
  }

  &__ear-right {
    animation: dog-ear 1s ease-in-out infinite alternate;
  }

  &__front-leg--left,
  &__back-leg--left {
    transform-origin: top;
    transform-box: fill-box;
  }

  &__front-leg--left {
    animation: dog-leg-left $dog-walking-animation-speed linear infinite alternate;
  }

  &__back-leg--left {
    animation: dog-leg-left $dog-walking-animation-speed linear infinite alternate-reverse;
  }

  &__front-leg--right,
  &__back-leg--right {
    transform-box: fill-box;
  }

  &__front-leg--right {
    transform-origin: 30px 45px;
    animation: dog-leg-right-front $dog-walking-animation-speed linear infinite alternate-reverse;

    @keyframes dog-leg-right-front {
      from {
        transform: rotateZ(-20deg);
      }

      to {
        transform: rotateZ(20deg) translateX(-5px);
      }
    }
  }

  &__back-leg--right {
    transform-origin: 30px 40px;
    animation: dog-leg-right-back $dog-walking-animation-speed linear infinite alternate;

    @keyframes dog-leg-right-back {
      from {
        transform: rotateZ(-20deg) translateX(10px);
      }

      to {
        transform: rotateZ(20deg) ;
      }
    }
  }
}

// Man
#man {
  &__upper-body {
    animation: man-body #{$walking-animation-speed / 2} linear infinite alternate-reverse;
    transform-box: fill-box;

    @keyframes man-body {
      from {
        transform: translateY(0px);
      }

      to {
        transform: translateY(20px);
      }
    }
  }

  &__arm {
    &--right {
      animation: man-arm $walking-animation-speed linear infinite alternate;
      transform-origin: 30px 30px;
      transform-box: fill-box;
    }

    @keyframes man-arm {
      from {
        transform: rotateZ(22deg);
      }

      to {
        transform: rotateZ(-22deg);
      }
    }
  }

  &__foot--left,
  &__foot--right {
    transform-box: fill-box;
  }

  &__foot--right {
    transform-origin: top left;
    animation: man-foot-right $walking-animation-speed linear infinite alternate;

    @keyframes man-foot-right {
      from {
        transform: rotateZ(-10deg);
      }

      to {
        transform: rotateZ(30deg) translate(10px, -35px);
      }
    }
  }

  &__foot--left {
    transform-origin: 0 20px;

    // FIXME: this breaks the lower leg transform-origin
    // animation: man-foot-left 1.5s linear infinite alternate;

    @keyframes man-foot-left {
      from {
        transform: rotateZ(30deg);
      }

      to {
        transform: rotateZ(-20deg) translate(-10px, 0);
      }
    }
  }

  &__leg {
    $leg-timing: linear;

    &-upper--left,
    &-lower--left,
    &-upper--right,
    &-lower--right {
      transform-origin: top;
      transform-box: fill-box;
    }

    // Right leg
    &-upper--right {
      transform-origin: 50px 20px;
      animation: man-upper-leg-right $walking-animation-speed $leg-timing infinite alternate-reverse;

      @keyframes man-upper-leg-right {
        from {
          transform: rotateZ(20deg);
        }

        to {
          transform: rotateZ(-10deg);
        }
      }
    }

    &-lower--right {
      transform-origin: 80% 40px ;
      animation: man-lower-leg-right $walking-animation-speed $leg-timing infinite alternate-reverse;

      @keyframes man-lower-leg-right {
        from {
          transform: rotateZ(-15deg) translate(-20px, 0px);
        }

        to {
          transform: rotateZ(-70deg) translate(35px, 40px);
        }
      }
    }


    // Left Leg
    &-upper--left {
      transform-origin: 25px 20px;
      animation: man-upper-leg-left $walking-animation-speed $leg-timing infinite alternate;

      @keyframes man-upper-leg-left {
        from {
          transform: rotateZ(20deg);
        }

        to {
          transform: rotateZ(-10deg);
        }
      }
    }

    &-lower--left {
      transform-origin: 33px 10px;
      animation: man-lower-leg-left $walking-animation-speed $leg-timing infinite alternate;

      @keyframes man-lower-leg-left {
        from {
          transform: rotateZ(40deg) translateX(-13px);
        }

        to {
          transform: rotateZ(-20deg) translateX(10px);
        }
      }
    }
  }
}

// Background
@keyframes background {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(-100%);
  }
}

#building,
#tree,
#plant,
#cloud--large,
#cloud--small {
  animation-name: background;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

#building {
  animation-duration: $walking-animation-speed * 80; // 60s
}

#tree{
  animation-duration: $walking-animation-speed * 20; // 15s
}

#plant {
  animation-duration: $walking-animation-speed * 13.333333; // 10s
}

#cloud {
  &--large {
    animation-duration: $walking-animation-speed * 160; // 120s
  }

  &--small {
    animation-duration: $walking-animation-speed * 120; // 90s
  }
}
</style>
