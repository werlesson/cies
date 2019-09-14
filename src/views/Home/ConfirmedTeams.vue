<template>
  <section class="confirmed-teams">
    <h1 class="team-name text-uppercase">Equipes Confirmadas</h1>

    <article class="teams">
      <section class="team" v-for="(team, index) in teams" :key="index">
        <div class="footer-social-team d-flex justify-content-center pb-1">
          <a v-if="team.steam" :href="`${team.steam}`">
            <i class="fa fa-steam fa-2x"></i>
          </a>
          <a v-if="team.gc" :href="`${team.gc}`">
            <gc class="logo-support gc" />
          </a>
        </div>
        <h1 class="name team-name">{{ team.name }}</h1>
        <div class="logo">
          <img :src="team.logo" :alt="`${team.name} Logo`" />
        </div>
      </section>
    </article>
  </section>
</template>

<script>
import Gc from "@/components/svg/Gc";
export default {
  components: {
    Gc,
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
          steam: "",
          gc: ""
        },
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
      rgba(255, 255, 255, 0.9) 0%,
      rgba(129, 27, 137, 0.5) 100%
    ),
    url("~@/assets/img/purple-polygon.svg");

  background-size: contain;
  background-position: top;
}

h1 {
  text-align: center;
  color: $pink;
  padding: 75px 0;
}

.teams {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0 0 75px 0;
  margin: 0 150px;
}

.teams .team {
  border: 2px solid $border;
  min-width: 300px;
  height: 420px;
  background-image: url("~@/assets/img/teams-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column-reverse;
  margin: 25px 100px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
    &:hover {
      background-image: linear-gradient(
       rgba(113, 5, 134, 0.637) 0%,
       rgba(129, 27, 137, 0.5) 100%
    ),
    url("~@/assets/img/teams-bg.jpg");
    color: white;
		}
}

.teams .team h1.name {
  margin: 0;
  font-size: 32px;
  background-color: $border;
  width: 100%;
  padding: 10px 0;
  text-transform: uppercase;
}

.teams .team .logo {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.teams .team .logo img {
  height: 200px;
}

.footer-social-team {
	// padding-top: 20px;
  // padding-bottom: 40px;
  width: 100%;
  background-color: #FFF;
  
  	a {
		display: -ms-inline-flex;
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		width: 32px;
		height: 32px;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		border-radius: 50%;
		color: #b01ba5;
		font-size: 12px;
		margin-left: 13px;
		-webkit-transition: all 0.3s;
		-o-transition: all 0.3s;
		transition: all 0.3s;

		&:hover {
      background: #b01ba5;
      color: #FFF;
    }
	}

	a:first-child {
		margin-left: 0;
	}
}

@media (max-width: 400px) {
  .confirmed-teams h1 { 
    font-size: 50px;
  }
}

.gc {
  width: 24px !important;
}
</style>
