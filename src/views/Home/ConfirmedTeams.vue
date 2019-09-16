<template>
  <section class="confirmed-teams">
    <h1 class="text-uppercase">Equipes</h1>
    <article class="teams">
      <div class="team" v-for="(team, index) in teamsSort" :key="index">
        <header>
          <img :src="team.logo" :alt="`${team.name} Logo`" />
        </header>
        <footer>
          <h3>{{ team.name }}</h3>
          <div class="contact-team">
            <a :href="`${team.steam}`" :class="{inactiveLink: !team.steam}">
              <i class="fa fa-steam"></i>
            </a>
            <a :href="`${team.gc}`" :class="{inactiveLink: !team.gc}">
              <gc class="logo-support gc" />
            </a>
          </div>
        </footer>
      </div>
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
          logo: require("@/assets/img/teams/ventus.png"),
          steam: "",
          gc: ""
        },
        {
          name: "VAC-eiros",
          logo: require("@/assets/img/teams/vac-eiros.png"),
          steam: "https://steamcommunity.com/groups/vac-eiros",
          gc: "https://gamersclub.com.br/time/136411"
        },
        {
          name: "As ppks",
          logo: require("@/assets/img/teams/as-ppks.png"),
          steam: "https://steamcommunity.com/groups/csdasppks",
          gc: ""
        },
        {
          name: "Brazilian Bulls",
          logo: require("@/assets/img/cies-logo-white.svg"),
          steam: "",
          gc: ""
        },
        {
          name: "Only Silvers",
          logo: require("@/assets/img/teams/only-silvers.png"),
          steam: "",
          gc: ""
        }
      ]
    };
  },
  computed: {
    teamsSort() {
      return this.teams.sort(function(a, b) {
        let value1 = a.name.toUpperCase();
        let value2 = b.name.toUpperCase();
        if (value1 > value2) {
          return 1;
        }
        if (value1 < value2) {
          return -1;
        }
        return 0;
      });
    }
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
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          transition: all 0.25s ease;
          img {
            width: 100%;
          }
          &:hover {
            background-color: #0c062e;
          }
        }
      }
    }
  }
}

.inactiveLink {
  pointer-events: none;
  cursor: default;
  opacity: 0.25;
}

@media (max-width: 400px) {
  .confirmed-teams h1 {
    font-size: 50px;
  }
}
</style>
