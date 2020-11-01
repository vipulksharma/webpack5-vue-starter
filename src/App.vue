<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/contact">Contact</router-link>
      |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
// { pathOr } from ramda is same as * as R
import * as R from 'ramda';

export default {
  name: 'App',
  beforeCreate() {
    let obj = {a: {b: {c: {d: [1, 2, 3]}}}};
    console.log(R.pathOr([], ['a', 'b', 'c', 'd'], obj));
  }
};
</script>
<style lang="scss">
@import "./styles/main.scss";
</style>