<template>
  <div id="canvas">
    <div id="stars-1"></div>
    <div id="stars-2"></div>
    <div id="stars-3"></div>
  </div>
</template>

<style lang="scss" scoped>
/*
  Credits for the idea to: 
  @screenshake | linkedin.com/in/saranshsinha
*/

// n is number of stars required
@function multiple-box-shadow($n) {
  $value: "#{random(2000)}px #{random(2000)}px #fff";
  @for $i from 2 through $n {
    $value: "#{$value} , #{random(2000)}px #{random(2000)}px #FFF";
  }

  @return unquote($value);
}

$n: 400;
$speedSmall: 100s;
$speedMid: 150s;
$speedBig: 200s;

$shadows-small: multiple-box-shadow($n);
$shadows-medium: multiple-box-shadow($n / 2);
$shadows-big: multiple-box-shadow($n / 3);

#canvas {
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
}

@mixin starsGeneral($size, $animationTime, $shadows) {
  width: $size;
  height: $size;
  background: transparent;
  box-shadow: $shadows;
  animation: moveUp $animationTime linear infinite;
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: $size;
    height: $size;
    background: transparent;
    box-shadow: $shadows;
  }
}

#stars-1 {
  @include starsGeneral(1px, $speedSmall, $shadows-small);
}

#stars-2 {
  @include starsGeneral(2px, $speedMid, $shadows-medium);
}

#stars-3 {
  @include starsGeneral(3px, $speedBig, $shadows-big);
}

@keyframes moveUp {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}
</style>
