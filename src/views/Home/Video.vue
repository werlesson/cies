<template>
  <section class="video-trailer">
    <div class="effect-filter">
      <a @click="toggleVideo()">
        <img src="@/assets/img/icons/solid-right-arrow.png" alt />
      </a>
    </div>
    <div v-if="showVideo" @click="toggleVideo()" class="video-frame">
      <iframe
        src="https://www.youtube.com/embed/1do3Q90r5lQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
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
  methods: {
    toggleVideo() {
      this.showVideo = !this.showVideo;
    }
  }
};
</script>

<style>
</style>