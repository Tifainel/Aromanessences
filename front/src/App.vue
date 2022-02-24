<template>
  <div id="app">
    <Header />
    <WelcomeSection />
    <InformationsSection />
    <PricesSection />
    <AppointmentSection />
    <WarningSection />
  </div>
</template>

<script>
import Header from '../src/components/Header.vue';
import WelcomeSection from '../src/components/WelcomeSection.vue';
import InformationsSection from '../src/components/InformationsSection.vue';
import PricesSection from '../src/components/PricesSection.vue';
import AppointmentSection from '../src/components/AppointmentSection.vue';
import WarningSection from '../src/components/WarningSection.vue';

export default {
  name: 'App',
  components: {
    Header,
    WelcomeSection,
    InformationsSection,
    PricesSection,
    AppointmentSection,
    WarningSection,
  },
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
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
}
</style>
