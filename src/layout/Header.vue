<template>
  <header
    class="header-section"
    :class="{
      transparent: $route.path == '/' && lastScrollPosition < OFFSET
    }"
  >
    <nav class="navbar navbar-expand-lg d-flex navbar-light">
      <router-link to="/" class="site-logo navbar-brand">
        <img src="../assets/img/cies-logo-white.svg" alt />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src="@/assets/img/menu-toggle.svg" width="30" alt />
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto mt-lg-0 main-menu primary-menu">
          <li class="active">
            <router-link to="/">Página Inicial</router-link>
          </li>
          <li class>
            <router-link to="/teams">Equipes Confirmadas</router-link>
          </li>
          <li class>
            <router-link to="/matches">Partidas</router-link>
          </li>
          <li>
            <router-link to="/local">Local do Evento</router-link>
          </li>
          <!-- <li>
            <router-link to="/frequent-ask">Perguntas Frequentes</router-link>
          </li>-->
          <li>
            <router-link to="/about">Sobre</router-link>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>-->
        </ul>
        <form class="form-inline my-2 my-lg-0" v-if="isAvailableToSubscribe">
          <a
            class="btn-register ml-auto mr-auto btn-block text-center"
            href="https://forms.gle/Qco39doRwpdHSNmg7"
            >Inscreva-se!</a
          >
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      lastScrollPosition: 0,
      OFFSET: 30
    };
  },

  computed: {
    ...mapGetters(["isAvailableToSubscribe"])
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
header {
  position: fixed;
  padding: 0;
  background-color: rgb(8, 22, 36);
  transition: 0.3s all ease-out;

  &.transparent {
    background-color: transparent;
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

.site-logo {
  width: 60px;
}

.main-menu li a {
  padding-bottom: 0px;
}

@media screen and (max-width: 992px) {
  .site-logo {
    width: 50px;
  }

  .main-menu li a {
    padding-bottom: 28px;
    padding-right: 0 !important;
    margin-right: 0;
  }

  .navbar {
    background-color: rgb(8, 22, 36);
  }
}
</style>
