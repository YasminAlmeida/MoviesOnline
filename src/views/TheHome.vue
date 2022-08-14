<template>
  <div class="home">
    <!-- <TheHeader msg="Welcome to Your Vue.js App" /> -->
    <TheHeader />
    <TheMovies />
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
};
</script>
