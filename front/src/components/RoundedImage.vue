<template>
  <div>
    <img :src="imgSrc" class="rounded-image" />
    <h3><slot></slot></h3>
  </div>
</template>

<script>
export default {
  name: 'RoundedImage',
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.rounded-image {
  width: 230px;
  border-radius: 100%;
  box-shadow: 20px 2px 0px 5px $secondary3;
  cursor: pointer;
}

@media screen and (max-width: $mobileBreakpoint) {
  .rounded-image {
    width: 100px;
    box-shadow: 10px 2px 0px 5px $secondary3;
  }
}
</style>