<template>
  <div class="home">
    <inline-svg
      class="animation"
      :src="require('@/assets/undraw_dog_walking.svg')"
    />
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss">

.animation {
  width: 100%;
  height: auto;
}

// Dog
#dog {
  &__leg {
    $leg-animation-speed: 0.2s;

    &--left {
      &--front,
      &--back {
        transform-origin: top;
        transform-box: fill-box;
      }

      &--front {
        animation: dog-leg-left $leg-animation-speed linear infinite alternate;
      }

      &--back {
        animation: dog-leg-left $leg-animation-speed linear infinite alternate-reverse;
      }
    }

    &--right {
      &-front,
      &-back {
        transform-box: fill-box;
      }

      &-front {
        transform-origin: 30px 45px;
        animation: dog-leg-right-front 0.2s linear infinite alternate-reverse;
      }

      &-back {
        transform-origin: 30px 40px;
        animation: dog-leg-right-back 0.2s linear infinite alternate;
      }
    }
  }


}

@keyframes dog-leg-left {
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(90deg) translateY(60%);
  }
}

@keyframes dog-leg-right-front {
  from {
    transform: rotateZ(-20deg);
  }

  to {
    transform: rotateZ(20deg) translateX(-5px);
  }
}

@keyframes dog-leg-right-back {
  from {
    transform: rotateZ(-20deg) translateX(10px);
  }

  to {
    transform: rotateZ(20deg) ;
  }
}

// Man
#man {
  &__upper-body {
    animation: man-body 0.75s linear infinite alternate;
    transform-box: fill-box;
  }

  &__arm {
    &--right {
      animation: man-arm 1.5s linear infinite alternate;
      transform-origin: 30px 30px;
      transform-box: fill-box;
    }
  }

  &__foot--left,
  &__foot--right {
    transform-origin: top;
    transform-box: fill-box;
  }

  &__leg {
    $leg-speed: 1.5s;
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
      animation: man-upper-leg-right $leg-speed $leg-timing infinite alternate-reverse;
    }

    &-lower--right {
      transform-origin: top right;
      animation: man-lower-leg-right $leg-speed $leg-timing infinite alternate-reverse;
    }


    // Left Leg
    &-upper--left {
      animation: man-upper-leg-left $leg-speed $leg-timing infinite alternate;
    }

    &-lower--left {
      // transform-origin: top right;
      animation: man-lower-leg-left $leg-speed $leg-timing infinite alternate;
    }
  }
}

@keyframes man-arm {
  from {
    transform: rotateZ(22deg);
  }

  to {
    transform: rotateZ(-22deg);
  }
}

@keyframes man-body {
  from {
    transform: translateY(-2px);
  }

  to {
    transform: translateY(2px);
  }
}


// Left Leg
@keyframes man-upper-leg-left {
  from {
    transform: rotateZ(20deg);
  }

  to {
    transform: rotateZ(-10deg) translate(0, -20px);
  }
}

@keyframes man-lower-leg-left {
  from {
    transform: rotateZ(45deg) translate(-10px, 25px);
  }

  to {
    transform: rotateZ(-15deg) translate(10px, -20px);
  }
}


// Right leg
@keyframes man-upper-leg-right {
  from {
    transform: rotateZ(20deg);
  }

  to {
    transform: rotateZ(-10deg);
  }
}

@keyframes man-lower-leg-right {
  from {
    transform: rotateZ(-10deg) translate(-40px, -25px);
  }

  to {
    transform: rotateZ(-70deg) translate(27px, -25px);
  }
}

// Background
#building {
  animation: background 60s linear infinite;
}

@keyframes background {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(-100%);
  }
}


#tree{
  animation: background 15s linear infinite;
}

#plant {
  animation: background 10s linear infinite;
}

#cloud {
  &--large {
    animation: background 120s linear infinite;
  }

 &--small {
    animation: background 90s linear infinite;
  }
}
</style>
