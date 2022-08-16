<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
body * {
  box-sizing: border-box;
}
ul {
  list-style: none;
}
body {
  /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
  background: #000;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
