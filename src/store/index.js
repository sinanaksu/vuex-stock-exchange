import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageType: 'stock',
    apiURL: process.env.VUE_APP_API_URL,
    apiData: [],
    searchData: [],
    searchNames: [],
    selectSymbol: {},
    searchLoading: false,
    chartData: {}
  },
  mutations: {
    SET_API_DATA(state,payload) {
      state.apiData = payload
    },
    SET_PAGE_TYPE(state,payload) {
      state.pageType = payload
    },
    SET_SEARCH_DATA(state,payload) {
      state.searchData = payload
    },
    SET_SEARCH_LOADING(state,payload) {
      state.searchLoading = payload
    },
    SET_SELECT_SYMBOL(state,payload) {
      state.selectSymbol = payload
    },
  },
  actions: {
    searchSymbol({ state }, symbol) {
      if (state.searchLoading) return;

      state.searchLoading = true;
      console.log("searchSymbol:" + symbol + " - " + state.searchLoading);

        return axios.get(state.apiURL + 'function=SYMBOL_SEARCH&keywords=' + symbol, {
        })
        .then(res => {
          this.commit('SET_SEARCH_DATA',res.data.bestMatches)
          state.searchNames = []
          if(res.data.bestMatches){
            for (let index = 0; index < res.data.bestMatches.length; index++) {
              const element = res.data.bestMatches[index];
              state.searchNames.push(element["2. name"])
            }
          }
          //state.searchLoading = false
        })
        .catch(err => console.log(err)).then(
          state.searchLoading = false
        )
        
    },
    getSymbolData({ state }, data) {
      return axios.get(state.apiURL + 'function=' + data.series + '&symbol=' + data.symbol, {
      })
    .then(res => {
          state.chartData = res.data;
          console.log("getSymbolData:" + data.symbol);
      })
      .catch(err => console.log(err))
    },
  },
  modules: {},
});
