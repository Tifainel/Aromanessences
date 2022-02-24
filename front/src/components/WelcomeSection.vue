<template>
  <div class="welcome-section">
    <h1>AROMANESSENCES</h1>
    <h3>
      Fournisseur de bien être : Conseillère en Huiles Essentielles, praticienne
      en Fleurs de Bach et praticienne en massage assis AMMA.
    </h3>
    <img src="../assets/separator.png" class="separator" />
    <p>
      Aromanessences vous permet une approche différente du bien être physique,
      psychique et émotionnel grâce aux huiles essentielles, hydrolats, huiles
      végétales, fleurs de bach et la pratique du massage assis dit AMMA. Qui
      peut se pratiquer en cabinet, à domicile, en entreprise, lors de
      manifestations .... Je vous accompagne dans un bien être total grâce au
      mariage de toutes ces pratiques.
    </p>
    <CustomButton link="contact">Contact</CustomButton>
    <div class="categories">
      <RoundedImage
        :imgSrc="massageImg"
        link="massage"
        class="first-image"
        data-aos="fade-down"
      >
        Massage assis
      </RoundedImage>
      <RoundedImage
        :imgSrc="oilsImg"
        link="oils"
        class="first-image"
        data-aos="fade-down"
      >
        Huiles essentielles
      </RoundedImage>
      <RoundedImage :imgSrc="oilsImg" link="bach" data-aos="fade-down"
        >Fleurs de bach</RoundedImage
      >
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
  padding: 50px 25% 170px 25%;
  position: relative;
}
h1 {
  font-size: 70px;
  margin: 0;
}
.categories {
  position: absolute;
  width: 70%;
  background-color: white;
  top: 450px;
  box-shadow: 1px 1px 24px 5px rgba(0, 0, 0, 0.1);
  padding: 50px 30px 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.first-image {
  margin-right: 100px;
}
.separator {
  width: 50px;
}

@media screen and (max-width: $mobileBreakpoint) {
  h1 {
    font-size: 30px;
  }
  .welcome-section {
    padding: 50px 15% 170px 15%;
  }
  .categories {
    top: 85%;
    padding: 30px;
    flex-direction: column;
  }
  .first-image {
    margin: 0 0 20px 0;
  }
}
</style>
