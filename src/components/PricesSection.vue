<template>
  <div class="prices-section" id="tarif">
    <h2>TARIFS</h2>
    <img src="../assets/separator.png" class="separator" alt="separator" />
    <div class="prices">
      <div class="sub-section" data-aos="fade-right">
        <h3>Massage assis</h3>
        <ul>
          <li><b>En cabinet :</b></li>
          <li>
            <span>Séance 15min</span>
            <span class="dots"></span>
            <span>15€</span>
          </li>
          <li>
            <span>Séance 20min</span>
            <span class="dots"></span>
            <span>20€</span>
          </li>
          <li>
            <span>Séance 30min</span>
            <span class="dots"></span>
            <span>30€</span>
          </li>
          <li class="pros">
            <b>Déplacements particuliers, entreprises, évènements :</b>
          </li>
          <li>Devis personnalisé sur demande</li>
        </ul>
      </div>
      <div class="sub-section" data-aos="fade-left">
        <h3>Huiles essentielles et <br />fleurs de Bach</h3>
        <ul>
          <li><b>En cabinet :</b></li>
          <li>
            <span>Première séance</span>
            <span class="dots"></span>
            <span>40€</span>
          </li>
          <li>
            <span>Séance de suivi</span>
            <span class="dots"></span>
            <span>30€</span>
          </li>
          <li>
            <span>Étudiants</span>
            <span class="dots"></span>
            <span>25€</span>
          </li>
          <li class="pros"><b>À domicile :</b></li>
          <li>Tarifs en vigueur + surcoût déplacement au-delà de 10km</li>
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
.pros {
  margin-top: 15px;
}
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
  margin-bottom: 10px;
  font-family: $titleFont;
}
.sub-section {
  background-color: white;
  padding: 60px;
  box-shadow: 1px 1px 24px 5px rgba(0, 0, 0, 0.1);
  min-width: 30%;
  max-width: 35%;
}
h3 {
  font-size: 30px;
  text-align: center;
  margin-top: 0;
}
li {
  list-style-type: none;
  display: flex;
  font-size: 20px;
}
ul {
  padding: 0;
}
.button-position {
  margin-top: 60px;
}
.dots {
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-bottom-color: black;
  margin: 5px;
  flex: 1;
}
.separator {
  width: 50px;
  margin-bottom: 40px;
}

@media screen and (max-width: $mobileBreakpoint) {
  .prices {
    flex-direction: column;
    width: 100%;
  }
  .sub-section {
    padding: 30px;
    margin-bottom: 40px;
    max-width: 95%;
  }
  .button-position {
    margin-top: 20px;
  }
  li {
    font-size: 18px;
  }
  h3 {
    font-size: 25px;
  }
}
</style>
