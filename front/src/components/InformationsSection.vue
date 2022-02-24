<template>
  <div class="informations-section">
    <div class="sub-section" id="massage">
      <div class="image-part-left" data-aos="fade-right">
        <img src="../assets/massage.jpg" class="img-size" />
      </div>
      <div class="text-part-right" data-aos="fade-left">
        <h2>MASSAGE ASSIS</h2>
        <p>
          Par le biais du massage j'aide à améliorer la circulation de l'énergie
          vitale. À cet effet, cela permet d'éliminer tous les facteurs qui
          participent aux blocages énergétiques. On distingue, entre autres, les
          troubles nerveux et émotionnels. En outre, cette pratique aide à
          maintenir une bonne santé physique et psychologique. Les bienfaits du
          massage assis : Il stimule les méridiens d'acupuncture pour activer la
          circulation énergétique dans le corps. Il a une action immédiate sur
          le "Massé". Il donne une sensation de relaxation générale et de
          détente physique et mentale qui permet au Massé de reprendre son
          activité avec plus de concentration et de créativité. Il favorise la
          réduction de stress, la fatigue, les tensions et les douleurs
          musculaires. Il favorise l'épanouissement collectif et individuel.
          Enfin il offre un bien-être intérieur total. En somme, l'efficacité du
          massage AMMA assis n'est plus à démontrer. Bref aucune contrainte et
          un résultat immédiat.
        </p>
        <h3>Déroulement d'une séance</h3>
        <p>
          Le protocole du massage assis est relativement simple. La séance est
          menée sur une personne habillée à travers ses vêtements, sur
          l'ensemble de la partie haute du corps, cette dernière est travaillée
          entre 15 et 30 min par un enchaînement précis et composé de :
          pressions, d'étirements, percussions et de balayages. En allant des
          épaules vers le dos, de la nuque vers les hanches, des bras vers les
          mains et pour finir, le praticien remonte vers la tête du patient tout
          en identifiant les zones de tension pour les soulager et les corriger
          afin d'aider le MASSE à se relaxer et à distribuer correctement
          l'énergie dans son corps.
        </p>
        <CustomButton class="button-align" link="tarif">Tarifs</CustomButton>
      </div>
    </div>
    <div class="sub-section" id="oils">
      <div class="text-part-left" data-aos="fade-right">
        <h2>HUILES ESSENTIELLES</h2>
        <p>
          Les Huiles essentielles sont là pour donner un petit coup de pouce au
          corps humain qui est une formidable machine mais qui parfois s'enraye,
          que ce soit sur le plan physique ou moral. Quelques exemples
          d'accompagnements : (par voies cutanées, olfactives ou en diffusion) -
          Allergies saisonnières, - Problèmes musculaires, articulaires, -
          Problèmes digestifs, - Difficultés métaboliques (fatigues, drainage
          hépatique..) - Problématiques cutanées comme l'acnée, - Troubles
          circulatoires.... - Morosité, - Anxiété, - Dévalorisation de soi, -
          Difficultés de concentration, - Trac, - Endormissement, Mais aussi,
          soins de beauté pour la peau, les cheveux......
        </p>
        <h3>Déroulement d'une séance</h3>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem.
        </p>
        <CustomButton class="button-align" link="tarif">Tarifs</CustomButton>
      </div>
      <div class="image-part-right" data-aos="fade-left">
        <img src="../assets/huile-essentielle.jpg" class="img-size-right" />
      </div>
    </div>
    <div class="sub-section" id="bach">
      <div class="image-part-left" data-aos="fade-right">
        <img src="../assets/massage.jpg" class="img-size" />
      </div>
      <div class="text-part-right" data-aos="fade-left">
        <h2>FLEURS DE BACH</h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem.
        </p>
        <h3>Déroulement d'une séance</h3>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem.
        </p>
        <CustomButton class="button-align" link="tarif">Tarifs</CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from './CustomButton.vue';

export default {
  name: 'InformationsSection',
  components: { CustomButton },
};
</script>

<style lang="scss" scoped>
.informations-section {
  margin-top: 320px;
  // display: flex;
  // flex-direction: column;
  padding: 0 90px;
}
.image-part-left {
  text-align: center;
  padding: 50px 0 50px 50px;
  width: 50%;
}
.text-part-right {
  width: 50%;
  padding: 60px 90px 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.image-part-right {
  text-align: center;
  padding: 50px 50px 50px 0;
  width: 50%;
}
.text-part-left {
  width: 50%;
  padding: 60px 0 100px 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button-align {
  align-self: center;
}
.sub-section {
  display: flex;
}
.img-size {
  box-shadow: -15px 15px 0px 0px $secondary2;
  width: 450px;
}
.img-size-right {
  box-shadow: 15px 15px 0px 0px $secondary2;
  width: 450px;
}
h2 {
  font-size: 30px;
}
</style>
