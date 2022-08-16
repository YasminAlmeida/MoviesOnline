<template>
  <section>
    <div class="popular">
      <h3 class="title">{{ title }}</h3>
      <vueper-slides
        class="no-shadow"
        :visible-slides="4"
        slide-multiple
        :gap="2"
        :dragging-distance="100"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
      >
        <vueper-slide
          class="slide"
          v-for="(results, index) in api.results"
          :key="index"
        >
          <template #content>
            <div>
              <img
                :src="`${this.baseurl}${results.poster_path}`"
                class="posters"
              />
              <div class="info">
                <p>{{ results.title }}</p>
                <span>{{ results.vote_average }}</span>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </section>
</template>

<script>
import { api } from "@/TheServices.js";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "TheMovies",
  props: ["types", "title"],
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
        {
          content: "",
        },
      ],
      api: [],
      baseurl: "https://image.tmdb.org/t/p/w500",
    };
  },

  methods: {
    getMovies() {
      api.get(this.types).then((response) => {
        this.api = response.data;
      });
    },
  },
  created() {
    this.getMovies();
  },
};
</script>
<style>
.vueperslides__arrows--outside .vueperslides__arrow--next,
.vueperslides--rtl .vueperslides__arrows--outside .vueperslides__arrow--prev {
  left: auto;
  right: 0;
}
.vueperslides__arrow svg {
  color: #9b30f9;
  width: 3em;
}
.vueperslides__arrow {
  opacity: 1;
  background: #fff;
  border-radius: 50%;
}
.vueperslides__arrows--outside .vueperslides__arrow--prev,
.vueperslides--rtl .vueperslides__arrows--outside .vueperslides__arrow--next {
  right: auto;
  left: 0;
}
.vueperslides__bullets,
.vueperslides__bullets--outside {
  color: #aa88ff;
}
.vueperslides__bullets {
  position: relative;
}
.title {
  color: #fff;
}
.slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vueperslides__parallax-wrapper {
  padding-bottom: 50% !important;
}
.posters {
  max-width: 300px;
  border-radius: 8px;
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
@media (max-width: 1200px) {
  .vueperslide,
  .vueperslide--active,
  .vueperslide--visible,
  .slide {
    width: 50% !important;
    margin-right: 5% !important;
  }
}

@media (max-width: 830px) {
  .posters {
    width: 300px;
  }
  .vueperslides__parallax-wrapper {
    padding-bottom: 90% !important;
  }
}
@media (max-width: 760px) {
  /* .vueperslide,
  .vueperslide--active,
  .vueperslide--visible,
  .slide {
    width: 50% !important;
    margin-right: 5% !important;
    margin-left: 0% !important;
  } */
  .posters {
    width: 250px;
    /* margin-left: 50px; */
  }
}
</style>
