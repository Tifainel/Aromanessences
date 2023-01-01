<template>
    <a :href="link" target="blank"><slot></slot></a>
</template>
  
  <script>
  export default {
    name: 'ButtonLink',
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
  a {
    background: none;
    border: 2px solid;
    border-color: $secondary1;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 15px 25px;
    cursor: pointer;
    font-size: 18px;
    text-decoration: none;
  }
  .slide:hover,
  .slide:focus {
    box-shadow: inset 6.5em 0 0 0 var(--hover);
  }
  
  a {
    color: $secondary1;
    transition: 0.25s;
    &:hover {
      border-color: adjust-hue($secondary1, 0deg);
      color: #fff;
      background-color: $secondary1;
    }
  }
  </style>
  