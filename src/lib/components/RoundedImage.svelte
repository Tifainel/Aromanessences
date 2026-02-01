<script>
  import { scrollToElement } from '$lib/utils/scroll.js';

  export let imgSrc;
  export let link;
  export let alt = '';

  function handleClick() {
    scrollToElement(link);
  }
</script>

<button class="image-container" on:click={handleClick}>
  <img src={imgSrc} class="rounded-image" alt={alt || 'Image de catégorie'} />
  <span class="label"><slot /></span>
</button>

<style lang="scss">
  .image-container {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      transform: translateY(-5px);

      .rounded-image {
        box-shadow: 22px 4px 0px 5px $secondary3;
      }

      .label {
        color: $secondary1;
      }
    }
  }

  .rounded-image {
    width: 230px;
    border-radius: 100%;
    box-shadow: 18px 2px 0px 5px $secondary3;
    transition: all 0.3s ease;
  }

  .label {
    font-size: 20px;
    font-weight: 500;
    font-family: $titleFont;
    transition: color 0.3s ease;
    margin-top: 15px;
    display: block;
  }

  @media screen and (max-width: $mobileBreakpoint) {
    .rounded-image {
      width: 100px;
      box-shadow: 10px 2px 0px 5px $secondary3;
    }

    .label {
      font-size: 16px;
    }
  }
</style>
