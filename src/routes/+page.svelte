<script>
  import Header from '$lib/components/Header.svelte';
  import WelcomeSection from '$lib/components/WelcomeSection.svelte';
  import InformationsSection from '$lib/components/InformationsSection.svelte';
  import PricesSection from '$lib/components/PricesSection.svelte';
  import AppointmentSection from '$lib/components/AppointmentSection.svelte';
  import WarningSection from '$lib/components/WarningSection.svelte';
</script>

<svelte:head>
  <!-- Title -->
  <title>Aromanessences – Aromathérapie, Fleurs de Bach & Bien-être naturel</title>

  <!-- Meta description -->
  <meta
    name="description"
    content="Aromanessences propose des accompagnements bien-être en aromathérapie, fleurs de Bach et massage assis AMMA. Solutions naturelles pour l’équilibre physique et émotionnel."
  />

  <!-- SEO basics -->
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Open Graph -->
  <meta property="og:title" content="Aromanessences – Bien-être naturel & aromathérapie" />
  <meta
    property="og:description"
    content="Conseils en huiles essentielles, fleurs de Bach et massage assis AMMA pour un bien-être global et naturel."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://aromanessences.com/" />
  <meta property="og:image" content="https://aromanessences.com/og-image.png" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Aromanessences – Bien-être naturel" />
  <meta
    name="twitter:description"
    content="Aromathérapie, fleurs de Bach et massage assis pour un accompagnement bien-être personnalisé."
  />
</svelte:head>

<a href="#main-content" class="skip-link">Aller au contenu principal</a>

<Header />

<main id="main-content">
  <WelcomeSection />
  <InformationsSection />
  <PricesSection />
  <AppointmentSection />
  <WarningSection />
</main>

<style>
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px 16px;
    z-index: 1000;
    text-decoration: none;
    font-size: 14px;
    transition: top 0.3s ease;
  }

  .skip-link:focus {
    top: 0;
  }
</style>
