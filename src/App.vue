<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">SeriesPage</router-link>
    <router-link to="/MoviePage">MoviePage</router-link>
  </nav>
  <router-view />
</template>

<style>
body * {
  box-sizing: border-box;
}
nav {
  display: flex;
  justify-content: flex-end;
}
ul {
  list-style: none;
}
body {
  /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
  background: #000;
}
nav a {
  padding: 10px;
  text-decoration: none;
  color: #fff;
}
nav a.router-link-exact-active {
  color: #aa88ff;
}
</style>
