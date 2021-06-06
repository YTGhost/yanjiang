import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {
      branch_id: 1,
      branch_name: "",
      name: "",
    },
    candidates: [
      {
        id: 1,
        name: "赵晓艺",
        total: 0,
        score: [0, 0, 0, 0, 0],
      },
      {
        id: 2,
        name: "马兴宇",
        total: 0,
        score: [0, 0, 0, 0, 0],
      },
      {
        id: 3,
        name: "李昀家",
        total: 0,
        score: [0, 0, 0, 0, 0],
      },
      {
        id: 4,
        name: "陈艳芳",
        total: 0,
        score: [0, 0, 0, 0, 0],
      },
      {
        id: 5,
        name: "任 品",
        total: 0,
        score: [0, 0, 0, 0, 0],
      },
      {
        id: 6,
        name: "王 波",
        total: 0,
        score: [0, 0, 0, 0, 0],
      },
      {
        id: 7,
        name: "梁晓龙",
        total: 0,
        score: [0, 0, 0, 0, 0],
      },
      {
        id: 8,
        name: "焉域政",
        total: 0,
        score: [0, 0, 0, 0, 0],
      },
    ],
  },
  mutations: {
    SET_SCORE: (state, data) => {
      let id = data.id;
      let list = data.list;
      for (let i = 0; i < 5; i++) {
        state.candidates[id - 1].score[i] = list[i].score;
      }
      state.candidates[id - 1].total = data.total;
    },
    SET_PROFILE: (state, data) => {
      state.profile.branch_id = data.branch_id;
      state.profile.branch_name = data.branch_name;
      state.profile.name = data.name;
    },
  },
  actions: {
    setScore({ commit }, res) {
      commit("SET_SCORE", res);
    },
    setProfile({ commit }, res) {
      commit("SET_PROFILE", res);
    },
  },
  modules: {},
});
