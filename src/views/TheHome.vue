<template>
  <div class="home">
    <!-- <TheHeader /> -->
    <section class="Containerhome">
      <div class="figure"></div>
      <form action="" class="formLogin">
        <div class="information">
          <h1>Movies and Series</h1>
          <h3>Easy Access on Movies and Series</h3>
        </div>
        <div>
          <h3 class="titlelogin">Make Login</h3>
          <input type="email" placeholder="Login" />
          <input type="password" placeholder="Password" />
          <input type="button" value="submit" />
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
export default {
  name: "TheHome",
  components: {
    TheHeader,
  },
};
</script>
<style scoped>
.Containerhome {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  grid-gap: 2rem;
  gap: 2rem;
}
h1,
h3 {
  color: aliceblue;
  display: flex;
  margin: 20px 20px;
  font-style: italic;
}
.figure {
  max-width: 600px;
  max-height: 800px;
  display: block;
  content: "";
  background: url(https://images.adsttc.com/media/images/5f7d/fef2/63c0/170a/9100/0273/large_jpg/Jiangnan_Photography.jpg?1602092773)
    no-repeat 50%;
  background-size: cover;
}
.information {
  margin-bottom: 100px;
}
.formLogin {
  max-width: 30rem;
  padding: 1rem;
  margin-top: 20vh;
}
.titlelogin {
  font-family: '"Spectral",Georgia';
  line-height: 1;
  font-size: 2.3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;
}
.titlelogin::after {
  content: "";
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  background-image: linear-gradient(#c1f, #70e);
  position: absolute;
  bottom: 5px;
  left: -5px;
  border-radius: 0.2rem;
  z-index: -1;
}
input {
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #eee;
  margin: 10px;
}
input[type="button"] {
  background: #87f;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background-image: linear-gradient(#c1f, #70e);
  color: #fff;
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100px;
}
input[type="button"]:hover {
  background: #82f;
}
</style>
