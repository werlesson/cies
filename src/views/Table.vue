<template>
  <section class="contact-page pb-5">
    <div class="container text-white">
      <h2 class="pb-5">{{title}}</h2>
      <table class="table text-white table-striped table-hover table-borderless text-center">
      <thead class="thead-dark">
        <tr>
          <th scope="col" v-for="(header, i) in table.headers" :key="i">{{header}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, j) in table.rows" :key="j">
          <th scope="row">{{j+1}}</th>
          <!-- <td v-for="(v, index) in row" :key="index">{{v}}</td> -->
            <td class="name-logo row">
              <div class="col-md-7">
                <span>{{row[1]}}</span>
              </div>
              <div class="col-md-4 minha-classe" :id="row[0]"></div>
              <div class="col-md-1"></div>
            </td>
          <td>{{row[2]}}</td>
          <td>{{row[3]}}</td>
          <td>{{row[4]}}</td>
          <td>{{row[5]}}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      title: "Tabela de Jogos",
      table: {
        headers: ["#", "Equipe", "J", "V", "D", "SR"],
        rows: [ 
          ["avt", "a7-Ventu's Team","0","0","0", "0"],
          ["app", "As ppks",        "0","0","0", "0"],
          ["bbl", "Brazilian Bulls","0","0","0", "0"], 
          ["n7g", "NATUS7 GAMING",  "0","0","0", "0"],
          ["ols", "Only Silvers",   "0","0","0", "0"],
          ["pdt", "Predators",      "0","0","0", "0"],
          ["rvn", "Raven",          "0","0","0", "0"],
          ["txg", "TOXIC Gaming",   "0","0","0", "0"],
          ["vac", "VAC-eiros",      "0","0","0", "0"]
        ]
      }
    }
  },
  computed: {
    teamsSort() {
      return this.rows.sort(function(a, b) {
        let value1 = a[0].toUpperCase();
        let value2 = b[0].toUpperCase();
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
.contact-page {
  // padding-top: 120px;
}

.thead-dark th {
  background-color: #1b0d36 !important;
}

.table-hover tr {
  &:hover{
    color: #FFF !important;
    font-weight: bolder !important;
    background-color: rgba(0,0,0,0.3);
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
}

</style>