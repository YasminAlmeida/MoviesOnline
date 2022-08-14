<template>
  <div></div>
</template>

<script>
import { api } from "@/TheServices.js";
export default {
  name: "TheMovies",
  data() {
    return {
      api: [],
      // types: "popular",
    };
  },
  methods: {
    getMovies() {
      api.get("/popular").then((response) => (this.api = response.data));
    },
  },
  created() {
    this.getMovies();
  },
};
</script>
<style></style>
