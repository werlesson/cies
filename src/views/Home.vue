<template>
  <div class="home">
    <main-page />
    <schedule />
    <video-trailer />
    <feedback />
    <support />
  </div>
</template>

<script>
import MainPage from "./Home/Main";
import Schedule from "./Home/Schedule";
import Support from "./Home/Support";
import VideoTrailer from "./Home/Video";
import Feedback from "./Home/Feedback";
export default {
  name: "home",
  components: {
    MainPage,
    Schedule,
    Support,
    VideoTrailer,
    Feedback
  }
};
</script>
