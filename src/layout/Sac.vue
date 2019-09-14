<template>
  <section class="sac" :class="{none: lastScrollPosition < OFFSET}">
    <div class="sac-closed" :class="{none: sac_open}" @click="sac_open = true">
      <!-- <img src="@/assets/img/info.svg" width="10" alt /> -->
      <p>Comentários</p>
      <!-- <i class="far fa-comment-dots"></i> -->
      <!-- <i class="fa fa-facebook"></i> -->
      <i class="fa fa-commenting-o"></i>
    </div>
    <div class="sac-open" :class="{none: !sac_open}">
      <div class="circle-close" @click="sac_open = false">
        <i class="fa fa-close"></i>
      </div>
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
.none {
  transform: scale(0) !important;
}

.circle-close {
  width: 30px;
  height: 30px;
  right: 15px;
  top: -15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b71dae;
  color: white;
  position: absolute;
}

.sac {
  z-index: 10;
  .sac-closed {
    transition: all 0.3s ease;
    cursor: pointer;
    position: fixed;
    right: -50px;
    bottom: calc(50% - 24px);
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    background-color: #b71dae;
    color: white;
    transform: rotate(-90deg);
    padding: 15px;
    width: 150px;
    p {
      margin: 0;
      color: white;
    }
    i {
      margin-right: 10px;
      transform: rotate(90deg);
    }
  }

  .sac-open {
    transition: all 0.3s ease;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 250px;
    right: 60px;
    bottom: calc(50% - 90px);
    height: 180px;
    padding: 20px;
    border-radius: 10px;
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

@media (max-width: 992px) {
  .sac {
    .sac-closed {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      bottom: 20px;
      padding: 5px;
      right: 20px;
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
      right: 20px;
      bottom: 80px;
    }
  }
}
</style>