<template>
  <section class="contact-page pb-5">
    <div class="container text-white">
      <h2 class="pb-5">Tabela de Classificação</h2>
      <h4>Grupo A</h4>
      <table class="table text-white table-striped table-hover table-borderless text-center">
        <thead class="thead-dark">
          <tr>
            <th class="col-2px-fail"></th>
            <th class="fixed-width" scope="col" title="Posição">#</th>
            <th scope="col">Equipe</th>
            <th class="fixed-width" scope="col" title="Partidas Disputadas">J</th>
            <th class="fixed-width" scope="col" title="Vitórias">V</th>
            <th class="fixed-width" scope="col" title="Derrotas">D</th>
            <th class="fixed-width" scope="col" title="Saldo de Rounds">SR</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in sortedGroupA"
            :key="index"
            :style="row.id == 'vac' ? 'background: #63020260; color: #ffffff70;' : ''"
          >
            <td :class="index == 1 || index == 2 ? 'col-2px-sucess' : 'col-2px-fail'"></td>
            <td scope="row">{{ index + 1 }}</td>
            <td class="name-logo row">
              <div class="col-md-5">
                <span
                  class="team-nome"
                  :style="row.id == 'vac' ? 'color: #ffffff70;' : ''"
                >{{ row.name }}</span>
              </div>
              <span
                class="col-md-4 logo"
                :class="row.id"
                :style="row.id == 'vac' ? 'opacity: 0.5;' : ''"
              ></span>
            </td>
            <td>{{ row.matches }}</td>
            <td>{{ row.wins }}</td>
            <td>{{ row.defeats }}</td>
            <td>{{ row.diff }}</td>
          </tr>
        </tbody>
      </table>

      <h4>Grupo B</h4>
      <table class="table text-white table-striped table-hover table-borderless text-center">
        <thead class="thead-dark">
          <tr>
            <th class="col-2px-fail"></th>
            <th class="fixed-width" scope="col" title="Posição">#</th>
            <th scope="col">Equipe</th>
            <th class="fixed-width" scope="col" title="Partidas Disputadas">J</th>
            <th class="fixed-width" scope="col" title="Vitórias">V</th>
            <th class="fixed-width" scope="col" title="Derrotas">D</th>
            <th class="fixed-width" scope="col" title="Saldo de Rounds">SR</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in sortedGroupB"
            :key="index"
            :style="row.id == 'pdt' || row.id == 'bth' ? 'background: #63020260; color: #ffffff70;' : ''"
          >
            <td :class="index == 0 || index == 3 ? 'col-2px-sucess' : 'col-2px-fail'"></td>
            <td scope="row">{{ index + 1 }}</td>
            <td class="name-logo row">
              <div class="col-md-5">
                <span
                  class="team-nome"
                  :style="row.id == 'pdt' ? 'color: #ffffff70;' : ''"
                >{{ row.name }}</span>
              </div>
              <span
                class="col-md-4 logo"
                :class="row.id"
                :style="row.id == 'pdt' || row.id == 'bth' ? 'opacity: 0.5;' : ''"
              ></span>
            </td>
            <td>{{ row.matches }}</td>
            <td>{{ row.wins }}</td>
            <td>{{ row.defeats }}</td>
            <td>{{ row.diff }}</td>
          </tr>
        </tbody>
      </table>

      <div v-if="false" class="pb-5"></div>
      <hr v-if="false" />

      <h3 v-if="false" class="pt-5 pb-3">Próximos Confrontos</h3>
      <table
        v-if="false"
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
                {{
                match.teams[0]
                }}
              </span>
            </td>
            <td>vs</td>
            <td class="next-logos right" :class="match.teamsId[1]">
              <span :class="match.date === 'TBA' ? 'tba' : ''">
                {{
                match.teams[1]
                }}
              </span>
            </td>
            <td>{{ match.date | moment("dddd, DD/MM HH:mm") }}</td>
            <td>Grupo {{ match.group }}</td>
          </tr>
        </tbody>
      </table>
      <button
        v-if="false"
        class="btn btn-light"
        @click="toConfirmShow = !toConfirmShow"
        style="color: #b01ba5"
      >
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
              <span :class="match.scores ? 'winner' : ''">{{ match.teams[0] }}</span>
              <span v-if="match.scores">{{ match.scores[0] }} vs {{ match.scores[1] }}</span>
              <span v-else>vs</span>
              <span :class="match.scores ? 'loser' : ''">
                {{
                match.teams[1]
                }}
              </span>
            </p>
            <p v-if="!match.scores" style="margin: 0; text-align: center;">
              <span class="badge badge-danger">Aguardando Resultados</span>
            </p>
            <p
              v-else-if="!match.map"
              style="margin: 0; text-align: center; position: absolute; bottom: 0; width: 100%;"
              class="teams"
            >
              <span class="badge badge-danger">W.O.</span>
            </p>
            <p v-else class="date">{{ match.date | moment("dddd, DD/MM HH:mm") }}</p>
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
      teams: ["vac", "txg"],
      date: new Date("2019-10-15 21:00")
    });

    this.addMatch({
      teams: ["ols", "app"],
      date: new Date("2019-10-17 18:30")
    });

    this.addMatch({
      teams: ["ols", "txg"],
      date: new Date("2019-10-17 18:30")
    });

    this.addMatch({
      teams: ["vac", "rvn"],
      date: new Date("2019-10-09 23:00")
    });

    this.addMatch({
      teams: ["app", "kmc"],
      date: new Date("2019-10-15 22:00")
    });

    this.addMatch({
      teams: ["ols", "kmc"],
      date: new Date("2019-10-17 18:30")
    });

    this.addMatch({
      teams: ["app", "vac"],
      date: new Date("2019-10-15 21:00")
    });

    this.addMatch({
      teams: ["txg", "kmc"],
      date: new Date("2019-10-05 22:30")
    });

    this.addMatch({
      teams: ["app", "rvn"],
      date: new Date("2019-10-14 22:00")
    });

    this.addMatch({
      teams: ["vac", "ols"],
      date: new Date("2019-10-17 18:30")
    });

    this.addMatch({
      teams: ["app", "txg"],
      date: new Date("2019-10-09 22:00")
    });

    this.addMatch({
      teams: ["vac", "kmc"],
      date: new Date("2019-10-10 22:00")
    });

    this.addMatch({
      teams: ["rvn", "ols"],
      date: new Date("2019-10-17 18:30")
    });

    this.addMatch({
      teams: ["bbl", "n7g"],
      date: new Date("2019-10-11 22:00")
    });

    // this.addMatch({
    //   teams: ["pdf", "xbg"],
    //   date: new Date("2019-10-06 16:30")
    // });

    // this.addMatch({
    //   teams: ["bbl", "pdf"]
    // });

    this.addMatch({
      teams: ["n7g", "avt"],
      date: new Date("2019-10-09 22:30")
    });

    this.addMatch({
      teams: ["bbl", "avt"],
      date: new Date("2019-10-15 21:30")
    });

    this.addMatch({
      teams: ["xbg", "bth"],
      date: new Date("2019-10-20 22:30")
    });

    this.addMatch({
      teams: ["avt", "pdt"],
      date: new Date("2019-10-16 21:30")
    });

    // this.addMatch({
    //   teams: ["bth", "pdf"]
    // });

    this.addMatch({
      teams: ["n7g", "xbg"],
      date: new Date("2019-10-17 23:18")
    });

    this.addMatch({
      teams: ["bbl", "pdt"],
      date: new Date("2019-10-17 19:00")
    });

    this.addMatch({
      teams: ["avt", "xbg"],
      date: new Date("2019-10-07 21:30")
    });

    // this.addMatch({
    //   teams: ["n7g", "pdf"]
    // });

    this.addMatch({
      teams: ["bbl", "bth"],
      date: new Date("2019-10-17 18:30")
    });

    this.addMatch({
      teams: ["pdt", "xbg"],
      date: new Date("2019-10-10 20:00")
    });

    // this.addMatch({
    //   teams: ["avt", "pdf"]
    // });

    this.addMatch({
      teams: ["pdt", "n7g"],
      date: new Date("2019-10-02 22:00")
    });

    // this.addMatch({
    //   teams: ["pdt", "pdf"],
    //   date: new Date("2019-10-06 15:00")
    // });

    this.addMatch({
      teams: ["pdt", "bth"],
      date: new Date("2019-10-06 17:00")
    });

    this.addMatch({
      teams: ["rvn", "txg"],
      date: new Date("2019-10-03 18:00")
    });

    this.upMatch({
      teamsId: ["pdt", "n7g"],
      scores: [16, 10],
      map: "de_dust2",
      date: new Date("2019-10-02 22:32"),
      lobby: "https://gamersclub.com.br/lobby/partida/5912028"
    });

    this.upMatch({
      teamsId: ["txg", "rvn"],
      scores: [16, 1],
      map: "de_cache",
      date: new Date("2019-10-03 18:02"),
      lobby: "https://gamersclub.com.br/lobby/partida/5916545"
    });

    this.upMatch({
      teamsId: ["avt", "bth"],
      scores: [16, 9],
      map: "de_inferno",
      date: new Date("2019-10-03 23:45"),
      lobby: "https://gamersclub.com.br/lobby/partida/5920036"
    });

    this.upMatch({
      teamsId: ["txg", "kmc"],
      scores: [16, 3],
      map: "de_cache",
      date: new Date("2019-10-05 22:26"),
      lobby: "https://gamersclub.com.br/lobby/partida/5933475"
    });

    this.upMatch({
      teamsId: ["pdt", "bth"],
      scores: [16, 4],
      map: "de_train",
      date: new Date("2019-10-06 17:02"),
      lobby: "https://gamersclub.com.br/lobby/partida/5938644"
    });

    this.upMatch({
      teamsId: ["avt", "xbg"],
      scores: [16, 10],
      map: "de_mirage",
      date: new Date("2019-10-07 21:42"),
      lobby: "https://gamersclub.com.br/lobby/partida/5947708"
    });

    this.upMatch({
      teamsId: ["avt", "n7g"],
      scores: [16, 11],
      map: "de_cache",
      date: new Date("2019-10-09 22:56"),
      lobby: "https://gamersclub.com.br/lobby/partida/5960371"
    });

    this.upMatch({
      teamsId: ["txg", "app"],
      scores: [16, 2],
      map: "de_overpass",
      date: new Date("2019-10-09 22:33"),
      lobby: "https://gamersclub.com.br/lobby/partida/5960150"
    });

    this.upMatch({
      teamsId: ["vac", "rvn"],
      scores: [16, 1],
      map: "de_mirage",
      date: new Date("2019-10-09 23:12"),
      lobby: "https://gamersclub.com.br/lobby/partida/5960521"
    });

    this.upMatch({
      teamsId: ["pdt", "xbg"],
      scores: [16, 9],
      map: "de_dust2",
      date: new Date("2019-10-10 20:22"),
      lobby: "https://gamersclub.com.br/lobby/partida/5964919"
    });

    this.upMatch({
      teamsId: ["vac", "kmc"],
      scores: [16, 4],
      map: "de_mirage",
      date: new Date("2019-10-10 21:59"),
      lobby: "https://gamersclub.com.br/lobby/partida/5965660"
    });

    this.upMatch({
      teamsId: ["n7g", "bbl"],
      scores: [16, 9],
      map: "de_overpass",
      date: new Date("2019-10-11 22:17"),
      lobby: "https://gamersclub.com.br/lobby/partida/5971633"
    });

    this.upMatch({
      teamsId: ["rvn", "app"],
      scores: [16, 10],
      map: "de_mirage",
      date: new Date("2019-10-14 22:18"),
      lobby: "https://gamersclub.com.br/lobby/partida/5995252"
    });

    this.upMatch({
      teamsId: ["vac", "txg"],
      scores: [16, 10],
      map: "de_cache",
      date: new Date("2019-10-15 21:06"),
      lobby: "https://gamersclub.com.br/lobby/partida/6001535"
    });

    this.upMatch({
      teamsId: ["vac", "app"],
      scores: [1, 0]
    });

    this.upMatch({
      teamsId: ["kmc", "app"],
      scores: [1, 0]
    });

    this.upMatch({
      teamsId: ["avt", "bbl"],
      scores: [16, 1],
      map: "de_cache",
      date: new Date("2019-10-15 22:30"),
      lobby: "https://gamersclub.com.br/lobby/partida/6002527"
    });

    this.upMatch({
      teamsId: ["app", "ols"],
      scores: [1, 0],
      date: new Date("2019-10-15 22:30")
    });

    this.upMatch({
      teamsId: ["avt", "pdt"],
      scores: [16, 13],
      map: "de_nuke",
      date: new Date("2019-10-16 21:53"),
      lobby: "https://gamersclub.com.br/lobby/partida/6008076"
    });

    this.upMatch({
      teamsId: ["bbl", "pdt"],
      scores: [1, 0],
      date: new Date("2019-10-17 19:00")
    });

    this.upMatch({
      teamsId: ["bth", "bbl"],
      scores: [1, 0],
      date: new Date("2019-10-17 18:30")
    });

    this.upMatch({
      teamsId: ["txg", "ols"],
      scores: [1, 0],
      date: new Date("2019-10-17 18:30")
    });

    this.upMatch({
      teamsId: ["kmc", "ols"],
      scores: [1, 0],
      date: new Date("2019-10-17 18:31")
    });

    this.upMatch({
      teamsId: ["vac", "ols"],
      scores: [1, 0],
      date: new Date("2019-10-17 18:32")
    });

    this.upMatch({
      teamsId: ["rvn", "ols"],
      scores: [1, 0],
      date: new Date("2019-10-17 18:33")
    });

    this.upMatch({
      teamsId: ["n7g", "xbg"],
      scores: [16, 11],
      map: "de_cache",
      date: new Date("2019-10-17 23:18"),
      lobby: "https://gamersclub.com.br/lobby/partida/6014821"
    });

    this.upMatch({
      teamsId: ["bth", "xbg"],
      scores: [1, 0],
      date: new Date("2019-10-20 22:30")
    });
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

    // Vitórias > Derrotas > Saldo de Rounds > Nome
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
  flex-wrap: nowrap;
  justify-content: flex-start;
  height: 242px;
  overflow-x: scroll;
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
