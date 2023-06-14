<script>
  import DarkMode from 'svelte-icons/io/IoIosMoon.svelte';
  import LightMode from 'svelte-icons/io/IoIosSunny.svelte';
  let body;

  const setTheme = (theme) => {
    if (!document) return;

    window.localStorage.setItem('theme', theme);

    switch (theme) {
      case 'light':
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        break;
      case 'dark':
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        break;
    }
  };
</script>

<button on:click={() => setTheme('dark')} class="ThemeSwitch dark"><DarkMode /></button>
<button on:click={() => setTheme('light')} class="ThemeSwitch light"><LightMode /></button>

<style lang="scss">
  .ThemeSwitch {
    background-color: transparent;
    color: var(--col-forth);
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

  :global(html.light) {
    .ThemeSwitch {
      &.dark {
        display: inline-block;
      }
      &.light {
        display: none;
      }
    }
  }

  :global(html.dark) {
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
