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
            <span>50€</span>
          </li>
          <li>
            <span>Séance de suivi</span>
            <span class="dots"></span>
            <span>40€</span>
          </li>
          <li>
            <span>Étudiants</span>
            <span class="dots"></span>
            <span>35€</span>
          </li>
        </ul>
      </div>
      <div class="sub-section" data-aos="fade-left">
        <h3>Soin signature</h3>
        <ul>
          <li><b>En cabinet :</b></li>
          <li>
            <span>Séance 20min</span>
            <span class="dots"></span>
            <span>20€</span>
          </li>
          <li>
            <span>Minute supp.</span>
            <span class="dots"></span>
            <span>1€ / min</span>
          </li>
          <li class="pros">
            <b>Déplacements particuliers, entreprises, évènements :</b>
          </li>
          <li>Devis personnalisé sur demande</li>
        </ul>
      </div>
    </div>
    <ButtonLink class="button-position" link="https://fr.resaclick.net/aromanessencesnathal">
      Prendre RDV
    </ButtonLink>

  </div>
</template>

<script>
import ButtonLink from './ButtonLink.vue';

export default {
  name: 'PricesSection',
  components: { ButtonLink },
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
  gap: 30px;
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
  min-width: 25%;
  max-width: 30%;
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
    gap: 20px;
  }
  .sub-section {
    padding: 30px;
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
