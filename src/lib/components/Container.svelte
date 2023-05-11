<div class="Container">
  <slot />
</div>

<style lang="scss">
  .Container {
    width: 100%;

    @include md-up {
      max-width: #{$breakpoint-md};
      margin: 0 auto;
    }
  }
</style>
