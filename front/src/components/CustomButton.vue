<template>
  <button class="button-52"><slot></slot></button>
</template>

<script>
export default {
  name: 'CustomButton',
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
  padding: 1em 2em;
  cursor: pointer;
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
