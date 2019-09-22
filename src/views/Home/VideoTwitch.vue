<template>
  <section class="twitch-live-video pt-5">
    <div class="container text-white pt-5 pb-5">
      <h2>Live do sorteio dos grupos ocorreu em 22/09/2019 as 15h. Veja a transmissão abaixo</h2>
      <div id="twitch-embed"></div>
    </div>
  </section>
</template>
<script>
import "./v1";

export default {
  mounted() {
    var embed = new Twitch.Embed("twitch-embed", {
      channel: "matheustf7",
      width: "100%",
      height: "100%",
      theme: "dark",
      layout: "video", //-with-chat
      allowfullscreen: true,
      autoplay: true
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
