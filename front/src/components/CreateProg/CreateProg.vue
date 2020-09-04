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
            <label for="channel-name">Donne un nom à ta chaîne</label>
            <input id="channel-name" placeholder="Jean-Jean TV !" required v-model="tvName" />
          </div>

          <div class="input-wrapper">
            <label for="pseudo-name">Ton blaze</label>
            <input id="pseudo-name" placeholder="Jean-Du-58" required v-model="pseudoName" />
          </div>
        </div>
        <button type="submit" @click.prevent="stepOneOk" class="btn -step">
          <span>Valider</span>
        </button>
      </div>
    </form>

    <form class="question-descr">
      <div class="screen screen-two">
        <h1 class="title-step">Fais une description de ta chaîne</h1>
        <div class="input-wrapper">
          <label for="channel-descr"></label>
          <input
            id="channel-descr"
            placeholder="Compil' de mes vidéos favorites"
            required
            v-model="descrChannel"
          />
        </div>
        <button type="submit" @click.prevent="stepDescOk" class="btn -step">
          <span>Valider</span>
        </button>
      </div>
    </form>

    <form>
      <div class="screen screen-three">
        <div class="flex-wrapper">
          <div class="input-wrapper">
            <label for="artist">Nom de l'artiste</label>
            <input id="artist" v-model="nameLink" />
          </div>

          <div class="input-wrapper">
            <label for="youtube-link">Entrez le lien youtube</label>
            <input id="youtube-link" v-model="youtubeLink" />
          </div>
        </div>

        <div class="wrapper-ajout">
          <div class="titles-added">{{ countProg }} titre(s) ajouté(s)</div>

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
    };
  },

  methods: {
    goToProg: function () {
      if (this.youtubeLink === "" || this.nameLink === "") {
        alert("Il faut remplir les 2 champs");
      } else {
        this.progArr.push({
          artist: this.nameLink,
          id: this.youtubeLink,
        });

        this.nameLink = "";
        this.youtubeLink = "";

        document.getElementById("artist").focus();

        this.countProg = this.countProg += 1;

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
      if (this.descrChannel !== "") {
        document.querySelector(".steps-indicator span").style.width = "66%";
        this.stepName = "Étape 3";
        document.querySelector(".screen-two").classList.remove("-visible");
        document.querySelector(".screen-three").classList.add("-visible");
      } else {
        alert("vous devez une description");
      }
    },

    callAPI: function () {
      axios.get("http://localhost:3000/api/").then((response) => {
        this.$router.push(`/tv/${response.data.length}`);
        window.location.reload();
      });
    },

    postAPI: function () {
      axios
        .post("http://localhost:3000/api/", {
          name: this.tvName,
          list: this.progArr,
          pseudo: this.pseudoName,
          description: this.descrChannel,
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