<template>
  <div class="informations-section">
    <div class="sub-section" id="massage">
      <div
        class="image-part-left"
        data-aos="fade-right"
        v-show="window.width >= 1300"
      >
        <Organic :shape="1" color="blue" class="organic1" />
        <img src="../assets/massage.jpg" class="img-size" alt="massage" />
      </div>
      <div class="text-part-right" data-aos="fade-left">
        <h2>MASSAGE ASSIS</h2>
        <div
          class="image-part-left"
          data-aos="fade-right"
          v-show="window.width < 1300"
        >
          <img src="../assets/massage.jpg" class="img-size" alt="massage" />
        </div>
        <p>
          Cette pratique aide à maintenir une bonne santé physique et
          psychologique globale et à améliorer la circulation de l'énérgie
          vitale. Les bienfaits du massage assis sont immédiats. Il stimule les
          méridiens d'acupuncture pour activer la circulation énergétique dans
          le corps. Réduit le stress, la fatigue, les tensions et les douleurs
          musculaires. Il favorise également l'épanouissement collectif et
          individuel et donne une sensation de relaxation physique et mentale
          qui permet au massé de reprendre son activité avec plus de
          concentration et de créativité.
        </p>
        <h3>Déroulement d'une séance</h3>
        <p>
          Le protocole du massage assis est relativement simple. La séance est
          menée sur une personne habillée à travers ses vêtements, sur
          l'ensemble de la partie haute du corps, cette dernière est travaillée
          entre 15 et 30 min par un enchaînement précis et composé de :
          pressions, d'étirements, percussions et de balayages.
        </p>
        <CustomButton class="button-align" link="tarif">Tarifs</CustomButton>
      </div>
    </div>
    <div class="sub-section" id="oils">
      <div class="text-part-left" data-aos="fade-right">
        <h2>HUILES ESSENTIELLES</h2>
        <div
          class="image-part-right"
          data-aos="fade-left"
          v-show="window.width < 1300"
        >
          <img src="../assets/oils.jpg" class="img-size-right" alt="huiles" />
        </div>
        <p>
          Les Huiles essentielles sont là pour donner un petit coup de pouce au
          corps humain qui est une formidable machine mais qui parfois s'enraye,
          que ce soit sur le plan physique ou moral. Quelques exemples
          d'accompagnements : (par voies cutanées, olfactives ou en diffusion)
          allergies saisonnières, problèmes musculaires, articulaires, digestifs
          et cutanés (comme l'acnée), anxiété, morosité, difficultés de
          concentration, stress, endormissement, ... Mais aussi des soins de
          beauté pour la peau et les cheveux.
        </p>
        <h3>Déroulement d'une séance</h3>
        <p>
          La première partie de la séance sera consacrée aux motifs de votre
          venue avec un questionnaire Holistique (qui prend en compte l'histoire
          de la personne dans sa globalité). Ensuite et tout au long de
          l'entretien, je vous ferais sentir des huiles essentielles. Le test
          olfactif est primordial. Nous trouverons ensemble une synergie
          appropriée. Mon rôle est de vous accompagner vers une certaine
          autonomie face aux huiles essentielles. La séance dure entre 45mn et 1
          heure.
        </p>
        <CustomButton class="button-align" link="tarif">Tarifs</CustomButton>
      </div>
      <div
        class="image-part-right"
        data-aos="fade-left"
        v-show="window.width >= 1300"
      >
        <Organic :shape="3" color="blue" class="organic3" />
        <img src="../assets/oils.jpg" class="img-size-right" alt="huiles" />
      </div>
    </div>
    <div class="sub-section" id="bach">
      <div
        class="image-part-left"
        data-aos="fade-right"
        v-show="window.width >= 1300"
      >
        <Organic :shape="1" color="blue" class="organic1 organic1-rotate" />
        <img src="../assets/flower.jpg" class="img-size" alt="flowers" />
      </div>
      <div class="text-part-right" data-aos="fade-left">
        <h2>FLEURS DE BACH</h2>
        <div
          class="image-part-left"
          data-aos="fade-right"
          v-show="window.width < 1300"
        >
          <img src="../assets/flower.jpg" class="img-size" alt="flowers" />
        </div>
        <p>
          Les fleurs de Bach sont des outils qui permettent à l'individu d'agir
          sur son corps émotionnel et de stimuler sa force vitale. Le
          fonctionnement des fleurs de Bach s'apparente à celui de l'homéopathie
          et de la phytothérapie. Les élixirs floraux contiennent l'énergie de
          la plante originelle, ce qui permet de mettre en place le processus
          d'auto guérison de l'organisme. Chaque individu étant constitué
          différemment, une synergie type est adaptée au tempérament et à la
          personnalité de la personneƒ
        </p>
        <h3>Déroulement d'une séance</h3>
        <p>
          Durant notre entretien, des questions précises vous seront posées afin
          de déterminer les prédominances émotionnelles à réguler. Suite à ce
          questionnaire, une synergie et un protocole vous seront proposés afin
          de rétablir l'harmonie et l'équilibre émotionnel.
        </p>
        <CustomButton class="button-align" link="tarif">Tarifs</CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from './CustomButton.vue';
import Organic from './Organic.vue';

export default {
  name: 'InformationsSection',
  components: { CustomButton, Organic },

  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
    };
  },

  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
.informations-section {
  margin-top: 320px;
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
  position: relative;
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
  font-family: $titleFont;
}
.organic1 {
  position: absolute;
  top: -150px;
  left: -50px;
  width: 500px;
  z-index: -1;
}
.organic1-rotate {
  rotate: 125deg;
}
.organic3 {
  position: absolute;
  top: 170px;
  right: -10px;
  width: 500px;
  z-index: -1;
}
h3 {
  margin-bottom: 0px;
}
@media screen and (max-width: $mobileBreakpoint) {
  .informations-section {
    margin-top: 470px;
    padding: 0 40px 30px 40px;
  }
  .sub-section {
    flex-direction: column;
  }
  .image-part-left {
    padding: 20px 0;
    width: 100%;
  }
  .text-part-right {
    width: 100%;
    padding: 0;
    text-align: center;
  }
  .image-part-right {
    padding: 20px 0;
    width: 100%;
  }
  .text-part-left {
    width: 100%;
    padding: 0;
    text-align: center;
  }
  .img-size {
    width: 200px;
  }
  .img-size-right {
    width: 200px;
  }
  h2 {
    margin: 50px 0 0 0;
  }
}
</style>
