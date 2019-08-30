<template>
  <div id="app">
    <!-- Page Preloder -->
    <div id="preloder">
      <div class="loader"></div>
    </div>
    <header-layout />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
    <footer-layout />
  </div>
</template>

<script>
import HeaderLayout from "./layout/Header";
import FooterLayout from "./layout/FooterLayout";

export default {
  components: {
    HeaderLayout,
    FooterLayout
  }
};
</script>