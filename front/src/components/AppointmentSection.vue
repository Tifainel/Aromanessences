<template>
  <div class="appointment-section" id="contact">
    <h2>CONTACT</h2>
    <div class="sections">
      <div class="left">
        <img src="../assets/massage.jpg" class="profile-img" />
        <h3>Qui suis-je ?</h3>
        <p>
          J'accompagne et conseille des professionnels de la santé tels que,
          kinésithérapeutes, ostéopathes, masseurs, des associations sportives,
          mais aussi des particuliers dans l'approche et l'application des
          huiles essentielles au quotidien, en prévention et également en
          soutient de traitements allopathiques. Pour le bien être et le confort
          de tous les jours.
        </p>
        <p class="contacts">
          <font-awesome-icon icon="fa-solid fa-phone" /> <b>06.81.17.43.00</b>
        </p>
        <br />
        <p class="contacts">
          <font-awesome-icon icon="fa-solid fa-at" /><b>blabla@gmail.com</b>
        </p>
        <br />
        <SocialButton
          socialType="instagram"
          link="https://www.instagram.com/"
          data-aos="fade-down"
        />
        <SocialButton
          socialType="facebook"
          link="https://facebook.com"
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
</style>

<style lang="scss">
.mapboxgl-control-container {
  display: none;
}
</style>
