<template>
  <div>
    <svg
      v-if="shape === 1"
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <path
        :fill="shapeColor"
        d="M15.5,-19.8C21.3,-17.1,28.2,-14.2,32.4,-8.8C36.6,-3.3,38,4.7,33.8,8.9C29.7,13.1,19.8,13.5,13.3,17.3C6.7,21.2,3.3,28.7,-1,30C-5.3,31.3,-10.6,26.6,-13.2,21.4C-15.9,16.3,-15.8,10.7,-19.1,5.1C-22.4,-0.4,-29,-6,-28.4,-9.6C-27.8,-13.3,-19.9,-15,-14,-17.7C-8.1,-20.4,-4,-24.2,0.4,-24.8C4.8,-25.3,9.6,-22.6,15.5,-19.8Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        style="transition: all 0.3s ease 0s"
        stroke-width="0"
        :stroke="shapeColor"
      ></path>
    </svg>
    <svg
      v-if="shape === 2"
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <path
        :fill="shapeColor"
        d="M18.5,-13.4C22.7,-3.4,24,5.6,20.4,13.9C16.8,22.3,8.4,30,1.2,29.3C-6,28.6,-12,19.5,-12.2,13C-12.5,6.6,-7,2.9,-4,-6.4C-1,-15.7,-0.5,-30.5,3.3,-32.4C7.2,-34.3,14.3,-23.4,18.5,-13.4Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        style="transition: all 0.3s ease 0s"
        stroke-width="0"
        :stroke="shapeColor"
      ></path>
    </svg>
    <svg
      v-if="shape === 3"
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <path
        :fill="shapeColor"
        d="M16,-25.5C21.6,-21.4,27.4,-18.3,30,-13.5C32.6,-8.6,32,-2.1,32,5.3C32,12.6,32.6,20.7,28.4,23.4C24.2,26.1,15.1,23.3,7.7,24.9C0.3,26.4,-5.4,32.3,-12.5,34.1C-19.5,35.9,-27.9,33.6,-30.9,28C-33.9,22.3,-31.6,13.3,-29.5,6.2C-27.5,-0.9,-25.8,-5.9,-23.9,-11.3C-22,-16.6,-19.9,-22.2,-15.9,-27C-11.9,-31.8,-6,-35.8,-0.4,-35.3C5.2,-34.7,10.5,-29.6,16,-25.5Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        style="transition: all 0.3s ease 0s"
        stroke-width="0"
        :stroke="shapeColor"
      ></path>
    </svg>
    <svg
      v-if="shape === 4"
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <path
        :fill="shapeColor"
        d="M28.1,-31.2C36.1,-26.8,42.2,-17.6,42,-8.9C41.7,-0.1,35.3,8.3,29.2,14.9C23,21.5,17.2,26.3,10.2,29.5C3.1,32.8,-5,34.5,-10.7,31.5C-16.4,28.5,-19.5,20.8,-18.8,14.5C-18,8.2,-13.2,3.4,-14.6,-4.9C-15.9,-13.2,-23.3,-24.9,-21.9,-30.6C-20.5,-36.2,-10.3,-35.8,-0.1,-35.7C10,-35.5,20.1,-35.7,28.1,-31.2Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        style="transition: all 0.3s ease 0s"
        stroke-width="0"
        :stroke="shapeColor"
      ></path>
    </svg>
    <svg
      v-if="shape === 5"
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        :fill="shapeColor"
        d="M13.1,-13.6C19.4,-10.4,28.4,-8.5,32.1,-3.4C35.7,1.8,34,10.2,30.4,18.8C26.9,27.3,21.6,36.1,15.6,34.8C9.5,33.6,2.7,22.4,-0.3,15C-3.3,7.7,-2.5,4.4,-6.3,1.7C-10.1,-0.9,-18.5,-2.8,-22.1,-7.7C-25.7,-12.5,-24.6,-20.3,-20.2,-23.7C-15.7,-27.2,-7.8,-26.3,-2.2,-23.7C3.4,-21,6.9,-16.7,13.1,-13.6Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        style="transition: all 0.3s ease 0s"
        stroke-width="0"
        :stroke="shapeColor"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Organic',
  props: {
    color: {
      type: String,
      required: true,
    },
    shape: {
      type: Number,
      required: true,
    },
  },
  computed: {
    shapeColor() {
      if (this.color === 'green') return '#9DA882';
      if (this.color === 'blue') return '#ACC5D2';
      else return '#F5DDC7';
    },
  },
};
</script>
