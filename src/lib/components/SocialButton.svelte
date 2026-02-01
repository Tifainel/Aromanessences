<script>
  import Fa from 'svelte-fa';
  import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

  export let socialType;
  export let link;

  $: icon = socialType === 'instagram' ? faInstagram : faFacebookF;
  $: label = socialType === 'instagram' ? 'Suivez-nous sur Instagram' : 'Suivez-nous sur Facebook';

  function redirect() {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
</script>

<button on:click={redirect} aria-label={label} title={label}>
  <Fa {icon} />
</button>

<style lang="scss">
  button {
    background: none;
    border: 2px solid $secondary1;
    border-radius: 100%;
    height: 48px;
    width: 48px;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    cursor: pointer;
    font-size: 22px;
    color: $secondary1;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border-color: $secondary1;
      color: #fff;
      background-color: $secondary1;
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 8px 20px rgba(157, 168, 130, 0.35);
    }

    &:active {
      transform: translateY(0) scale(1);
    }
  }
</style>
