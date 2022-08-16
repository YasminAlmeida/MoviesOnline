<template>
  <div class="home">
    <!-- <TheHeader msg="Welcome to Your Vue.js App" /> -->
    <TheHeader />
    <div v-for="section in sections" :key="section">
      <TheMovies :title="section.title" :types="section.types" />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheMovies from "@/components/TheMovies.vue";
export default {
  name: "TheHome",
  components: {
    TheHeader,
    TheMovies,
  },
  data() {
    return {
      sections: [
        {
          title: "Mais populares",
          types: "popular",
        },
        {
          title: "Recentes",
          types: "now_playing",
        },
      ],
    };
  },
};
</script>
