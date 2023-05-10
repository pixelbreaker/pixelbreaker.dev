<script>
  import { onMount } from 'svelte';
  import Letter from './Letter.svelte';
  import Mask from './Mask.svelte';

  let animState = 'pre';

  function d(duration = 800, offset = 0) {
    return `${offset + Math.round(Math.random() * duration)}ms`;
  }

  const animDur = 500;
  const animOff = 450;

  let maskTop, maskBottom;

  const colors = ['--col-blue', '--col-violet', '--col-teal', '--col-brown', '--col-yellow'];
  const picked = [].concat(
    colors.splice(~~(Math.random() * colors.length - 1), 1),
    colors.splice(~~(Math.random() * colors.length - 1), 1),
    colors.splice(~~(Math.random() * colors.length - 1), 1),
    colors.splice(~~(Math.random() * colors.length - 1), 1)
  );

  const words = [
    [
      { char: 'p', delay: d(), duration: d(animDur, animOff) },
      { char: 'i', delay: d(), duration: d(animDur, animOff) },
      { char: 'x', delay: d(), duration: d(animDur, animOff) },
      { char: 'e', delay: d(), duration: d(animDur, animOff) },
      { char: 'l', delay: d(), duration: d(animDur, animOff) }
    ],
    [
      { char: 'b', delay: d(500, 600), duration: d(animDur, animOff) },
      { char: 'r', delay: d(500, 600), duration: d(animDur, animOff) },
      { char: 'e', delay: d(500, 600), duration: d(animDur, animOff) },
      { char: 'a', delay: d(500, 600), duration: d(animDur, animOff) },
      { char: 'k', delay: d(500, 600), duration: d(animDur, animOff) },
      { char: 'e', delay: d(500, 600), duration: d(animDur, animOff) },
      { char: 'r', delay: d(500, 600), duration: d(animDur, animOff) }
    ]
  ];

  onMount(() => {
    if (window.sessionStorage.getItem('viewedSplash')) {
      animState = 'done';
    } else {
      setTimeout(() => {
        animState = 'in';
      }, 100);
      setTimeout(() => {
        animState = 'out';
        maskTop.animate();
        maskBottom.animate();
        window.sessionStorage.setItem('viewedSplash', true);
      }, 3000);
      setTimeout(() => {
        animState = 'done';
      }, 5500);
    }
  });
</script>

{#if animState !== 'done'}
  <div class="ViewportContainer">
    <Mask classname="top" bind:this={maskTop} />
    <Mask classname="bottom" bind:this={maskBottom} />
    <div class="AnimationContainer">
      {#each words as word, i}
        <div class="AnimationWord">
          {#each word as letter, j}
            <Letter
              letter={letter.char}
              --anim-in-delay="{130 + i * 500 + (i === 1 ? words[i].length - j : j) * 120}ms"
              --anim-out-delay={letter.delay}
              --anim-out-duration={letter.duration}
              color={picked[animState === 'in' ? i : i + 2]}
              classname="{animState}-{i === 0 ? 'top' : 'bottom'}"
            />
          {/each}
        </div>
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">
  :global(body:not(.loaded)) {
    display: none;
  }

  .ViewportContainer {
    height: 100vh;
    overflow: hidden;
    position: absolute;
    width: 100vw;
  }

  .AnimationContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .AnimationWord {
    display: flex;
    flex-direction: row;
    margin: 0 0 4px;
  }
</style>
