import { _teams, _matches } from "./exports";

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
    getTeamById(state) {
      return teamId => state.teams.find(team => team.id === teamId);
    },
    matchesPrev(state) {
      return state.matches
        .filter(match => match.date < new Date())
        .sort((a, b) => +new Date(a.date) - +new Date(b.date));
    },
    matchesNext(state) {
      return state.matches
        .filter(match => match.date > new Date())
        .sort((a, b) => +new Date(a.date) - +new Date(b.date));
    }
  },

  actions: {
    reset({ commit }) {
      commit("RESET");
    },

    addMatch({ commit }, data) {
      commit("ADD_MATCH", data);
    },

    upMatch({ commit }, data) {
      commit("UP_MATCH", data);
    }
  },

  mutations: {
    RESET(state) {
      state.teams = _teams();
      state.matches = _matches();
    },

    ADD_MATCH(state, data) {
      const ascTeamsId = data.teams.sort();
      const team1 = this.getters["teams/getTeamById"](ascTeamsId[0]);
      const team2 = this.getters["teams/getTeamById"](ascTeamsId[1]);

      state.matches.push({
        teamsId: ascTeamsId,
        teams: [team1.name, team2.name],
        date: data.date,
        group:
          team1.group === team2.group ? team1.group : "Grupos Errados, Moral"
      });
    },

    UP_MATCH(state, data) {
      const team1 = this.getters["teams/getTeamById"](data.teamsId[0]);
      const team2 = this.getters["teams/getTeamById"](data.teamsId[1]);
      const ascTeamsId = data.teamsId.sort();

      const match = state.matches.find(
        match => JSON.stringify(match.teamsId) === JSON.stringify(ascTeamsId)
      );

      match.scores = data.scores;
      match.map = data.map;
      match.date = data.date;
      match.lobby = data.lobby;
      match.teams = [team1.name, team2.name];

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
    }
  }
};
