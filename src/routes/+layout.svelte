<script>
  import '../app.scss';
  import Splash from '$lib/components/logo/Splash.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    const theme = window.localStorage.getItem('theme');

    if (theme) {
      document.body.classList.add(theme);
    }
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 10);
  });
</script>

<Splash />
<Header />
<div class="Contents">
  <slot />
</div>
<Footer />

<style lang="scss">
  .Contents {
    flex: 2 0 auto;
  }
</style>
