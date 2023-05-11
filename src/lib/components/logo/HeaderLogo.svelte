<script>
  import Letter from './Letter.svelte';
  import { uniqueRandomThemeColors } from '$lib/utils';

  const picked = uniqueRandomThemeColors(2);
</script>

<div class="HeaderLogo">
  <Letter color={picked[0]} letter="p" />
  <Letter color={picked[0]} letter="i" />
  <Letter color={picked[0]} letter="x" />
  <Letter color={picked[0]} letter="e" />
  <Letter color={picked[0]} letter="l" />
  <Letter color={picked[1]} letter="b" />
  <Letter color={picked[1]} letter="r" />
  <Letter color={picked[1]} letter="e" />
  <Letter color={picked[1]} letter="a" />
  <Letter color={picked[1]} letter="k" />
  <Letter color={picked[1]} letter="e" />
  <Letter color={picked[1]} letter="r" />
</div>

<style lang="scss">
  .HeaderLogo {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    transform: scale(0.8, 0.8);
    transform-origin: left;
    margin-left: 1rem;
  }
</style>
