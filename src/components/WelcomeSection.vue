<template>
  <div class="welcome-section">
    <img :src="flower" class="flower1" />
    <img :src="flower" class="flower2" />
    <h1>AROMANESSENCES</h1>
    <h3>
      Fournisseur de bien être : Conseillère en Huiles Essentielles, praticienne
      en Fleurs de Bach et praticienne en massage assis AMMA.
    </h3>
    <img src="../assets/separator.png" class="separator" alt="separator" />
    <p>
      Aromanessences vous permet une approche différente du bien être physique,
      psychique et émotionnel grâce aux huiles essentielles, hydrolats, huiles
      végétales, fleurs de bach et la pratique du massage assis dit AMMA. Qui
      peut se pratiquer en cabinet, à domicile, en entreprise, lors de
      manifestations .... Je vous accompagne dans un bien être total grâce au
      mariage de toutes ces pratiques.
    </p>
    <ButtonLink link="https://fr.resaclick.net/aromanessencesnathal">Prendre RDV</ButtonLink>
    <div class="categories">
      <RoundedImage
        :imgSrc="massageImg"
        link="massage"
        data-aos="fade-down"
      >
        Massage assis
      </RoundedImage>
      <RoundedImage
        :imgSrc="oilsImg"
        link="oils"
        data-aos="fade-down"
      >
        Huiles essentielles
      </RoundedImage>
      <RoundedImage :imgSrc="bachImg" link="bach" data-aos="fade-down">
        Fleurs de bach
      </RoundedImage>
      <RoundedImage
        :imgSrc="signatureImg"
        link="signature-soin"
        data-aos="fade-down"
      >
        Soin signature
      </RoundedImage>
    </div>
  </div>
</template>

<script>
import ButtonLink from './ButtonLink.vue';
import RoundedImage from './RoundedImage.vue';
import massageImg from '../assets/massage.jpg';
import oilsImg from '../assets/oils.jpg';
import flower from '../assets/flower.png';
import bachImg from '../assets/flower.jpg';
import signatureImg from '../assets/signature-soin.jpg';

export default {
  name: 'WelcomeSection',
  components: { ButtonLink, RoundedImage },
  data() {
    return {
      massageImg,
      oilsImg,
      flower,
      bachImg,
      signatureImg,
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
  width: 80%;
  background-color: white;
  top: 450px;
  gap: 70px;
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

.organic1 {
  position: absolute;
  top: 100px;
  left: -190px;
  width: 500px;
}

.organic2 {
  position: absolute;
  top: -50px;
  transform: rotate(90deg);
  right: -190px;
  width: 500px;
}
.flower1 {
  position: absolute;
  width: 100px;
  top: 0;
  right: 0;
}
.flower2 {
  position: absolute;
  width: 100px;
  top: 0;
  left: 0;
  transform: scaleX(-1);
}

.buttons {
  display: flex;  
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
    gap: 20px;
    flex-direction: column;
  }
  .organic1,
  .organic2 {
    display: none;
  }
}
</style>
