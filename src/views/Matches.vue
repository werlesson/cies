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
              <span class="col-md-4 logo" :class="row.id"></span>
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
              <span class="col-md-4 logo" :class="row.id"></span>
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

      <h3 class="pt-5 pb-3">Próximos Confrontos</h3>
      <table
        class="table text-white table-striped table-hover table-borderless text-center"
      >
        <tbody>
          <tr
            v-for="(match, index) in matchesNext"
            :key="index"
            :class="match.date === 'TBA' ? 'tba' : ''"
            v-show="match.date !== 'TBA' || toConfirmShow === true"
          >
            <td class="next-logos left" :class="match.teamsId[0]">
              <span :class="match.date === 'TBA' ? 'tba' : ''">
                {{ match.teams[0] }}
              </span>
            </td>
            <td>vs</td>
            <td class="next-logos right" :class="match.teamsId[1]">
              <span :class="match.date === 'TBA' ? 'tba' : ''">
                {{ match.teams[1] }}
              </span>
            </td>
            <td>{{ match.date | moment("dddd, DD/MM HH:mm") }}</td>
            <td>Grupo {{ match.group }}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-light" @click="toConfirmShow = !toConfirmShow">
        {{
          toConfirmShow === false
            ? "Ver confrontos a confirmar"
            : "Ocultar confrontos"
        }}
      </button>

      <div class="pb-5"></div>
      <hr />

      <h3 class="pt-5 pb-3">Resultados</h3>
      <section class="results">
        <div
          class="prev-match"
          v-for="(match, index) in matchesPrev"
          :key="index"
          :class="match.map"
        >
          <div class="card">
            <p class="teams">
              <span :class="match.scores ? 'winner' : ''">{{
                match.teams[0]
              }}</span>
              <span v-if="match.scores"
                >{{ match.scores[0] }} vs {{ match.scores[1] }}</span
              >
              <span v-else>vs</span>
              <span :class="match.scores ? 'loser' : ''">
                {{ match.teams[1] }}
              </span>
            </p>
            <p v-if="!match.scores" style="margin: 0; text-align: center;">
              <span class="badge badge-danger">Aguardando Resultados</span>
            </p>
            <p v-else class="date">
              {{ match.date | moment("dddd, DD/MM HH:mm") }}
            </p>
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
  data() {
    return {
      toConfirmShow: false
    };
  },

  created() {
    this.reset();
  },

  mounted() {
    this.addMatch({
      teams: ["rvn", "kmc"],
      date: new Date("2019-09-26 20:00")
    });

    this.upMatch({
      teamsId: ["kmc", "rvn"],
      scores: [16, 10],
      map: "de_dust2",
      date: new Date("2019-09-26 19:54"),
      lobby: "https://gamersclub.com.br/lobby/partida/5868003"
    });

    this.addMatch({
      teams: ["xbg", "bbl"],
      date: new Date("2019-09-26 20:00")
    });

    this.upMatch({
      teamsId: ["xbg", "bbl"],
      scores: [16, 7],
      map: "de_cache",
      date: new Date("2019-09-26 21:58"),
      lobby: "https://gamersclub.com.br/lobby/partida/5868878"
    });

    this.addMatch({
      teams: ["bth", "n7g"],
      date: new Date("2019-09-26 20:00")
    });

    this.upMatch({
      teamsId: ["bth", "n7g"],
      scores: [16, 14],
      map: "de_mirage",
      date: new Date("2019-09-28 22:51"),
      lobby: "https://gamersclub.com.br/lobby/partida/5883752"
    });

    this.addMatch({
      teams: ["bth", "avt"],
      date: new Date("2019-10-03 23:30")
    });

    this.addMatch({
      teams: ["vac", "txg"]
    });

    this.addMatch({
      teams: ["ols", "app"]
    });

    this.addMatch({
      teams: ["ols", "txg"]
    });

    this.addMatch({
      teams: ["vac", "rvn"]
    });

    this.addMatch({
      teams: ["app", "kmc"]
    });

    this.addMatch({
      teams: ["ols", "kmc"]
    });

    this.addMatch({
      teams: ["app", "vac"]
    });

    this.addMatch({
      teams: ["txg", "kmc"]
    });

    this.addMatch({
      teams: ["app", "rvn"]
    });

    this.addMatch({
      teams: ["vac", "ols"]
    });

    this.addMatch({
      teams: ["app", "txg"]
    });

    this.addMatch({
      teams: ["vac", "kmc"]
    });

    this.addMatch({
      teams: ["rvn", "ols"]
    });

    this.addMatch({
      teams: ["bbl", "n7g"]
    });

    this.addMatch({
      teams: ["pdf", "xbg"]
    });

    this.addMatch({
      teams: ["bbl", "pdf"]
    });

    this.addMatch({
      teams: ["n7g", "avt"]
    });

    this.addMatch({
      teams: ["bbl", "avt"]
    });

    this.addMatch({
      teams: ["xbg", "bth"]
    });

    this.addMatch({
      teams: ["avt", "pdt"]
    });

    this.addMatch({
      teams: ["bth", "pdf"]
    });

    this.addMatch({
      teams: ["n7g", "xbg"]
    });

    this.addMatch({
      teams: ["bbl", "pdt"]
    });

    this.addMatch({
      teams: ["avt", "xbg"]
    });

    this.addMatch({
      teams: ["n7g", "pdf"]
    });

    this.addMatch({
      teams: ["bbl", "bth"]
    });

    this.addMatch({
      teams: ["pdt", "xbg"]
    });

    this.addMatch({
      teams: ["avt", "pdf"]
    });

    this.addMatch({
      teams: ["pdt", "n7g"],
      date: new Date("2019-10-02 22:00")
    });

    this.addMatch({
      teams: ["pdt", "pdf"],
      date: new Date("2019-10-06 15:00")
    });

    this.addMatch({
      teams: ["pdt", "bth"],
      date: new Date("2019-10-06 17:00")
    });

    this.addMatch({
      teams: ["rvn", "txg"],
      date: new Date("2019-10-03 18:00")
    });

    // this.upMatch({
    //   teams: ["pdt", "n7g"],
    //   scores: [16, 10],
    //   map: "de_dust2",
    //   date: new Date("2019-10-02 22:32"),
    //   lobby: "https://gamersclub.com.br/lobby/partida/5912028"
    // });
  },

  computed: {
    ...mapGetters(["getByGroup", "matchesPrev", "matchesNext"]),

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
    ...mapActions(["reset", "addMatch", "upMatch"]),

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
// Logos
.vac {
  background-image: url("~@/assets/img/teams/vac-eiros.png");
}
.rvn {
  background-image: url("~@/assets/img/teams/raven.png");
}
.txg {
  background-image: url("~@/assets/img/teams/toxic.svg");
}
.pdt {
  background-image: url("~@/assets/img/teams/predators-white.svg");
}
.avt {
  background-image: url("~@/assets/img/teams/ventus.png");
}
.app {
  background-image: url("~@/assets/img/teams/as-ppks.png");
}
.n7g {
  background-image: url("~@/assets/img/teams/natus.png");
}
.ols {
  background-image: url("~@/assets/img/teams/only-silvers.png");
}
.bbl {
  background-image: url("~@/assets/img/teams/brazilian-bulls.png");
}
.xbg {
  background-image: url("~@/assets/img/teams/xablau-gaming.png");
}
.bth {
  background-image: url("~@/assets/img/teams/brotherhood.png");
}
.kmc {
  background-image: url("~@/assets/img/teams/kommando.png");
}
.pdf {
  background-image: url("~@/assets/img/teams/pdf.png");
}
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
  .rvn {
    background-position-y: 45%;
  }
  .pdt {
    background-position-y: 60%;
  }
  .avt {
    background-position-y: 70%;
  }
  .n7g {
    background-position-y: 30%;
  }
  .bbl {
    background-position-y: 44%;
  }
  .xbg {
    background-position-y: 32%;
  }
  .bth {
    background-position-y: 48%;
    &:hover {
      background-size: 48% !important;
    }
  }
  .kmc {
    background-position-y: 48%;
  }
  .pdf {
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
  flex-wrap: wrap;
  justify-content: space-around;
}
.prev-match {
  flex-grow: 0;
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px -4px rgba(0, 0, 0, 0.5);
  background-size: 100% 100%;
  background-position: center;
  background-image: url("~@/assets/img/teams-bg.jpg");
  background-repeat: no-repeat;
  border-radius: 0;
  height: 202px;
  width: 270px;
  margin: 0.5rem;
  padding: 0;
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
      display: flex;
      flex-direction: column;

      .winner,
      .loser {
        display: block;
        font-size: 26px;
        text-transform: uppercase;
        font-weight: bold;
        text-shadow: 1px 1px 1px #000;
      }

      .winner {
        color: #27ae60;
      }

      .loser {
        color: #e74c3c;
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

.tba {
  color: gray;
  font-size: 90%;
}
.next-logos {
  background-size: contain;
  background-repeat: no-repeat;

  &.left {
    padding-right: 4rem;
    text-align: right;
    background-position-x: right;
  }
  &.right {
    padding-left: 4rem;
    text-align: left;
  }
}

// Maps
.de_train {
  background-image: url("https://gamersclub.com.br/images/sv_maps/1.png");
}
.de_overpass {
  background-image: url("https://gamersclub.com.br/images/sv_maps/2.png");
}
.de_nuke {
  background-image: url("https://gamersclub.com.br/images/sv_maps/3.png");
}
.de_mirage {
  background-image: url("https://gamersclub.com.br/images/sv_maps/4.png");
}
.de_inferno {
  background-image: url("https://gamersclub.com.br/images/sv_maps/5.png");
}
.de_dust2 {
  background-image: url("https://gamersclub.com.br/images/sv_maps/6.png");
}
.de_cache {
  background-image: url("https://gamersclub.com.br/images/sv_maps/8.png");
}
.de_vertigo {
  background-image: url("https://gamersclub.com.br/images/sv_maps/96.png");
}
</style>
