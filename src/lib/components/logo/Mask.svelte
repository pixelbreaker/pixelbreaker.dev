<script>
  export let classname = 'top';
  let animating = false;

  export const animate = () => {
    animating = true;
  };
</script>

<div class="ContentMask {classname}" class:animate={animating}>
  {#if animating}
    <div class="Line {classname}" />
  {/if}
</div>

<style lang="scss">
  .ContentMask {
    animation-fill-mode: both !important;
    animation-iteration-count: 1;
    backface-visibility: hidden;
    background-color: var(--col-intro-bkg);
    height: 50vh;
    left: 0;
    position: absolute;
    transform: translateZ(0);
    width: 100vw;

    &.animate.top {
      animation: 400ms ease-in 2s maskOutTop;
    }

    &.animate.bottom {
      animation: 400ms ease-in 2s maskOutBottom;
    }

    &.top {
      top: 0;
    }

    &.bottom {
      top: 50vh;
    }
  }

  .Line {
    animation-fill-mode: both !important;
    animation-iteration-count: 1;
    animation: 250ms ease-out 1100ms linesIn;
    backface-visibility: hidden;
    background-color: var(--col-violet);
    height: 2px;
    left: 0;
    position: absolute;
    transform-origin: top 50%;
    width: 100%;

    &.top {
      top: 100%;
    }

    &.bottom {
      top: 0;
    }
  }

  @keyframes maskOutTop {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-55vh);
    }
  }

  @keyframes maskOutBottom {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(55vh);
    }
  }

  @keyframes linesIn {
    from {
      transform: scale3d(0, 1, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
</style>
