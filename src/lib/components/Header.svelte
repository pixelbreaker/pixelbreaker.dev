<script>
  import Container from './Container.svelte';
  import HeaderLogo from './logo/HeaderLogo.svelte';
</script>

<site-header class="SiteHeader">
  <Container>
    <header>
      <HeaderLogo />
    </header>
  </Container>
</site-header>

<style lang="scss">
  .SiteHeader {
    align-items: center;
    background-color: var(--col-header-bkg);
    border-bottom: 2px solid var(--col-edge);
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;
    height: var(--header-height);
    transition: background-color 500ms linear;
  }
</style>
