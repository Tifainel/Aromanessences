<script>
  import Header from '$lib/components/Header.svelte';
  import WelcomeSection from '$lib/components/WelcomeSection.svelte';
  import InformationsSection from '$lib/components/InformationsSection.svelte';
  import PricesSection from '$lib/components/PricesSection.svelte';
  import AppointmentSection from '$lib/components/AppointmentSection.svelte';
  import WarningSection from '$lib/components/WarningSection.svelte';
</script>

<a href="#oils" class="skip-link">Aller au contenu principal</a>
<Header />
<WelcomeSection />
<InformationsSection />
<PricesSection />
<AppointmentSection />
<WarningSection />

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
