<template>
  <div class="footer">
    <div class="infos">
      <img src="../assets/logo.png" class="logo" alt="logo" />
      <p>SIRET : 827 711 557 00013</p>
    </div>
    <hr />
    <p class="warning">
      L'aromathérapie n'est pas une médecine mais une approche différente et
      complémentaire de soins. Le conseiller n'est pas médecin et n'a pas la
      prétention de l'être. Aucun diagnostic médical ne sera posé. Il est bien
      entendu qu'aucun conseil ne saurait se substituer à un acte médical. Il en
      est de même pour les massages qui n'ont aucune visée thérapeutique. Je ne
      saurais être tenue responsable quant aux mauvais usages qui pourraient
      être réalisés à l'aide de mes conseils.
    </p>
  </div>
</template>

<script>
export default {
  name: 'WarningSection',
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $primary;
  padding: 20px 30px;
}
.infos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.logo {
  width: 50px;
  margin-bottom: 10px;
}
.warning {
  padding: 20px 20%;
  font-size: 12px;
}
hr {
  border: 0.5px solid black;
  margin: 0;
}
p {
  margin: 0;
}
</style>
