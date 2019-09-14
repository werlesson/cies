<template>
  <section class="sac" :class="{none: lastScrollPosition < OFFSET}">
    <div class="sac-closed" :class="{none: sac_open}" @click="sac_open = true">
      <p>{{text}}</p>
      <i class="fa fa-commenting-o"></i>
    </div>
    <div class="sac-open" :class="{none: !sac_open}">
      <div class="circle-close" @click="sac_open = false">
        <i class="fa fa-close"></i>
      </div>
      <p class="text-center">{{title}}</p>
      <a class="btn-feedback btn-block text-center" :href="linkForm">Clique aqui</a>
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
      text: "Feedback",
      lastScrollPosition: 0,
      OFFSET: 200,
      sac_open: false
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
$primary-color-sac: #b71dae;
$secondary-color-sac: #fff;
$height-sac-open: 180px;
$circle-close-diametro: 30px;
$diametro-sac-closed: 50px;
$position-mobile: 20px;
$position-bottom-sac-open: calc(#{$height-sac-open} / 2);
$margin-circle-close: calc(calc(#{$circle-close-diametro} * -1) / 2);

.sac {
  z-index: 10;
  .sac-closed {
    position: fixed;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    right: -50px;
    bottom: calc(50% - 24px);
    width: 150px;
    padding: 15px;
    border-radius: 10px 10px 0 0;
    background-color: $primary-color-sac;
    color: $secondary-color-sac;
    transform: rotate(-90deg);
    transition: all 0.3s ease;
    cursor: pointer;
    p {
      margin: 0;
      color: $secondary-color-sac;
    }
    i {
      margin-right: 10px;
      transform: rotate(90deg);
    }
  }

  .sac-open {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 60px;
    bottom: calc(50% - #{$position-bottom-sac-open});
    width: 250px;
    height: $height-sac-open;
    padding: 20px;
    border-radius: 10px;
    background-color: $secondary-color-sac;
    transition: all 0.3s ease;
  }
}

.none {
  transform: scale(0) !important;
}

.circle-close {
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  right: $margin-circle-close;
  top: $margin-circle-close;
  width: $circle-close-diametro;
  height: $circle-close-diametro;
  border-radius: 50%;
  background-color: $primary-color-sac;
  color: white;
  cursor: pointer;
}

.btn-feedback {
  padding: 10px 20px;
  border-radius: 7px;
  background-color: $primary-color-sac;
  color: white;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.1s linear;
  &:hover {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0);
    transform: scale(0.99);
  }
}

@media (max-width: 992px) {
  .sac {
    .sac-closed {
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: $position-mobile;
      right: $position-mobile;
      width: $diametro-sac-closed;
      height: $diametro-sac-closed;
      border-radius: 50%;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
      p {
        display: none;
      }
      i {
        margin: 0;
      }
    }
    .sac-open {
      position: fixed;
      right: $position-mobile;
      bottom: $position-mobile;
    }
  }
}
</style>