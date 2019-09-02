<template>
  <div class="home">
    <main-page />
    <schedule />
    <video-trailer />
    <support />
  </div>
</template>

<script>
import MainPage from "./Home/Main";
import Schedule from "./Home/Schedule";
import Support from "./Home/Support";
import VideoTrailer from "./Home/Video";
export default {
  name: "home",
  components: {
    MainPage,
    Schedule,
    Support,
    VideoTrailer
  }
};
</script>
