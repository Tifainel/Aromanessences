<script>
  import Fa from 'svelte-fa';
  import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
  import Map from './Map.svelte';
  import SocialButton from './SocialButton.svelte';
  import profileImg from '$lib/assets/profile.webp';
  import separator from '$lib/assets/separator.webp';
</script>

<section class="appointment-section" id="contact" aria-label="Contact">
  <h2>CONTACT</h2>
  <img src={separator} class="separator" alt="" aria-hidden="true" />
  <div class="sections">
    <div class="left">
      <img src={profileImg} class="profile-img" alt="Nathalie Barrau, aromatologue" />
      <h3>Qui suis-je ?</h3>
      <p>
        En tant qu'aromatologue j'accompagne et conseille des professionnels
        de la santé tels que, kinésithérapeutes, ostéopathes, masseurs, des
        associations sportives, mais aussi des particuliers dans l'approche et
        l'application des huiles essentielles et fleurs de Bach au quotidien,
        en prévention et également en soutient de traitements allopathiques.
        Pour le bien être et le confort de tous les jours.
      </p>
      <address class="contact-info">
        <p class="contacts">
          <Fa icon={faPhone} class="icon-margin" aria-hidden="true" />
          <a href="tel:+33681174300" aria-label="Appeler le 06 81 17 43 00"><b>06.81.17.43.00</b></a>
        </p>
        <p class="contacts">
          <Fa icon={faAt} class="icon-margin" aria-hidden="true" />
          <a href="mailto:aromanessences@gmail.com" aria-label="Envoyer un email"><b>aromanessences@gmail.com</b></a>
        </p>
      </address>
      <div class="social-links" role="group" aria-label="Réseaux sociaux">
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
    </div>
    <div class="right">
      <Map />
    </div>
  </div>
</section>

<style lang="scss">
  .appointment-section {
    text-align: center;
    padding: 30px 100px;
  }

  h2 {
    font-size: 42px;
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
    width: 170px;
    box-shadow: 0 10px 30px rgba(157, 168, 130, 0.2);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 15px 40px rgba(157, 168, 130, 0.3);
    }
  }

  .right {
    width: 40%;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  }

  .contact-info {
    font-style: normal;
  }

  .contacts {
    margin: 0 0 8px 0;
    font-size: 17px;

    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: $secondary1;
      }
    }
  }

  .social-links {
    display: inline-flex;
    gap: 0;
  }

  .separator {
    width: 50px;
    margin-bottom: 40px;
  }

  :global(.icon-margin) {
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

  :global(.mapboxgl-control-container) {
    display: none;
  }
</style>
