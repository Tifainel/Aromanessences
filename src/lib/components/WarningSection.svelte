<script>
  import logo from '$lib/assets/logo.webp';
</script>

<footer class="footer">
  <div class="infos">
    <img src={logo} class="logo" alt="Logo Aromanessences" />
    <p class="siret">SIRET : 827 711 557 00013</p>
  </div>
  <hr aria-hidden="true" />
  <p class="warning">
    L'aromathérapie n'est pas une médecine mais une approche différente et
    complémentaire de soins. Le conseiller n'est pas médecin et n'a pas la
    prétention de l'être. Aucun diagnostic médical ne sera posé. Il est bien
    entendu qu'aucun conseil ne saurait se substituer à un acte médical. Il en
    est de même pour les massages qui n'ont aucune visée thérapeutique. Je ne
    saurais être tenue responsable quant aux mauvais usages qui pourraient
    être réalisés à l'aide de mes conseils.
  </p>
  <p class="copyright">Réalisé avec ♡ par Tifaine Larroque. © {new Date().getFullYear()} Aromanessences - Tous droits réservés</p>
</footer>

<style lang="scss">
  .footer {
    background-color: $primary;
    padding: 40px 30px 30px;
  }

  .infos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
  }

  .logo {
    width: 55px;
    margin-bottom: 12px;
    opacity: 0.9;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }

  .siret {
    font-size: 13px;
    color: $textColor;
    letter-spacing: 0.02em;
  }

  .warning {
    padding: 25px 20%;
    font-size: 12px;
    line-height: 1.7;
    color: $textColor;
    text-align: center;
  }

  hr {
    border: none;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(0, 0, 0, 0.15),
      transparent
    );
    margin: 0;
  }

  p {
    margin: 0;
  }

  .copyright {
    font-size: 11px;
    color: $textColor;
    text-align: center;
    margin-top: 20px;
    opacity: 0.7;
  }

  @media screen and (max-width: $mobileBreakpoint) {
    .warning {
      padding: 20px 10%;
    }
  }
</style>
