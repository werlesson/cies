<template>
  <div id="app">
    <div id="preloder">
      <div class="loader"></div>
    </div>
    <header-layout />
    <router-view />
    <footer-layout />
    <sac />
  </div>
</template>

<script>
import HeaderLayout from "./layout/Header";
import FooterLayout from "./layout/FooterLayout";
import Sac from "./layout/Sac";

export default {
  components: {
    HeaderLayout,
    FooterLayout,
    Sac
  }
};
</script>