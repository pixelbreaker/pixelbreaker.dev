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
      animation: 350ms cubic-bezier(0.14, 0.04, 0, 1) 1800ms maskOutTop;
    }

    &.animate.bottom {
      animation: 350ms cubic-bezier(0.14, 0.04, 0, 1) 1800ms maskOutBottom;
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
    animation: 250ms ease-in 1000ms linesIn;
    backface-visibility: hidden;
    background-color: var(--col-edge);
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
      background-color: var(--col-intro-bkg);
      transform: translateY(0);
    }

    90% {
      background-color: var(--col-intro-bkg);
    }

    to {
      background-color: transparent;
      /* Offset accounts for height of header nav */
      transform: translateY(calc(-50vh + var(--header-height) - 2px));
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
