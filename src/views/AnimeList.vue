<template>
  <div>Hello my lord</div>
  <anime-block v-for="anime in animes" :key="anime.mal_id" :anime="anime"></anime-block>
</template>
<script>

import AnimeBlock from "@/components/AnimeBlock.vue"

export default {
  name: 'anime-list',
  data() {
    return {
      currentPage: 1,
    }
  },
  components: {
    AnimeBlock
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
