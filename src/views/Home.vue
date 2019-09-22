<template>
  <div class="home">
    <!-- <main-page /> -->
    <video-twitch />
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
import VideoTwitch from "./Home/VideoTwitch";
export default {
  name: "home",
  components: {
    MainPage,
    VideoTwitch,
    Schedule,
    Support,
    VideoTrailer
    // Feedback,
    // Informs,
    // ConfirmedTeams
  }
};
</script>
