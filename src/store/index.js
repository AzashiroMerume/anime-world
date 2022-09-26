import { createStore } from 'vuex'
import axiosInstance from '@/api/index'
import { /*ANIMES_BY_CATEGORY,*/ ANIMES_BY_PAGE } from '@/api/routes'

export default createStore({
  state: {
    animes: {},
    pages: 0,
    category: ''
  },
  getters: {
    getAnimesByPage: (state) => (page) => {
      const pageAnimes = state.animes[page]
      return pageAnimes
    },
    getAnimesByCategory: (state) => (category) => {
      const categoryAnimes = state.animes[category]
      return categoryAnimes
    }
  },
  mutations: {
    setAnimes(state, { page, animes }) {
      state.animes[page] = animes
    },
    setPages(state, pages) {
      state.pages = pages;
    },
  },
  actions: {
    fetchAnimes({ state, commit }, page) {
      const pageAnimes = state.animes[page];
      if (pageAnimes) {
        return Promise.resolve(pageAnimes);
      }
      return axiosInstance
        .get(ANIMES_BY_PAGE(page))
        .then(({ data }) => {
          console.log('Hello, World');
          console.log(data.pagination);
          commit("setAnimes", {
            page,
            animes: data.data,
          });
          commit("setPages", data.pagination.last_visible_page);
        })
        .catch((err) => console.log(err));
    },
  },
  modules: {
  }
})
