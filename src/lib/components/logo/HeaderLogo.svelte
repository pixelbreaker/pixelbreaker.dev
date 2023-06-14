<script>
  import Letter from './Letter.svelte';

  export let classname = '';
</script>

<div class="HeaderLogo {classname}">
  <Letter letter="p" classname="no-transition" />
  <Letter letter="i" classname="no-transition" />
  <Letter letter="x" classname="no-transition" />
  <Letter letter="e" classname="no-transition" />
  <Letter letter="l" classname="no-transition" />
  <Letter letter="b" classname="no-transition" />
  <Letter letter="r" classname="no-transition" />
  <Letter letter="e" classname="no-transition" />
  <Letter letter="a" classname="no-transition" />
  <Letter letter="k" classname="no-transition" />
  <Letter letter="e" classname="no-transition" />
  <Letter letter="r" classname="no-transition" />
</div>

<style lang="scss">
  .HeaderLogo {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    transform: scale(0.5, 0.5);
    transform-origin: left;
  }
</style>
