<script>
  import Img from '@zerodevx/svelte-img';

  export let src;
  export let alt = 'Image';
  let className = '';

  export { className as class };
</script>

<div
  class="overflow-hidden rounded-md shadow-sm shadow-slate-500 dark:shadow-slate-100 {className}"
>
  {#if src !== undefined}
    <Img {src} {alt} />
  {/if}
</div>

<style lang="scss">
</style>
