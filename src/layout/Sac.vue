<template>
  <section class="sac" :class="{none: lastScrollPosition < OFFSET}">
    <div class="closed">
      <img src="@/assets/img/info.svg" width="10" alt />
    </div>
    <div class="open">
      <p class="text-center">{{title}}</p>
      <a class="btn-register text-center" :href="linkForm">Clique aqui</a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title:
        "Descreva o problema que encontrou ou compartilhe suas ideias conosco!",
      linkForm: "https://forms.gle/kjnH3ffGUcMf7qeX6",
      lastScrollPosition: 0,
      OFFSET: 30
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (
        Math.abs(window.pageYOffset - this.lastScrollPosition) < this.OFFSET
      ) {
        return;
      }
      this.lastScrollPosition = window.pageYOffset;
    }
  }
};
</script>

<style lang="scss" scoped>
.none {
  transform: scale(0);
}
.sac {
  position: fixed;
  right: 30px;
  bottom: 30px;
  height: 50px;
  width: 50px;
  border-radius: 25% 25% 0 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  transition: all 0.2s ease;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    height: 0;
    width: 0;
    border: 15px solid transparent;
    border-left-color: white;
    right: -12px;
    bottom: 0px;
    transform: rotate(-70deg);
  }
  .open {
    padding: 25px;
    color: white;
    opacity: 0;
    transform: scale(0);
    position: absolute;
  }
  .closed {
    transform: scale(1);
    position: absolute;
  }
  &:hover {
    height: 200px;
    width: 280px;
    border-radius: 7% 7% 0 7%;
    justify-content: space-between;
    .open {
      opacity: 1;
      transition: opacity 0.2s ease 0.1s;
      display: flex;
      flex-direction: column;
      transform: scale(1);
    }
    .closed {
      transform: scale(0);
    }
  }
}
.btn-register {
  background-color: #451855;
  padding: 10px 20px;
  border-radius: 7px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  color: white;
  transition: all 0.1s linear;
  &:hover {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0);
    transform: scale(0.95);
  }
}
</style>