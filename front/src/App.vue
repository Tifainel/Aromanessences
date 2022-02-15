<template>
  <div id="app">
    <Header />
    <WelcomeSection />
  </div>
</template>

<script>
import Header from '../src/components/Header.vue';
import WelcomeSection from '../src/components/WelcomeSection.vue';

export default {
  name: 'App',
  components: { Header, WelcomeSection },
};
</script>

<style lang="scss">
#app {
  font-family: $textFont;
  font-weight: 300;
  h1 {
    font-family: $titleFont;
    font-weight: 700;
    color: $titleColor;
  }
}
body {
  margin: 0;
}
</style>
