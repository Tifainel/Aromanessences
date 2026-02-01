<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  onMount(async () => {
    if (browser) {
      const AOS = (await import('aos')).default;
      await import('aos/dist/aos.css');
      AOS.init();
    }
  });
</script>

<slot />

<style lang="scss" global>
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    overflow-x: clip;
    max-width: 100vw;
    line-height: 1.7;
  }

  /* Offset for sticky header when scrolling to anchors */
  [id] {
    scroll-margin-top: 90px;
  }

  #app {
    font-family: $textFont;
    font-weight: 300;

    h1 {
      font-family: $titleFont;
      font-weight: 700;
      color: $titleColor;
      letter-spacing: 0.05em;
    }

    h2 {
      font-family: $titleFont;
      letter-spacing: 0.03em;
    }

    h3 {
      font-family: $titleFont;
      letter-spacing: 0.02em;
    }

    p {
      line-height: 1.8;
      color: $textColor;
    }
  }
</style>
