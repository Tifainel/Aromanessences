<script>
  import Fa from 'svelte-fa';
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

  export let link;
  export let small = false;
</script>

<a href={link} class:small>
  <slot />
  <span class="icon"><Fa icon={faArrowRight} /></span>
</a>

<style lang="scss">
  a {
    background: none;
    border: 2px solid $secondary1;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 16px 28px;
    cursor: pointer;
    font-size: 17px;
    text-decoration: none;
    color: $secondary1;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    gap: 10px;

    .icon {
      transition: transform 0.3s ease;
    }

    &:hover {
      border-color: $secondary1;
      color: #fff;
      background-color: $secondary1;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(157, 168, 130, 0.35);

      .icon {
        transform: translateX(4px);
      }
    }

    &:active {
      transform: translateY(0);
    }

    &.small {
      padding: 10px 18px;
      font-size: 14px;
      gap: 8px;
      border-radius: 6px;

      &:hover {
        box-shadow: 0 6px 18px rgba(157, 168, 130, 0.3);
      }
    }
  }
</style>
