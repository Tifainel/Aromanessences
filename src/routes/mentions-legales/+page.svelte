<script>
  import WarningSection from '$lib/components/WarningSection.svelte';
</script>

<svelte:head>
  <title>Mentions légales – Aromanessences</title>
  <meta name="description" content="Mentions légales du site Aromanessences." />
  <meta name="robots" content="noindex, follow" />
</svelte:head>

<main class="mentions">
  <a href="/" class="back-link">&larr; Retour à l'accueil</a>

  <h1>Mentions légales</h1>

  <section>
    <h2>Éditeur du site</h2>
    <p>
      Aromanessences<br />
      SIRET : 827 711 557 00013<br />
      Site web : <a href="https://aromanessences.com">aromanessences.com</a>
    </p>
  </section>

  <section>
    <h2>Hébergement</h2>
    <p>
      Ce site est hébergé par :<br />
      OVHCloud<br />
      2 rue Kellermann, 59100 Roubaix, France<br />
      Site web : <a href="https://www.ovh.com">ovh.com</a>
    </p>
  </section>

  <section>
    <h2>Propriété intellectuelle</h2>
    <p>
      L'ensemble du contenu de ce site (textes, images, logos, photographies) est
      la propriété exclusive d'Aromanessences, sauf mention contraire. Toute
      reproduction, représentation, modification ou adaptation, totale ou
      partielle, est interdite sans autorisation écrite préalable.
    </p>
  </section>

  <section>
    <h2>Responsabilité</h2>
    <p>
      Les informations fournies sur ce site le sont à titre indicatif et ne
      sauraient se substituer à un avis médical. Aromanessences ne pourra être
      tenue responsable des dommages directs ou indirects résultant de
      l'utilisation des informations proposées.
    </p>
  </section>

  <section>
    <h2>Données personnelles</h2>
    <p>
      Ce site ne collecte aucune donnée personnelle de manière automatique.
      Aucun cookie de suivi ou d'analyse n'est utilisé. Si vous nous contactez
      par e-mail ou téléphone, vos informations sont utilisées uniquement dans le
      cadre de votre demande et ne sont jamais transmises à des tiers.
    </p>
  </section>

  <section>
    <h2>Conception du site</h2>
    <p>
      Site conçu et développé par
      <a href="https://tifainestudio.com" target="_blank">Tifaine Larroque</a>.
    </p>
  </section>
</main>

<WarningSection />

<style lang="scss">
  .mentions {
    max-width: 720px;
    margin: 0 auto;
    padding: 60px 30px 40px;
    color: $textColor;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 30px;
    color: $textColor;
    font-size: 14px;

    &:visited,
    &:hover,
    &:active {
      color: $textColor;
    }
  }

  h1 {
    margin-bottom: 40px;
  }

  h2 {
    font-size: 18px;
    margin-top: 35px;
    margin-bottom: 10px;
    color: $titleColor;
  }

  section p {
    font-size: 14px;
    line-height: 1.8;
  }

  section a {
    color: $textColor;

    &:visited,
    &:hover,
    &:active {
      color: $textColor;
    }
  }
</style>
