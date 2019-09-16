<template>
  <div id="app">
    <div id="preloder">
      <div class="loader"></div>
    </div>

    <header-layout />

    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view />
    </transition>

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
  },

  data() {
    return {
      prevHeight: 0
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 200ms;
  transition-property: height, opacity;
  transition-timing-function: ease-in-out;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
