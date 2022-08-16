<template>
  <section>
    <div class="popular">
      <h3 class="title">{{ title }}</h3>
      <div class="slide">
        <ul v-for="(results, index) in api.results" :key="index">
          <li>
            <!-- <p>{{ results.overview }}</p> -->
            <img
              :src="`${this.baseurl}${results.poster_path}`"
              class="posters"
            />
            <div class="info">
              <p>{{ results.title }}</p>
              <span>{{ results.vote_average }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/TheServices.js";
export default {
  name: "TheMovies",
  props: ["types", "title"],
  data() {
    return {
      api: [],
      // types: "popular",
      baseurl: "https://image.tmdb.org/t/p/w500",
    };
  },
  methods: {
    getMovies() {
      api.get(this.types).then((response) => {
        (this.api = response.data), console.log(response.data);
      });
    },
  },
  created() {
    this.getMovies();
    console.log(this.title);
  },
};
</script>
<style>
.title {
  color: #fff;
}
.slide {
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  /* overflow: hidden; */
  align-items: flex-start;
  /* overflow-x: auto; */
  transition: height 0.5s linear;
}
.posters {
  width: 150px;
  border-radius: 8px;
  min-width: 150px;
}
.info {
  display: grid;
  grid-template-columns: 1fr 20px;
  justify-content: space-between;
  align-items: center;
  color: #b0b2b3;
}
.info span {
  background: #aa88ff;
  color: #fff;
  padding: 2px;
  border-radius: 50%;
  font-size: 0.8rem;
}
</style>
