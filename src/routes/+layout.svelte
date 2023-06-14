<script>
  import '$lib/css/fonts.postcss';
  import '../app.postcss';
  import Splash from '$lib/components/logo/Splash.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    const theme = window.localStorage.getItem('theme');

    if (theme) {
      document.documentElement.classList.add(theme);
    }
    setTimeout(() => {
      document.documentElement.classList.add('loaded');
    }, 10);
  });
</script>

<Splash />
<Header />
<div class="Contents">
  <slot />
</div>
<Footer />

<style>
  .Contents {
    flex: 2 0 auto;
  }
</style>
