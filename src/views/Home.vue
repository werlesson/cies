<template>
  <div class="home">
    <main-page />
    <schedule />
    <support />
  </div>
</template>

<script>
import MainPage from "./Home/Main";
import Schedule from "./Home/Schedule";
import Support from "./Home/Support";
export default {
  name: "home",
  components: {
    MainPage,
    Schedule,
    Support
  }
};
</script>
