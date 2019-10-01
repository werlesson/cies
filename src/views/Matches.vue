<template>
  <section class="contact-page pb-5">
    <div class="container text-white">
      <h2 class="pb-5">Tabela de Classificação</h2>
      <h4>Grupo A</h4>
      <table
        class="table text-white table-striped table-hover table-borderless text-center"
      >
        <thead class="thead-dark">
          <tr>
            <th class="col-2px-fail"></th>
            <th class="fixed-width" scope="col" title="Posição">#</th>
            <th scope="col">Equipe</th>
            <th class="fixed-width" scope="col" title="Partidas Disputadas">
              J
            </th>
            <th class="fixed-width" scope="col" title="Vitórias">V</th>
            <th class="fixed-width" scope="col" title="Derrotas">D</th>
            <th class="fixed-width" scope="col" title="Saldo de Rounds">SR</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in sortedGroupA" :key="index">
            <td :class="index < 2 ? 'col-2px-sucess' : 'col-2px-fail'"></td>
            <td scope="row">{{ index + 1 }}</td>
            <td class="name-logo row">
              <div class="col-md-5">
                <span class="team-nome">{{ row.name }}</span>
              </div>
              <span class="col-md-4 logo" :id="row.id"></span>
            </td>
            <td>{{ row.matches }}</td>
            <td>{{ row.wins }}</td>
            <td>{{ row.defeats }}</td>
            <td>{{ row.diff }}</td>
          </tr>
        </tbody>
      </table>

      <h4>Grupo B</h4>
      <table
        class="table text-white table-striped table-hover table-borderless text-center"
      >
        <thead class="thead-dark">
          <tr>
            <th class="col-2px-fail"></th>
            <th class="fixed-width" scope="col" title="Posição">#</th>
            <th scope="col">Equipe</th>
            <th class="fixed-width" scope="col" title="Partidas Disputadas">
              J
            </th>
            <th class="fixed-width" scope="col" title="Vitórias">V</th>
            <th class="fixed-width" scope="col" title="Derrotas">D</th>
            <th class="fixed-width" scope="col" title="Saldo de Rounds">SR</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in sortedGroupB" :key="index">
            <td :class="index < 2 ? 'col-2px-sucess' : 'col-2px-fail'"></td>
            <td scope="row">{{ index + 1 }}</td>
            <td class="name-logo row">
              <div class="col-md-5">
                <span class="team-nome">{{ row.name }}</span>
              </div>
              <span class="col-md-4 logo" :id="row.id"></span>
            </td>
            <td>{{ row.matches }}</td>
            <td>{{ row.wins }}</td>
            <td>{{ row.defeats }}</td>
            <td>{{ row.diff }}</td>
          </tr>
        </tbody>
      </table>

      <div class="pb-5"></div>
      <hr />

      <h3 class="pt-5 pb-3">Resultados</h3>
      <section class="results">
        <div
          class="prev-match"
          v-for="(match, index) in matchesPrev"
          :key="index"
          :style="{ 'background-image': `url(${match.map})` }"
        >
          <div class="card">
            <p class="teams">
              <span class="winner">{{ match.team1 }}</span>
              {{ match.scores[0] }} vs {{ match.scores[1] }}
              <span class="loser">{{ match.team2 }}</span>
            </p>
            <p class="date">{{ match.date | moment("dddd, DD/MM HH:mm") }}</p>
            <a :href="match.lobby"></a>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters, mapActions } = createNamespacedHelpers("teams");

export default {
  created() {
    this.reset();
  },

  mounted() {
    this.addResult({
      team1: "kmc",
      team2: "rvn",
      scores: [16, 10],
      map: "de_dust2",
      date: new Date("2019-10-26 19:54"),
      lobby: "https://gamersclub.com.br/lobby/partida/5867571"
    });

    this.addResult({
      team1: "xbg",
      team2: "bbl",
      scores: [16, 7],
      map: "de_cache",
      date: new Date("2019-10-26 21:58"),
      lobby: "https://gamersclub.com.br/lobby/partida/5868878"
    });

    this.addResult({
      team1: "bth",
      team2: "n7g",
      scores: [16, 14],
      map: "de_mirage",
      date: new Date("2019-10-28 22:51"),
      lobby: "https://gamersclub.com.br/lobby/partida/5883752"
    });
  },

  computed: {
    ...mapGetters(["getByGroup", "matchesPrev"]),

    sortedGroupA() {
      const groupA = this.getByGroup("A");
      return this.teamsSortColocacao(groupA);
    },

    sortedGroupB() {
      const groupB = this.getByGroup("B");
      return this.teamsSortColocacao(groupB);
    }
  },

  methods: {
    ...mapActions(["reset", "addResult"]),

    // Vitórias > Saldo de Rounds > Nome
    teamsSortColocacao(arr) {
      return arr.sort(function(a, b) {
        let vitA = a.wins;
        let vitB = b.wins;
        if (vitA < vitB) {
          return 1;
        } else if (vitA > vitB) {
          return -1;
        } else if (vitA == vitB) {
          let srA = a.diff;
          let srB = b.diff;
          if (srA < srB) {
            return 1;
          } else if (srA > srB) {
            return -1;
          } else if (srA == srB) {
            let equipeA = a.name.toUpperCase();
            let equipeB = b.name.toUpperCase();
            if (equipeA > equipeB) {
              return 1;
            }
            if (equipeA < equipeB) {
              return -1;
            }
            return 0;
          }
          return 0;
        }
        return 0;
      });
    }
  },

  beforeDestroy() {
    this.reset();
  }
};
</script>

<style lang="scss" scoped>
// .contact-page {
//   padding-top: 120px;
// }

table {
  thead tr th.fixed-width {
    width: 5rem;
  }

  tbody tr td {
    padding: 0.25rem;
    vertical-align: middle;
  }
}

.thead-dark th {
  background-color: #1b0d36 !important;
}

.table-hover tr {
  &:hover {
    color: #fff !important;
    // font-weight: bolder !important;
    background-color: rgba(0, 0, 0, 0.3);

    & > .name-logo .logo {
      background-size: 80%;
    }
  }
}

.name-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;

  .logo {
    flex: 1;
    height: 40px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    background-origin: content-box;
    transition: background-size 300ms ease-out;

    &:hover {
      background-size: 80%;
    }
  }
  #vac {
    background-image: url("~@/assets/img/teams/vac-eiros.png");
  }
  #rvn {
    background-image: url("~@/assets/img/teams/raven.png");
    background-position-y: 45%;
  }
  #txg {
    background-image: url("~@/assets/img/teams/toxic.svg");
  }
  #pdt {
    background-image: url("~@/assets/img/teams/predators-white.svg");
    background-position-y: 60%;
  }
  #avt {
    background-image: url("~@/assets/img/teams/ventus.png");
    background-position-y: 70%;
  }
  #app {
    background-image: url("~@/assets/img/teams/as-ppks.png");
  }
  #n7g {
    background-image: url("~@/assets/img/teams/natus.png");
    background-position-y: 30%;
  }
  #ols {
    background-image: url("~@/assets/img/teams/only-silvers.png");
  }
  #bbl {
    background-image: url("~@/assets/img/teams/brazilian-bulls.png");
    background-position-y: 44%;
  }
  #xbg {
    background-image: url("~@/assets/img/teams/xablau-gaming.png");
    background-position-y: 32%;
  }
  #bth {
    background-image: url("~@/assets/img/teams/brotherhood.png");
    background-position-y: 48%;
    &:hover {
      background-size: 48%;
    }
  }
  #kmc {
    background-image: url("~@/assets/img/teams/kommando.png");
    background-position-y: 48%;
  }
  #pdf {
    background-image: url("~@/assets/img/teams/pdf.png");
    background-position-y: 18%;
  }
}

//tbody {
// tr:nth-child(-n+4){
//   td:nth-child(1){
//     border-left: 4px outset rgba(0, 0, 255, 0.7) ;
//   }
// }
//   tr:nth-child(+n+5){
//     td:nth-child(1){
//       border-left: 4px solid rgba(255, 0, 0, 0.7) ;
//     }
//   }
//}

.col-2px-sucess {
  width: 4px;
  border: 0;
  margin: 0;
  padding: 0;
  background: rgba(blue, 0.7);
}

.col-2px-fail {
  width: 4px;
  border: 0;
  margin: 0;
  padding: 0;
  background: rgba(red, 0.6);
}

.team-nome {
  text-transform: uppercase;
}

.results {
  display: flex;
}
.prev-match {
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px -4px rgba(0, 0, 0, 0.5);
  background-size: 100% 100%;
  background-position: center;
  border-radius: 0;
  height: 202px;
  width: 279px;
  margin: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0;
  flex-grow: 1;
  min-width: 15rem;
  transition: background-size 100ms ease-in-out;

  &:hover,
  &:focus {
    background-size: 105% 105%;
  }

  div.card {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    border-radius: 0;
    display: flex;
    justify-content: center;

    .teams {
      font-size: 20px;
      text-align: center;

      .winner,
      .loser {
        display: block;
        font-size: 26px;
        text-transform: uppercase;
        font-weight: bold;
        text-shadow: 1px 1px 1px #000;
      }

      .winner {
        color: green;
      }

      .loser {
        color: red;
      }
    }
    .date {
      text-align: center;
    }

    a {
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
}
</style>
