<template>
  <div class="welcome-section">
    <h1>AROMANESSENCES</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <CustomButton>Bouton test</CustomButton>
    <div class="categories">
      <RoundedImage :imgSrc="massageImg" class="first-image">
        Massage assis
      </RoundedImage>
      <RoundedImage :imgSrc="oilsImg">Huiles essentielles</RoundedImage>
    </div>
  </div>
</template>

<script>
import CustomButton from './CustomButton.vue';
import RoundedImage from './RoundedImage.vue';
import massageImg from '../assets/massage.jpg';
import oilsImg from '../assets/huile-essentielle.jpg';

export default {
  name: 'WelcomeSection',
  components: { CustomButton, RoundedImage },
  data() {
    return {
      massageImg,
      oilsImg,
    };
  },
};
</script>

<style lang="scss" scoped>
.welcome-section {
  padding: 20px;
  background-color: $primary;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 20% 70px 20%;
  position: relative;
}
h1 {
  font-size: 50px;
  margin: 0;
}
.categories {
  position: absolute;
  width: 70%;
  background-color: white;
  top: 280px;
  box-shadow: 1px 1px 24px 5px rgba(0, 0, 0, 0.1);
  padding: 50px 30px 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.first-image {
  margin-right: 100px;
}

@media screen and (max-width: $mobileBreakpoint) {
  h1 {
    font-size: 30px;
  }
  .categories {
    top: 90%;
    padding: 30px;
    flex-direction: column;
  }
  .first-image {
    margin: 0 0 20px 0;
  }
}
</style>
