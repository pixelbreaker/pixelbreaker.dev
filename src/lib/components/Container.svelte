<script>
  export let padded = true;
  export let className = '';

  export { className as class };
</script>

<div class="container {padded ? 'pd-1 sm:pd-2 md:pd-4 xl:pd-5 2xl:pd-6 pt-8' : ''} {className}">
  <slot />
</div>
