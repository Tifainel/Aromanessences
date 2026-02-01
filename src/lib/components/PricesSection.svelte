<script>
  import ButtonLink from './ButtonLink.svelte';
  import separator from '$lib/assets/separator.webp';
</script>

<section class="prices-section" id="tarif" aria-label="Tarifs">
  <h2>TARIFS</h2>
  <img src={separator} class="separator" alt="" aria-hidden="true" />
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
  <div class="cta-wrapper">
    <ButtonLink link="#contact">
      Prendre RDV
    </ButtonLink>
  </div>
</section>

<style lang="scss">
  .pros {
    margin-top: 15px;
  }

  .prices-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $primary;
    padding: 30px 50px 70px 50px;
  }

  .prices {
    display: flex;
    gap: 30px;
    justify-content: center;
    width: 80%;
  }

  h2 {
    font-size: 42px;
    margin-bottom: 10px;
    font-family: $titleFont;
  }

  .sub-section {
    background-color: white;
    padding: 50px 45px;
    box-shadow: 0 10px 40px rgba(157, 168, 130, 0.12);
    border-radius: 16px;
    min-width: 25%;
    max-width: 30%;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 50px rgba(157, 168, 130, 0.2);
    }
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

  .cta-wrapper {
    margin-top: 40px;
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
      align-items: center;
      width: 100%;
      gap: 20px;
    }

    .sub-section {
      padding: 30px;
      max-width: 95%;
      width: 100%;
      box-sizing: border-box;
    }

    .cta-wrapper {
      margin-top: 40px;
    }

    li {
      font-size: 18px;
    }

    h3 {
      font-size: 25px;
    }
  }
</style>
