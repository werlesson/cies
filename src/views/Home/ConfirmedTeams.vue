<template>
  <section class="confirmed-teams">
    <h1>Equipes Confirmadas</h1>

    <article class="teams">
      <section class="team" v-for="(team, index) in teams" :key="index">
        <h1 class="name">{{ team.name }}</h1>
        <div class="logo">
          <img :src="team.logo" :alt="`${team.name} Logo`" />
        </div>
      </section>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        {
          name: "Virtus Pro",
          logo:
            "https://rivalryglhf.cdn.prismic.io/rivalryglhf/43d025c1a9fe7d7da6a647a9682a71c6f9f990ad_virtus.pro-virtus-pro-vp-team-logo.png"
        },
        {
          name: "Predators",
          logo: require("@/assets/img/teams/predators.png")
        },
        {
          name: "Liquid Academy",
          logo:
            "https://rivalryglhf.cdn.prismic.io/rivalryglhf/65d9b15fb391b4c0334ed2db13018e33cd50f161_team-liquid-academy-lol.png"
        },
        {
          name: "Misfits",
          logo:
            "https://rivalryglhf.cdn.prismic.io/rivalryglhf/1deaf1867f56d05fbc37e497723da5a157c1da24_lcs-misfits-gaming.png"
        },
        {
          name: "Fnatic",
          logo:
            "https://rivalryglhf.cdn.prismic.io/rivalryglhf/671c9ef1c1e32d0a1e0536bdb8c044a95a97f594_fnatic-lol.png"
        },
        {
          name: "Astralis",
          logo:
            "https://rivalryglhf.cdn.prismic.io/rivalryglhf/fd56370f07602220a5c3939b8f6cb61667dfa3f0_astralis-csgo.png"
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
      rgba(255, 255, 255, 0.9) 0%,
      rgba(129, 27, 137, 0.5) 100%
    ),
    url("~@/assets/img/pattern-purple.png");

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
</style>
