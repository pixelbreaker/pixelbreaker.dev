<script>
  export let letter = 'a';
  export let color = '--col-logo';
  export let color2 = '--col-logo';
  export let classname = '';

  const letters = {
    a: {
      width: 37.106,
      height: 39,
      path: `M21.284,0l15.822,39h-6.518l-4.291-11.365H10.864L6.463,38.946H0L16.046,0H21.284z M12.87,22.12h11.421L18.608,7.076
	L15.321,15.6L12.87,22.12zz`
    },
    b: {
      width: 23.972,
      height: 39,
      path: `M8.666,0c2.982,0.111,5.571,0.223,8.216,1.838c1.463,0.947,4.951,3.566,4.951,8.637c0,0.891-0.168,3.398-1.744,5.516
	c-0.619,0.779-1.631,1.672-1.744,1.838c0.45,0.334,1.52,1.004,2.589,2.117c2.813,2.842,3.038,6.074,3.038,7.578
	c-0.056,4.68-2.701,9.082-7.146,10.697c-1.406,0.502-2.476,0.613-5.402,0.779H0V0H8.666z M5.965,15.99h3.658
	c1.069,0,2.195-0.057,3.151-0.445c1.745-0.781,3.151-2.73,3.151-4.793c0-1.504-0.787-3.064-1.856-4.012
	c-1.351-1.113-2.645-1.225-4.39-1.225H5.965V15.99z M5.965,33.484h5.064c1.801,0,2.532-0.166,3.32-0.557
	c2.138-0.947,3.714-3.398,3.657-5.795c0-2.061-0.9-3.789-2.531-4.848c-2.026-1.336-4.559-1.281-9.511-1.225V33.484z`
    },
    e: {
      width: 19.223,
      height: 39,
      path: `M19.223,0v5.46H5.961v11.478h13.205v5.461H5.961v11.088h13.205v5.516H0V0H19.223z`
    },
    i: {
      width: 5.906,
      height: 39,
      path: `M5.906,0v38.891H0V0H5.906z`
    },
    k: {
      width: 28.861,
      height: 39,
      path: `M5.961,0v19.277L20.892,0h7.188L12.981,19.223l15.879,19.834h-7.467L5.961,19.779v19.166H0V0H5.961z`
    },
    l: {
      width: 19.223,
      height: 39,
      path: `M5.963,0v33.598h13.26v5.404H0V0H5.963z`
    },
    p: {
      width: 24.18,
      height: 39,
      path: `M11.477,0c1.895,0.111,3.399,0.167,5.182,0.78C23.4,3.009,24.18,9.36,24.18,11.645c0,6.018-3.956,9.139-5.739,10.252
	c-3.008,1.838-5.738,1.783-12.479,1.727v15.379H0V0H11.477z M5.961,18.219c1.671,0,3.343,0,5.014-0.056
	c1.337,0,2.507-0.111,3.622-0.669c2.173-1.002,3.732-3.454,3.732-5.961c0-1.281-0.39-3.789-3.342-5.237
	c-2.006-0.947-4.458-0.892-9.026-0.78V18.219z`
    },
    r: {
      width: 26.353,
      height: 39,
      path: `M12.703,0c1.616,0.057,5.516,0,8.97,2.842c0.558,0.502,1.671,1.504,2.618,3.121c0.445,0.779,1.059,2.061,1.393,4.289
	c0.057,0.334,0.224,1.561,0.224,2.785c0,3.121-1.003,6.129-3.343,8.246c-2.117,2.006-4.402,2.619-7.076,3.344l10.864,14.375h-7.41
	L5.906,21.617v17.273H0V0H12.703z M5.85,19.947c3.176,0.111,8.357,0.334,11.199-1.449c1.949-1.227,3.064-3.621,3.064-6.018
	c0-3.287-1.84-5.906-4.904-6.742c-0.946-0.223-1.894-0.277-2.841-0.334H5.85V19.947z`
    },
    x: {
      width: 33.764,
      height: 39,
      path: `M0.39,0.056h7.076l9.639,14.542L26.576,0h7.076L20.504,19.278l13.26,19.724h-7.02l-9.862-15.211L7.076,38.947H0
	l13.372-19.781L0.39,0.056z`
    }
  };
  const { width, height, path } = letters[letter];
</script>

<!-- {#if visible} -->
<svg
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  width="{width}px"
  height="{height}px"
  viewBox="0 0 {width} {height}"
  xml:space="preserve"
  class="Letter {classname}"
  style:color="var({color})"
>
  <path class="letterPath" d={path} />
</svg>

<!-- {/if} -->

<style lang="scss">
  @keyframes inTop {
    from {
      transform: translateZ(0) translateX(60vw);
    }

    to {
      transform: translateZ(0) translateX(0);
    }
  }

  @keyframes outTop {
    from {
      transform: translateZ(0) translateX(0);
    }

    to {
      transform: translateZ(0) translateY(-60vh);
    }
  }

  @keyframes inBottom {
    from {
      transform: translateZ(0) translateX(-60vw);
    }

    to {
      transform: translateZ(0) translateX(0);
    }
  }

  @keyframes outBottom {
    from {
      transform: translateZ(0) translateX(0);
    }

    to {
      transform: translateZ(0) translateY(60vh);
    }
  }

  .Letter {
    animation-duration: 250ms;
    animation-fill-mode: both !important;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    backface-visibility: hidden;
    height: 38px;
    margin-bottom: -1px;
    margin-right: 2px;
    transition: color 1000ms ease-out;
    transform: translateZ(0);
    width: auto;

    &.pre-top,
    &.in-top {
      animation-delay: var(--anim-in-delay);
      animation-name: inTop;
      transition: color 250ms ease-out var(--anim-in-delay);
    }

    &.pre-bottom,
    &.in-bottom {
      animation-delay: var(--anim-in-delay);
      animation-name: inBottom;
      transition: color 250ms ease-out var(--anim-in-delay);
    }

    &.out-top {
      animation-delay: var(--anim-out-delay);
      animation-duration: var(--anim-out-duration);
      animation-name: outTop;
      animation-timing-function: ease-in;
      transition: color var(--anim-out-duration) ease-out var(--anim-out-delay);
    }

    &.out-bottom {
      animation-delay: var(--anim-out-delay);
      animation-duration: var(--anim-out-duration);
      animation-name: outBottom;
      animation-timing-function: ease-in;
      transition: color var(--anim-out-duration) ease-out var(--anim-out-delay);
    }
  }

  .letterPath {
    fill: currentColor;
    stroke: currentColor;
  }
</style>
