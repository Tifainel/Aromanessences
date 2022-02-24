<template>
  <div class="prices-section" id="tarif">
    <h2>TARIFS</h2>
    <div class="prices">
      <div class="massage-section" data-aos="fade-right">
        <h3>Massage assis</h3>
        <ul>
          <li>
            Séance 15min .......................................................
            15€
          </li>
          <li>
            Séance 20min .....................................................
            20€
          </li>
          <li>
            Séance 30min .....................................................
            30€
          </li>
          <li>
            <b>Forfaits</b> : 1/2 journée .....................................
            200€
          </li>
        </ul>
      </div>
      <div class="oils-section" data-aos="fade-left">
        <h3>Huiles essentielles et <br />fleurs de Bach</h3>
        <ul>
          <li>
            Première séance
            ..................................................... 40€
          </li>
          <li>
            Séance de suivi
            ......................................................... 35€
          </li>
          <li>
            Étudiants
            .......................................................................
            35€
          </li>
        </ul>
      </div>
    </div>
    <CustomButton class="button-position" link="contact">
      Me contacter
    </CustomButton>
  </div>
</template>

<script>
import CustomButton from './CustomButton.vue';

export default {
  name: 'PricesSection',
  components: { CustomButton },
};
</script>

<style lang="scss" scoped>
.prices-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $primary;
  padding: 40px 50px 50px 50px;
}
.prices {
  display: flex;
  justify-content: space-around;
  width: 80%;
}
h2 {
  font-size: 40px;
  margin-bottom: 50px;
}
.massage-section {
  background-color: white;
  padding: 60px;
  box-shadow: 1px 1px 24px 5px rgba(0, 0, 0, 0.1);
}
.oils-section {
  background-color: white;
  padding: 60px;
  box-shadow: 1px 1px 24px 5px rgba(0, 0, 0, 0.1);
}
h3 {
  font-size: 30px;
  text-align: center;
}
li {
  list-style-type: none;
  font-size: 20px;
}
ul {
  padding: 0;
}
h3 {
  margin-top: 0;
}
.button-position {
  margin-top: 60px;
}
</style>
