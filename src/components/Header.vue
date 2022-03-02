<template>
  <div class="header">
    <div class="left-part">
      <img :src="logo" class="logo" v-on:click="scroll('app')" alt="logo" />
    </div>
    <div class="right-part" v-show="window.width >= 700">
      <a href="#massage">Massage assis</a>
      <a href="#oils">Huiles essentielles</a>
      <a href="#bach">Fleurs de bach</a>
      <a href="#tarif">Tarifs</a>
      <a href="#contact">Contact</a>
    </div>
    <!-- <nav role="navigation" v-show="window.width < 570">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="#massage"><li>Massage assis</li></a>
          <a href="#oils"><li>Huiles essentielles</li></a>
          <a href="#bach"><li>Fleurs de bach</li></a>
          <a href="#tarif"><li>Tarifs</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
      </div>
    </nav> -->
  </div>
</template>

<script>
import logo from '../assets/logo.png';

export default {
  name: 'Header',

  data() {
    return {
      logo,
      window: {
        width: 0,
        height: 0,
      },
    };
  },

  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    scroll(link) {
      const elmnt = document.getElementById(link);
      elmnt.scrollIntoView();
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 10px 30px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: white;
  max-width: 100%;
  overflow-x: hidden;
  z-index: 1;
}
.title {
  font-size: 20px;
}
.logo {
  width: 50px;
  margin-right: 10px;
  cursor: pointer;
}
.left-part {
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-part {
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
  color: black;
  cursor: pointer;
  margin-right: 20px;
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    color: $secondary1;
  }
}

//burger menu CSS
#menuToggle {
  display: block;
  position: relative;
  top: 15px;
  right: 0;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a {
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
}

#menuToggle a:hover {
  color: $secondary1;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  right: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -100px;
  padding: 50px;
  padding-top: 125px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  right: -30px;
}

#menu li {
  padding: 10px 0;
  font-size: 18px;
}

#menuToggle input:checked ~ ul {
  transform: none;
}
</style>
