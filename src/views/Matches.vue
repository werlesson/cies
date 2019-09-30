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

      <!-- CONFRONTOS MANUAL GRUPO A -->
      <h3 class="pt-5 pb-3">Confrontos Grupo A</h3>
      <div class="grupo-a" v-for="(row, index) in gamesA" :key="index">
        <h4 v-if="index == 4" class="pt-3 pb-3">
          Rodada {{ index + 1 }} - Inicio em
          {{ getDataToDisplay(index, "A") }} e fim em 20/9/2019
        </h4>
        <h4 v-else class="pt-3 pb-3">
          Rodada {{ index + 1 }} - Inicio em {{ getDataToDisplay(index, "A") }}
        </h4>
        <table
          class="table text-white table-striped table-hover table-borderless text-center"
        >
          <thead class="thead-dark">
            <tr v-if="index == 0">
              <th scope="col">Equipe 1</th>
              <th scope="col"></th>
              <th scope="col">Equipe 2</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in row" :key="index">
              <td scope="row">{{ teams[row[0]] }}</td>
              <td scope="row">x</td>
              <td scope="row">{{ teams[row[1]] }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pb-5"></div>
      <hr />

      <!-- CONFRONTOS MANUAL GRUPO B -->
      <h3 class="pt-5 pb-3">Confrontos Grupo B</h3>
      <div class="grupo-a" v-for="(row, index) in gamesB" :key="index">
        <h4 v-if="index == 6" class="pt-3 pb-3">
          Rodada {{ index + 1 }} - Inicio em {{ getDataToDisplay(index) }} e fim
          em 20/9/2019
        </h4>
        <h4 v-else class="pt-3 pb-3">
          Rodada {{ index + 1 }} - Inicio em {{ getDataToDisplay(index) }}
        </h4>
        <table
          class="table text-white table-striped table-hover table-borderless text-center"
        >
          <thead class="thead-dark">
            <tr v-if="index == 0">
              <th scope="col">Equipe 1</th>
              <th scope="col"></th>
              <th scope="col">Equipe 2</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in row" :key="index">
              <td scope="row">{{ teams[row[0]] }}</td>
              <td scope="row">x</td>
              <td scope="row">{{ teams[row[1]] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters, mapActions } = createNamespacedHelpers("teams");

export default {
  mounted() {
    this.addResult({
      team1: "kmc",
      team2: "rvn",
      scores: [16, 10],
      map: "de_dust2",
      date: "26/10/2019"
    });

    this.addResult({
      team1: "xbg",
      team2: "bbl",
      scores: [16, 7],
      map: "de_cache",
      date: "26/10/2019"
    });

    this.addResult({
      team1: "bth",
      team2: "n7g",
      scores: [16, 14],
      map: "de_mirage",
      date: "28/10/2019"
    });
  },

  computed: {
    ...mapGetters(["getByGroup"]),

    sortedGroupA() {
      const groupA = this.getByGroup("A");
      return this.teamsSortColocacao(groupA);
    },

    sortedGroupB() {
      const groupB = this.getByGroup("B");
      return this.teamsSortColocacao(groupB);
    }
  },

  data() {
    return {
      teams: [
        "Não Joga",
        "a7-Ventu's Team",
        "As ppks",
        "Brazilian Bulls",
        "Brotherhood",
        "Kommando", // CHOSK
        "NATUS7 GAMING",
        "Only Silvers",
        "PREDATORS",
        "Pros Don't Fake",
        "Raven",
        "Toxic Gaming",
        "VAC-eiros",
        "Xablau Gaming"
      ],
      gamesA: [
        // rodada 1
        [[11, 12], [2, 7], [5, 10]],
        // rodada 2
        [[11, 7], [12, 10], [2, 5]],
        // rodada 3
        [[11, 10], [7, 5], [12, 2]],
        // rodada 4
        [[11, 5], [10, 2], [7, 12]],
        // rodada 5
        [[11, 2], [5, 12], [10, 7]]
      ],
      gamesB: [
        // rodada 1
        [[3, 13], [4, 6], [8, 9], [0, 1]],
        // rodada 2
        [[3, 6], [13, 9], [4, 1], [8, 0]],
        // rodada 3
        [[3, 9], [6, 1], [13, 0], [4, 8]],
        // rodada 4
        [[3, 1], [9, 0], [6, 8], [13, 4]],
        // rodada 5
        [[3, 0], [1, 8], [9, 4], [6, 13]],
        // rodada 6
        [[3, 8], [0, 4], [1, 13], [9, 6]],
        // rodada 7
        [[3, 4], [8, 13], [0, 6], [1, 9]]
      ],
      dataAtual: new Date()
    };
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
    },

    getDataToDisplay(increment = 0, grupo = "B") {
      let dataInicial = new Date(2019, 9, 23, 0, 0, 0);
      let dataFinal = new Date(2019, 10, 22, 0, 0, 0);

      dataInicial.setDate(
        dataInicial.getDate() + increment * (grupo == "A" ? 6 : 4)
      );

      if (dataInicial > dataFinal)
        return (
          dataFinal.getDate() +
          "/" +
          dataFinal.getMonth() +
          "/" +
          dataFinal.getFullYear()
        );

      return (
        dataInicial.getDate() +
        "/" +
        dataInicial.getMonth() +
        "/" +
        dataInicial.getFullYear()
      );
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
</style>
