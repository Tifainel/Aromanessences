<script>
  import ButtonLink from './ButtonLink.svelte';
  import RoundedImage from './RoundedImage.svelte';
  import massageImg from '$lib/assets/massage.webp';
  import oilsImg from '$lib/assets/oils.webp';
  import flower from '$lib/assets/flower.webp';
  import bachImg from '$lib/assets/bach.webp';
  import signatureImg from '$lib/assets/signature-soin.webp';
  import separator from '$lib/assets/separator.webp';
</script>

<section class="welcome-section" aria-label="Accueil">
  <img src={flower} class="flower1" alt="" aria-hidden="true" />
  <img src={flower} class="flower2" alt="" aria-hidden="true" />
  <h1>AROMANESSENCES</h1>
  <p class="tagline">
    Fournisseur de bien être : Conseillère en Huiles Essentielles, praticienne
    en Fleurs de Bach et praticienne en massage assis AMMA.
  </p>
  <img src={separator} class="separator" alt="" aria-hidden="true" />
  <p>
    Aromanessences vous permet une approche différente du bien être physique,
    psychique et émotionnel grâce aux huiles essentielles, hydrolats, huiles
    végétales, fleurs de bach et la pratique du massage assis dit AMMA. Qui
    peut se pratiquer en cabinet, à domicile, en entreprise, lors de
    manifestations .... Je vous accompagne dans un bien être total grâce au
    mariage de toutes ces pratiques.
  </p>
  <nav class="categories" aria-label="Catégories de services">
    <RoundedImage imgSrc={oilsImg} link="oils" alt="Flacons d'huiles essentielles" data-aos="fade-down">
      Huiles essentielles
    </RoundedImage>
    <RoundedImage imgSrc={bachImg} link="bach" alt="Fleurs de Bach" data-aos="fade-down">
      Fleurs de bach
    </RoundedImage>
    <RoundedImage imgSrc={massageImg} link="massage" alt="Massage assis sur chaise" data-aos="fade-down">
      Massage assis
    </RoundedImage>
    <RoundedImage imgSrc={signatureImg} link="signature-soin" alt="Soin des mains signature" data-aos="fade-down">
      Soin signature
    </RoundedImage>
  </nav>
</section>

<style lang="scss">
  .welcome-section {
    padding: 20px;
    background-color: $primary;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 25px 25% 170px 25%;
    position: relative;
  }

  h1 {
    font-size: 72px;
    margin: 0;
  }

  .tagline {
    font-size: 1.1em;
    font-weight: 400;
    margin: 1em 0;
  }

  .categories {
    position: absolute;
    width: 80%;
    background-color: white;
    top: 450px;
    gap: 70px;
    box-shadow: 0 15px 50px rgba(157, 168, 130, 0.15);
    border-radius: 20px;
    padding: 50px 30px 30px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .separator {
    width: 50px;
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
  }
</style>
