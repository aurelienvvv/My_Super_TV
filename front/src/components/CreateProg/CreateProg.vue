<template>
  <div class="create-tv-wrapper">
    <span class="step-number">{{ stepName }}</span>
    <div class="steps-indicator">
      <span></span>
    </div>
    <form class="question-name">
      <div class="screen screen-one -visible">
        <div class="flex-wrapper">
          <div class="input-wrapper">
            <label for="channel-name">Donne un nom à ta playlist</label>
            <input id="channel-name" placeholder="Clips mélancoliques" required v-model="tvName" />
          </div>

          <div class="input-wrapper">
            <label for="pseudo-name">Ton blaze</label>
            <input id="pseudo-name" placeholder="Mélancolique-@nonyme" required v-model="pseudoName" />
          </div>
        </div>
        <button type="submit" @click.prevent="stepOneOk" class="btn -step">
          <span>Valider</span>
        </button>
      </div>
    </form>

    <form class="question-descr">
      <div class="screen screen-two">
        <div class="input-wrapper">
          <label for="channel-descr">Quelques mots sur ta playlist</label>
          <input
            id="channel-descr"
            placeholder="La vie est triste"
            required
            v-model="descrChannel"
          />
        </div>
        <div class="input-wrapper">
          <label for="channel-descr">Choisi les couleurs de ta chaîne</label>

          <div class="flex-wrapper">
            <div class="radio-wrapper">
              <label for="orange"></label>
              <input type="radio" id="orange" name="color" v-model="colorsChoice" value="-theme-orange">
              <div class="check -orange"><div class="inside"></div></div>
            </div>

            <div class="radio-wrapper">
              <label for="blue"></label>
              <input type="radio" id="blue" name="color" v-model="colorsChoice" value="-theme-blue">
              <div class="check -blue"><div class="inside"></div></div>
            </div>

            <div class="radio-wrapper">
              <label for="purple"></label>
              <input type="radio" id="purple" name="color" v-model="colorsChoice" value="-theme-purple">
              <div class="check -purple"><div class="inside"></div></div>
            </div>
          </div>
        </div>
        
        <button type="submit" @click.prevent="stepDescOk" class="btn -step -mt-20">
          <span>Valider</span>
        </button>
      </div>
    </form>

    <form>
      <div class="screen screen-three">
        <div class="flex-wrapper">
          <div class="input-wrapper">
            <label for="artist">Un mot pour décrire ta vidéo {{ countProg + 1 }}</label>
            <input id="artist" v-model="nameLink" />
          </div>

          <div class="input-wrapper">
            <label for="youtube-link">Entre le lien youtube</label>
            <input id="youtube-link" v-model="youtubeLink" />
          </div>
        </div>

        <div class="wrapper-ajout">
          <div class="titles-added">{{ countProg }} vidéo(s) ajouté(s)</div>

          <div class="wrapper-btns">
            <button class="btn -ajout" @click.prevent="goToProg">
              <span>Ajouter</span>
            </button>

            <div v-if="countProg > 1">
              <button class="btn -theme-white -launch" @click.prevent="postAPI">
                <span>Lancer ma TV !</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateTv",
  data() {
    return {
      progArr: [],
      tvName: "",
      youtubeLink: "",
      nameLink: "",
      countProg: 0,
      stepName: "Étape 1",
      descrChannel: "",
      pseudoName: "",
      colorsChoice: ""
    };
  },

  methods: {
    goToProg: function () {
      if (this.youtubeLink === "" || this.nameLink === "") {
        alert("Il faut remplir les 2 champs");
      } else {
        let regex = /[-_\w]{11}/;
        let found = this.youtubeLink.match(regex);

        if (found !== null) {
            // Si le lien ajouté à bien l'id youtube
            this.youtubeLink = found[0];

            this.progArr.push({
            artist: this.nameLink,
            id: this.youtubeLink,
          });

          this.nameLink = "";
          this.youtubeLink = "";

          document.getElementById("artist").focus();
          this.countProg = this.countProg += 1;

        } else {
          alert("Lien non valable...")
        }

        if (this.countProg > 1) {
          document.querySelector(".steps-indicator span").style.width = "100%";
        }
      }
    },

    stepOneOk: function () {
      if (this.tvName === "" || this.pseudoName === "") {
        alert("vous devez entrer le nom de votre chaine et votre pseudo");
      } else {
        document.querySelector(".steps-indicator span").style.width = "33%";
        this.stepName = "Étape 2";
        document.querySelector(".screen-one").classList.remove("-visible");
        document.querySelector(".screen-two").classList.add("-visible");
      }
    },

    stepDescOk: function () {
      if (this.descrChannel !== "" && this.colorsChoice !== "") {
        document.querySelector(".steps-indicator span").style.width = "66%";
        this.stepName = "Étape 3";
        document.querySelector(".screen-two").classList.remove("-visible");
        document.querySelector(".screen-three").classList.add("-visible");
      } else {
        alert("Ajoutez une description et une couleur");
      }
    },

    callAPI: function () {
      axios.get("/api/").then((response) => {
        this.$router.push(`/tv/${response.data.length}`);
        window.location.reload();
      });
    },

    postAPI: function () {
      axios
        .post("/api/", {
          name: this.tvName,
          list: this.progArr,
          pseudo: this.pseudoName,
          description: this.descrChannel,
          color: this.colorsChoice,
        })
        .then(() => {
          this.callAPI();
        });
    },
  },
};
</script>

<style lang='scss'>
@import "../../App.scss";
@import "CreateProg.scss";
</style>