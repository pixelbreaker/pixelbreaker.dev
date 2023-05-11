<script>
  import Letter from './Letter.svelte';
  import { uniqueRandomThemeColors } from '$lib/utils';

  const [pixel, breaker] = uniqueRandomThemeColors(2);
</script>

<div class="HeaderLogo">
  <Letter letter="p" />
  <Letter letter="i" />
  <Letter letter="x" />
  <Letter letter="e" />
  <Letter letter="l" />
  <Letter letter="b" />
  <Letter letter="r" />
  <Letter letter="e" />
  <Letter letter="a" />
  <Letter letter="k" />
  <Letter letter="e" />
  <Letter letter="r" />
</div>

<style lang="scss">
  .HeaderLogo {
    display: none;

    @include md-up {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      transform: scale(0.5, 0.5);
      transform-origin: left;
    }
  }
</style>
