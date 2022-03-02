<template>
  <button v-on:click="scroll"><slot></slot></button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    scroll() {
      const elmnt = document.getElementById(this.link);
      elmnt.scrollIntoView();
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background: none;
  border: 2px solid;
  border-color: $secondary1;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 15px 25px;
  cursor: pointer;
  font-size: 18px;
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
</style>
