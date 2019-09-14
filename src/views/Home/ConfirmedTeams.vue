<template>
  <section class="confirmed-teams">
    <h1 class="text-uppercase">Equipes</h1>
    <article class="teams">
      <div class="team" v-for="(team, index) in teams" :key="index">
        <header>
          <img :src="team.logo" :alt="`${team.name} Logo`" />
        </header>
        <footer>
          <h3>{{ team.name }}</h3>
          <div class="contact-team">
            <a :href="`${team.steam}`">
              <i class="fa fa-steam"></i>
            </a>
            <a :href="`${team.gc}`">
              <gc class="logo-support gc" />
            </a>
          </div>
        </footer>
      </div>
      <!-- <section class="team" v-for="(team, index) in teams" :key="index">
        <div class="footer-social-team d-flex justify-content-center pb-1">
          <a :href="`${team.steam}`">
            <i class="fa fa-steam fa-2x"></i>
          </a>
          <a :href="`${team.gc}`">
            <gc class="logo-support gc" />
          </a>
        </div>
        <h3 class="name">{{ team.name }}</h3>
        <div class="logo">
          <img :src="team.logo" :alt="`${team.name} Logo`" />
        </div>
      </section>-->
    </article>
  </section>
</template>

<script>
import Gc from "@/components/svg/Gc";
export default {
  components: {
    Gc
  },
  data() {
    return {
      teams: [
        {
          name: "TOXIC Gaming",
          logo: require("@/assets/img/teams/toxic.svg"),
          steam: "https://steamcommunity.com/groups/toxiggamiing",
          gc: ""
        },
        {
          name: "Predators",
          logo: require("@/assets/img/teams/predators-white.svg"),
          steam: "https://steamcommunity.com/groups/predatorsgg",
          gc: "https://gamersclub.com.br/time/135530"
        },
        {
          name: "Raven",
          logo: require("@/assets/img/teams/raven.png"),
          steam: "https://steamcommunity.com/groups/ravencsgoteam",
          gc: "https://gamersclub.com.br/time/136398"
        },
        {
          name: "NATUS7 GAMING",
          logo: require("@/assets/img/cies-logo-white.svg"),
          steam: "",
          gc: ""
        },
        {
          name: "a7-Ventu's Team",
          logo: require("@/assets/img/cies-logo-white.svg"),
          steam: "",
          gc: ""
        },
        {
          name: "VAC-eiros",
          logo: require("@/assets/img/cies-logo-white.svg"),
          steam: "",
          gc: ""
        },
        {
          name: "As ppks",
          logo: require("@/assets/img/cies-logo-white.svg"),
          steam: "",
          gc: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$pink: #811b89;
$border: #fff;

section.confirmed-teams {
  background-image: linear-gradient(
      180deg,
      rgba(#0c062e, 0.9) 0%,
      rgba(#0c062e, 0.5) 100%
    ),
    url("~@/assets/img/purple-polygon.svg");
  background-size: contain;
  background-position: top;
  background-color: #0c062e;
  padding-top: 100px;
  h1 {
    text-align: center;
    color: white;
    padding: 25px;
  }
}

.teams {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2% 10%;
  .team {
    width: 220px;
    height: 320px;
    background-image: url("~@/assets/img/teams-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    margin: 20px 10px;
    transition: all 0.25s ease;
    &:hover {
      transform: scale(1.05);
    }
    header {
      flex: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      img {
        width: 150px;
      }
    }
    footer {
      flex: 1;
      width: 100%;
      // background-color: rgba(white, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      h3 {
        text-transform: uppercase;
        color: white;
        font-size: 20px;
        margin-bottom: 10px;
      }
      .contact-team {
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          color: white;
          margin: 0 10px;
          width: 35px;
          height: 35px;
          &:hover {
            background-color: #0c062e;
          }
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .confirmed-teams h1 {
    font-size: 50px;
  }
}
</style>
