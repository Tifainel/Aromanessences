<template>
  <button v-on:click="redirect" target="_blank">
    <font-awesome-icon
      icon="fa-brands fa-instagram"
      class="icon"
      v-if="socialType === 'instagram'"
    />
    <font-awesome-icon
      icon="fa-brands fa-facebook-f"
      class="icon"
      v-if="socialType === 'facebook'"
    />
  </button>
</template>

<script>
export default {
  name: 'SocialButton',
  props: {
    socialType: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    redirect() {
      window.open(this.link);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background: none;
  border: 2px solid;
  border-color: $secondary1;
  border-radius: 100%;
  height: 45px;
  width: 45px;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  cursor: pointer;
  font-size: 25px;
}
.slide:hover,
.slide:focus {
  box-shadow: inset 6.5em 0 0 0 var(--hover);
}

button {
  color: $secondary1;
  transition: 0.25s;
  &:hover {
    border-color: adjust-hue($secondary1, 0deg);
    color: #fff;
    background-color: $secondary1;
  }
}
// .icon {
//   color: $secondary1;
// }
</style>
