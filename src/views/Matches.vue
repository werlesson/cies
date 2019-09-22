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
            <th scope="col" title="Posição">#</th>
            <th scope="col">Equipe</th>
            <th scope="col" title="Partidas Disputadas">J</th>
            <th scope="col" title="Vitórias">V</th>
            <th scope="col" title="Derrotas">D</th>
            <th scope="col" title="Saldo de Rounds">SR</th>
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
            <th scope="col" title="Posição">#</th>
            <th scope="col">Equipe</th>
            <th scope="col" title="Partidas Disputadas">J</th>
            <th scope="col" title="Vitórias">V</th>
            <th scope="col" title="Derrotas">D</th>
            <th scope="col" title="Saldo de Rounds">SR</th>
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
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters, mapActions } = createNamespacedHelpers("teams");

export default {
  mounted() {
    this.addResult({
      team1: "bth",
      team2: "kmc",
      scores: [19, 15],
      map: "de_mirage"
    });

    this.addResult({
      team1: "ols",
      team2: "xbg",
      scores: [16, 14],
      map: "de_dust2"
    });
  },

  computed: {
    ...mapGetters(["getByGroup"]),

    sortedGroupA() {
      const groupA = this.getByGroup("");
      return this.teamsSortColocacao(groupA);
    },

    sortedGroupB() {
      const groupB = this.getByGroup("B");
      return this.teamsSortColocacao(groupB);
    }
  },

  methods: {
    ...mapActions(["addResult"]),

    // Vitoria > Saldo de Rounds > Nome
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
  }
};
</script>

<style lang="scss" scoped>
// .contact-page {
//   padding-top: 120px;
// }

table tbody tr td {
  padding: 0.25rem;
  vertical-align: middle;
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
    background-image: url("~@/assets/img/cies-logo-white.svg");
    background-position-y: 48%;
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
