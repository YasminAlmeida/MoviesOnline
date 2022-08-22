<template>
  <TheHeader />
  <div v-for="section in sections" :key="section">
    <TheMovies :title="section.title" :types="section.types" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheMovies from "@/components/TheMovies.vue";
export default {
  name: "MoviesPage",
  components: {
    TheHeader,
    TheMovies,
  },
  data() {
    return {
      sections: [
        {
          title: "Filmes Populares",
          types: "popular",
        },
        {
          title: "Filmes Recentes",
          types: "now_playing",
        },
        {
          title: "Séries Populares",
          types: "popular",
        },
        {
          title: "Séries Recentes",
          types: "on_the_air",
        },
      ],
    };
  },
};
</script>

<style></style>
