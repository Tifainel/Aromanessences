<script>
  import { scrollToElement } from '$lib/utils/scroll.js';

  export let link;
  let className = '';
  export { className as class };

  function handleClick() {
    scrollToElement(link);
  }
</script>

<button class={className} on:click={handleClick}><slot /></button>

<style lang="scss">
  button {
    background: none;
    border: 2px solid $secondary1;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 14px 24px;
    cursor: pointer;
    font-size: 16px;
    color: $secondary1;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      border-color: $secondary1;
      color: #fff;
      background-color: $secondary1;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(157, 168, 130, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  }
</style>
