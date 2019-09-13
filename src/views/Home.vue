<template>
  <div class="home">
    <main-page />
    <schedule />
    <!-- <informs /> -->
    <video-trailer />
    <!-- <ConfirmedTeams /> -->
    <!-- <feedback /> -->
    <support />
  </div>
</template>

<script>
import MainPage from "./Home/Main";
import Schedule from "./Home/Schedule";
import Support from "./Home/Support";
import VideoTrailer from "./Home/Video";
// import Feedback from "./Home/Feedback";
// import Informs from "./Home/Informs";
// import ConfirmedTeams from "./Home/ConfirmedTeams";
export default {
  name: "home",
  components: {
    MainPage,
    Schedule,
    Support,
    VideoTrailer
    // Feedback,
    // Informs,
    // ConfirmedTeams
  }
};
</script>
