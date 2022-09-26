<template>
  <div>Hello my lord</div>
  <div class="anime-list">
    <anime-block v-for="anime in animes" :key="anime.mal_id" :anime="anime"></anime-block>
  </div>
  <div class="pagination">
    <v-pagination v-model="currentPage" :pages="pages" :range-size="1" active-color="#DCEDFF"
      @update:modelValue="updateHandler" />
  </div>
</template>
<script>

import AnimeBlock from "@/components/AnimeBlock.vue"
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
  name: 'anime-list',
  data() {
    return {
      currentPage: 1,
    }
  },
  components: {
    AnimeBlock,
    VPagination
  },
  computed: {
    animes() {
      return this.$store.getters["getAnimesByPage"](this.currentPage)
    },
    pages() {
      return this.$store.state.pages;
    },
  },
  watch: {
    currentPage: {
      handler(page) {
        this.$store.dispatch("fetchAnimes", page);
      },
      immediate: true
    }
  },
  methods: {
    updateHandler(page) {
      console.log(page);
    },
  },
}
</script>
<style>

</style>
