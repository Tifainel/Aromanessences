<script>
  import { windowSize } from '$lib/stores/window.js';
  import { scrollToElement } from '$lib/utils/scroll.js';
  import logo from '$lib/assets/logo.webp';
  import ButtonLink from './ButtonLink.svelte';

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenuAndNavigate(sectionId) {
    menuOpen = false;
    scrollToElement(sectionId);
  }
</script>

<header class="header" role="banner">
  <div class="left-part">
    <button class="logo-button" on:click={() => scrollToElement('app')} aria-label="Retour à l'accueil">
      <img src={logo} class="logo" alt="Logo Aromanessences" />
    </button>
  </div>
  {#if $windowSize.width >= 700}
    <nav class="right-part" aria-label="Navigation principale">
      <a href="#oils">Huiles essentielles</a>
      <a href="#bach">Fleurs de bach</a>
      <a href="#massage">Massage assis</a>
      <a href="#tarif">Tarifs</a>
      <ButtonLink small class="button-position" link="#contact">
        Prendre RDV
      </ButtonLink>
    </nav>
  {:else}
    <button
      class="burger-button"
      on:click={toggleMenu}
      aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      aria-expanded={menuOpen}
    >
      <span class="burger-line" class:open={menuOpen}></span>
      <span class="burger-line" class:open={menuOpen}></span>
      <span class="burger-line" class:open={menuOpen}></span>
    </button>
  {/if}
</header>

{#if $windowSize.width < 700}
  <nav
    class="mobile-menu"
    class:open={menuOpen}
    aria-label="Navigation mobile"
    aria-hidden={!menuOpen}
  >
    <a href="#oils" on:click|preventDefault={() => closeMenuAndNavigate('oils')}>Huiles essentielles</a>
    <a href="#bach" on:click|preventDefault={() => closeMenuAndNavigate('bach')}>Fleurs de bach</a>
    <a href="#massage" on:click|preventDefault={() => closeMenuAndNavigate('massage')}>Massage assis</a>
    <a href="#tarif" on:click|preventDefault={() => closeMenuAndNavigate('tarif')}>Tarifs</a>
    <a href="#contact" on:click|preventDefault={() => closeMenuAndNavigate('contact')} class="cta-mobile">
      Prendre RDV
    </a>
  </nav>
{/if}

<style lang="scss">
  .header {
    padding: 12px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    max-width: 100%;
    overflow-x: hidden;
    z-index: 100;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .logo-button {
    background: none;
    border: none;
    padding: 0;
    margin-right: 10px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .logo {
    width: 55px;
    display: block;
  }

  .left-part {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-part {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  a {
    text-decoration: none;
    color: $titleColor;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 400;
    transition: all 0.25s ease;
    position: relative;

    &:hover {
      color: $secondary1;
      background-color: rgba(157, 168, 130, 0.1);
    }
  }

  // Burger button
  .burger-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 101;
  }

  .burger-line {
    width: 24px;
    height: 2px;
    background-color: $titleColor;
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;

    &.open:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    &.open:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }

    &.open:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  }

  // Mobile menu
  .mobile-menu {
    position: fixed;
    top: 69px;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 99;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    &.open {
      max-height: 350px;
      opacity: 1;
      padding: 20px;
    }

    a {
      padding: 15px 20px;
      font-size: 16px;
      text-align: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      transition: all 0.25s ease;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: rgba(157, 168, 130, 0.15);
      }
    }

    .cta-mobile {
      margin-top: 10px;
      background-color: $secondary1;
      color: white;
      border-radius: 8px;
      font-weight: 500;
      border-bottom: none;

      &:hover {
        background-color: darken($secondary1, 8%);
        color: white;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .header {
      padding: 12px 20px;
    }

    .logo {
      width: 45px;
    }
  }
</style>
