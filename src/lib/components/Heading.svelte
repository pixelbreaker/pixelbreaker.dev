<script>
  let className = '';

  export { className as class };
</script>

<div
  class="mt-6 inline-block border-b pb-1 font-heading text-4xl xl:text-5xl font-semibold tracking-tighter {className}"
>
  <slot />
</div>
