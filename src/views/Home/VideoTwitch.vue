<template>
  <section class="twitch-live-video pt-5">
    <div class="container text-white pt-5 pb-5">
      <h2>Live do sorteio dos grupos as 15h</h2>
      <div id="twitch-embed"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showVideo: false
    };
  },
  created() {
    let twitchScript = document.createElement("script");
    twitchScript.setAttribute("src", "https://embed.twitch.tv/embed/v1.js");
    document.head.appendChild(twitchScript);
  },
  mounted() {
    var embed = new Twitch.Embed("twitch-embed", {
      channel: "ciesoficial",
      width: "100%",
      height: "100%",
      theme: "dark",
      layout: "video-with-chat",
      allowfullscreen: true,
      autoplay: false
    });

    embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
      var player = embed.getPlayer();
      player.play();
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.twitch-live-video {
  width: 100%;
  height: 750px;
  background-image: url("~@/assets/img/twitch-video-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#twitch-embed {
  height: 600px;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>