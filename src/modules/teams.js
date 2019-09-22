export default {
  namespaced: true,
  state: {
    teams: [
      {
        name: "TOXIC Gaming",
        id: "txg",
        logo: require("@/assets/img/teams/toxic.svg"),
        steam: "https://steamcommunity.com/groups/toxiggamiing",
        gc: "https://gamersclub.com.br/time/126573",
        matches: 0,
        wins: 0,
        defeats: 0,
        diff: 0,
        group: ""
      },
      {
        name: "Predators",
        id: "pdt",
        logo: require("@/assets/img/teams/predators-white.svg"),
        steam: "https://steamcommunity.com/groups/predatorsgg",
        gc: "https://gamersclub.com.br/time/135530",
        matches: 0,
        wins: 0,
        defeats: 0,
        diff: 0,
        group: ""
      },
      {
        name: "Raven",
        id: "rvn",
        logo: require("@/assets/img/teams/raven.png"),
        steam: "https://steamcommunity.com/groups/ravencsgoteam",
        gc: "https://gamersclub.com.br/time/136398",
        matches: 0,
        wins: 0,
        defeats: 0,
        diff: 0,
        group: ""
      },
      {
        name: "NATUS7 GAMING",
        id: "n7g",
        logo: require("@/assets/img/teams/natus.png"),
        steam: "https://steamcommunity.com/groups/natus7g",
        gc: "https://gamersclub.com.br/time/101392",
        matches: 0,
        wins: 0,
        defeats: 0,
        diff: 0,
        group: ""
      },
      {
        name: "a7-Ventu's Team",
        id: "avt",
        logo: require("@/assets/img/teams/ventus.png"),
        steam: "https://steamcommunity.com/groups/ventusbr",
        gc: "https://gamersclub.com.br/time/122255",
        matches: 0,
        wins: 0,
        defeats: 0,
        diff: 0,
        group: ""
      },
      {
        name: "VAC-eiros",
        id: "vac",
        logo: require("@/assets/img/teams/vac-eiros.png"),
        steam: "https://steamcommunity.com/groups/vac-eiros",
        gc: "https://gamersclub.com.br/time/136411",
        matches: 0,
        wins: 0,
        defeats: 0,
        diff: 0,
        group: ""
      },
      {
        name: "As ppks",
        id: "app",
        logo: require("@/assets/img/teams/as-ppks.png"),
        steam: "https://steamcommunity.com/groups/csdasppks",
        gc: "https://gamersclub.com.br/time/136623",
        matches: 0,
        wins: 0,
        defeats: 0,
        diff: 0,
        group: ""
      },
      {
        name: "Brazilian Bulls",
        id: "bbl",
        logo: require("@/assets/img/teams/brazilian-bulls.png"),
        steam: "https://steamcommunity.com/groups/brzllnblls",
        gc: "",
        matches: 0,
        wins: 0,
        defeats: 0,
        diff: 0,
        group: ""
      },
      {
        name: "Only Silvers",
        id: "ols",
        logo: require("@/assets/img/teams/only-silvers.png"),
        steam: "",
        gc: "",
        matches: 0,
        wins: 0,
        defeats: 0,
        diff: 0,
        group: ""
      },
      {
        name: "Xablau Gaming",
        id: "xbg",
        logo: require("@/assets/img/teams/xablau-gaming.png"),
        steam: "",
        gc: "",
        matches: 0,
        wins: 0,
        defeats: 0,
        diff: 0,
        group: ""
      },
      {
        name: "Brotherhood",
        id: "bth",
        logo: require("@/assets/img/teams/brotherhood.png"),
        steam: "",
        gc: "",
        matches: 0,
        wins: 0,
        defeats: 0,
        diff: 0,
        group: ""
      },
      {
        name: "Kommando CHOSK",
        id: "kmc",
        logo: require("@/assets/img/teams/kommando.png"),
        steam: "https://steamcommunity.com/groups/KommandoChosk",
        gc: "https://gamersclub.com.br/time/137193",
        matches: 0,
        wins: 0,
        defeats: 0,
        diff: 0,
        group: ""
      },
      {
        name: "Pros Don't Fake",
        id: "pdf",
        logo: require("@/assets/img/teams/pdf.png"),
        steam: "",
        gc: "",
        matches: 0,
        wins: 0,
        defeats: 0,
        diff: 0,
        group: ""
      }
    ],
    matches: []
  },

  getters: {
    teams(state) {
      return state.teams;
    },
    confirmedTeams(state) {
      return state.teams.map(team => {
        return {
          name: team.name,
          logo: team.logo,
          steam: team.steam,
          gc: team.gc
        };
      });
    },
    getByGroup(state) {
      return group => state.teams.filter(team => team.group === group);
    }
  },

  actions: {
    addResult({ commit }, data) {
      commit("ADD_RESULT", data);
    }
  },

  mutations: {
    ADD_RESULT(state, data) {
      const team1 = state.teams.find(team => team.id === data.team1);
      const team2 = state.teams.find(team => team.id === data.team2);

      // matches.push(data);
      team1.matches++;
      team2.matches++;
      if (data.scores[0] > data.scores[1]) {
        team1.wins++;
        team2.defeats++;
        const diff = data.scores[0] - data.scores[1];
        team1.diff += diff;
        team2.diff -= diff;
      } else {
        team1.defeats++;
        team2.wins++;
        const diff = data.scores[1] - data.scores[0];
        team1.diff -= diff;
        team2.diff += diff;
      }

      // state.matches.push({
      //   team1: team1.name,
      //   team2: team2.name,
      //   scores: data.scores,
      //   map: data.map
      // });
      // console.log(state.matches);
    }
  }
};
