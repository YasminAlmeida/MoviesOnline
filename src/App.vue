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
  background: #000;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
