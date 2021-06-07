import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const mainStorePath = 'index'; 

export default new Vuex.Store({
  state: {
    imageCollection: []
  },
  mutations: {

  },
  actions: {
    loadImage({state}, image) {
      
    },
  },
  modules: {

  },
});
