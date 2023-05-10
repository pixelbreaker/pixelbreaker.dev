<script>
  import MdBrightness4 from 'svelte-icons/md/MdBrightness4.svelte';
  import MdBrightness5 from 'svelte-icons/md/MdBrightness5.svelte';
  let body;

  const setTheme = (theme) => {
    if (!document) return;

    window.localStorage.setItem('theme', theme);

    switch (theme) {
      case 'light':
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        break;
      case 'dark':
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        break;
    }
  };
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<button on:click={() => setTheme('dark')} class="ThemeSwitch dark"><MdBrightness4 /></button>
<!-- svelte-ignore a11y-invalid-attribute -->
<button on:click={() => setTheme('light')} class="ThemeSwitch light"><MdBrightness5 /></button>

<style lang="scss">
  .ThemeSwitch {
    background-color: transparent;
    color: var(--col-teal);
    cursor: pointer;
    height: 48px;
    transition: color 200ms ease;
    width: 48px;

    &:hover {
      color: var(--col-text);
    }

    &.dark {
      display: none;
    }
  }

  @media (prefers-color-scheme: dark) {
    .ThemeSwitch {
      &.dark {
        display: none;
      }
      &.light {
        display: inline-block;
      }
    }
  }

  @media (prefers-color-scheme: light) {
    .ThemeSwitch {
      &.dark {
        display: inline-block;
      }
      &.light {
        display: none;
      }
    }
  }

  :global(body.light) {
    .ThemeSwitch {
      &.dark {
        display: inline-block;
      }
      &.light {
        display: none;
      }
    }
  }

  :global(body.dark) {
    .ThemeSwitch {
      &.dark {
        display: none;
      }
      &.light {
        display: inline-block;
      }
    }
  }
</style>
