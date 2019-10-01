import { MapBackgrounds, _teams, _matches } from "./exports";

export default {
  namespaced: true,

  state: {
    teams: _teams(),
    matches: _matches()
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
    },
    matchesPrev(state) {
      return state.matches.filter(match => match.date > new Date());
    }
  },

  actions: {
    reset({ commit }) {
      commit("RESET");
    },

    addResult({ commit }, data) {
      commit("ADD_RESULT", data);
    }
  },

  mutations: {
    RESET(state) {
      state.teams = _teams();
      state.matches = _matches();
    },

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

      state.matches.push({
        team1: team1.name,
        team2: team2.name,
        scores: data.scores,
        map: MapBackgrounds.find(map => data.map === map.map).bg,
        date: data.date,
        lobby: data.lobby
      });
      // console.log("matches", state.matches);
    }
  }
};
