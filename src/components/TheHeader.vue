<template>
  <div class="header">
    <form action="">
      <label for="">
        <input
          :value="something"
          v-on:input="something = $event.target.value"
          type="text"
          placeholder="Search"
        />
      </label>
      <h2 style="color: #fff">{{ something }}</h2>
      <input type="submit" value="Search" />
    </form>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      something: "",
    };
  },
  methods: {},
};
</script>
<style scoped>
.header {
  max-width: 1200px;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
  margin-left: auto;
  margin-right: auto;
}
form {
  margin-top: 30px;
  position: relative;
  top: 0;
  left: 0;
}
input[type="text"] {
  width: 100%;
  height: 37px;
  line-height: 30px;
  font-size: 1.1em;
  color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
}
form input[type="submit"] {
  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 37px;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  position: absolute;
  top: 0;
  background: #aa88ff;
  color: #fff;
  right: -1px;
  cursor: pointer;
}
</style>
