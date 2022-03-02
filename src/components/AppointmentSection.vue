<template>
  <div class="appointment-section" id="contact">
    <h2>CONTACT</h2>
    <img src="../assets/separator.png" class="separator" alt="separator" />
    <div class="sections">
      <div class="left">
        <img src="../assets/profile.jpg" class="profile-img" alt="separator" />
        <h3>Qui suis-je ?</h3>
        <p>
          En tant qu'aromatologue j'accompagne et conseille des professionnels
          de la santé tels que, kinésithérapeutes, ostéopathes, masseurs, des
          associations sportives, mais aussi des particuliers dans l'approche et
          l'application des huiles essentielles et fleurs de Bach au quotidien,
          en prévention et également en soutient de traitements allopathiques.
          Pour le bien être et le confort de tous les jours.
        </p>
        <p class="contacts">
          <font-awesome-icon icon="fa-solid fa-phone" class="icon-margin" />
          <b>06.81.17.43.00</b>
        </p>
        <br />
        <p class="contacts">
          <font-awesome-icon icon="fa-solid fa-at" class="icon-margin" /><b
            >aromanessences@gmail.com</b
          >
        </p>
        <br />
        <SocialButton
          socialType="instagram"
          link="https://www.instagram.com/aromanessences_nathalie_barrau/?hl=fr"
          data-aos="fade-down"
        />
        <SocialButton
          socialType="facebook"
          link="https://www.facebook.com/nathalie.barrau.aromanessences"
          data-aos="fade-down"
        />
      </div>
      <div class="right">
        <Map />
      </div>
    </div>
  </div>
</template>

<script>
import Map from './Map.vue';
import SocialButton from './SocialButton.vue';

export default {
  name: 'AppointmentSection',
  components: {
    SocialButton,
    Map,
  },
};
</script>

<style lang="scss" scoped>
.appointment-section {
  text-align: center;
  padding: 0 100px;
}
h2 {
  font-size: 40px;
  text-align: center;
  margin-bottom: 10px;
  font-family: $titleFont;
}
p {
  padding: 0 100px;
}
.sections {
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
}
.left {
  width: 60%;
}
.profile-img {
  border-radius: 100%;
  width: 160px;
}
.right {
  width: 40%;
}
.contacts {
  margin: 0;
}
.separator {
  width: 50px;
  margin-bottom: 40px;
}
.icon-margin {
  margin-right: 10px;
}
@media screen and (max-width: $mobileBreakpoint) {
  .sections {
    flex-direction: column;
  }
  .appointment-section {
    text-align: center;
    padding: 0 40px;
  }
  p {
    padding: 0;
  }
  .left {
    width: 100%;
  }
  .right {
    height: 400px;
    width: 100%;
  }
}
</style>

<style lang="scss">
.mapboxgl-control-container {
  display: none;
}
</style>
