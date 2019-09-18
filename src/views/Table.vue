<template>
  <section class="contact-page pb-5">
    <div class="container text-white">
      <h2 class="pb-5">{{ title }}</h2>
      <table
        class="table text-white table-striped table-hover table-borderless text-center"
      >
        <thead class="thead-dark">
          <tr>
            <th class="col-2px-fail"></th>
            <th scope="col" v-for="(header, i) in table.headers" :key="i">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, j) in teamsSortColocacao" :key="j">
            <td :class="j < 4 ? 'col-2px-sucess' : 'col-2px-fail'"></td>
            <td scope="row">{{ j + 1 }}</td>
            <td class="name-logo row">
              <div class="col-md-5">
                <span class="team-nome">{{ row.equipe }}</span>
              </div>
              <div class="col-md-4 minha-classe" :id="row.cod"></div>
            </td>
            <td>{{ row.j }}</td>
            <td>{{ row.v }}</td>
            <td>{{ row.d }}</td>
            <td>{{ row.sr }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Tabela de Classificação",
      table: {
        headers: ["#", "Equipe", "J", "V", "D", "SR"],
        rows: [
          {
            cod: "avt",
            equipe: "a7-Ventu's Team",
            j: "0",
            v: "0",
            d: "0",
            sr: "0"
          },
          { cod: "app", equipe: "As ppks", j: "0", v: "0", d: "0", sr: "0" },
          {
            cod: "bbl",
            equipe: "Brazilian Bulls",
            j: "0",
            v: "0",
            d: "0",
            sr: "0"
          },
          {
            cod: "n7g",
            equipe: "NATUS7 GAMING",
            j: "0",
            v: "0",
            d: "0",
            sr: "0"
          },
          {
            cod: "ols",
            equipe: "Only Silvers",
            j: "0",
            v: "0",
            d: "0",
            sr: "0"
          },
          { cod: "pdt", equipe: "Predators", j: "0", v: "0", d: "0", sr: "0" },
          { cod: "rvn", equipe: "Raven", j: "0", v: "0", d: "0", sr: "0" },
          {
            cod: "txg",
            equipe: "TOXIC Gaming",
            j: "0",
            v: "0",
            d: "0",
            sr: "0"
          },
          { cod: "vac", equipe: "VAC-eiros", j: "0", v: "0", d: "0", sr: "0" }
        ]
      }
    };
  },
  computed: {
    teamsSortName() {
      const rows = this.table.rows;

      return rows.sort(function(a, b) {
        let equipeA = a.equipe.toUpperCase();
        let equipeB = b.equipe.toUpperCase();
        if (equipeA > equipeB) {
          return 1;
        }
        if (equipeA < equipeB) {
          return -1;
        }
        return 0;
      });
    },

    //Vitoria>Saldo de Rounds > Nome
    teamsSortColocacao() {
      const rows = this.table.rows;

      return rows.sort(function(a, b) {
        let vitA = a.v;
        let vitB = b.v;
        if (vitA < vitB) {
          return 1;
        } else if (vitA > vitB) {
          return -1;
        } else if (vitA == vitB) {
          let srA = a.sr;
          let srB = b.sr;
          if (srA < srB) {
            return 1;
          } else if (srA > srB) {
            return -1;
          } else if (srA == srB) {
            let equipeA = a.equipe.toUpperCase();
            let equipeB = b.equipe.toUpperCase();
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

.thead-dark th {
  background-color: #1b0d36 !important;
}

.table-hover tr {
  &:hover {
    color: #fff !important;
    // font-weight: bolder !important;
    background-color: rgba(0, 0, 0, 0.3);
  }
}

.name-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  .minha-classe {
    flex: 1;
    height: 40px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  #vac {
    background-image: url("~@/assets/img/teams/vac-min.png");
  }
  #rvn {
    background-image: url("~@/assets/img/teams/raven-min.png");
  }
  #txg {
    background-image: url("~@/assets/img/teams/toxic-min.png");
  }
  #pdt {
    background-image: url("~@/assets/img/teams/predators-min.png");
  }
  #avt {
    background-image: url("~@/assets/img/teams/ventus-min.png");
  }
  #app {
    background-image: url("~@/assets/img/teams/as-ppk-min.png");
  }
  #n7g {
    background-image: url("~@/assets/img/teams/natus-min.png");
  }
  #ols {
    background-image: url("~@/assets/img/teams/only-silver-min.png");
  }
  #bbl {
    background-image: url("~@/assets/img/teams/brazilian-bulls-min.png");
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
