<template>
  <section class="main-section">
    <section class="available" v-if="isAvailableToSubscribe">
      <h2>{{ title }}</h2>

      <countdown :date="deadline"></countdown>

      <div class="description">
        <p v-for="{ item, index } in description" :key="index">{{ item }}</p>
      </div>

      <a href="https://forms.gle/J7mPvQHRHRgNKte89" class="site-btn">
        Inscreva-se agora!
        <img src="@/assets/img/icons/double-arrow.png" alt="#" />
      </a>

      <div class="background"></div>
    </section>

    <section class="unavailable" v-else>
      <h2>
        <i class="fa fa-trophy"></i> CIES 2019
        <i class="fa fa-trophy"></i>
      </h2>
      <h2>ÚLTIMA SEMANA DE FASE ONLINE</h2>
      <!-- <h2>
        Live na Twitch as 21h
        <i class="fa fa-twitch"></i>
      </h2>-->
      <!-- <h3>A7-VENTU'S TEAM x XABLAU GAMING</h3> -->

      <div class>
        <!-- <p class="text-white">Assista em um dos canais:</p> -->
        <p class="text-white">Acompanhe as transmissões</p>
        <p>
          <a class="live" href="https://www.twitch.tv/ivomarsan">Twitch ch 1</a>
        </p>
        <p>
          <a class="live" href="https://www.twitch.tv/matheustf7">Twitch ch 2</a>
        </p>
      </div>

      <router-link to="/matches" class="site-btn">
        Ver Confrontos e Datas
        <img src="@/assets/img/icons/double-arrow.png" alt="#" />
      </router-link>

      <div class="background"></div>
    </section>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Countdown from "@/components/Countdown";

export default {
  data() {
    return {
      title: "Inscrições Prorrogadas!",
      description: [
        "Terceira edição da copa CS:GO",
        "Disponível até 13/09/2019",
        "Copa IFCE de eSports"
      ]
    };
  },
  components: {
    Countdown
  },

  computed: {
    ...mapGetters(["deadline", "isAvailableToSubscribe"])
  }
};
</script>

<style lang="scss" scoped>
.main-section {
  .available,
  .unavailable {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding-top: 120px;
    background-color: transparent;
    text-align: center;
    transition: all 0.3s linear;

    h2 {
      font-size: 3.5rem;
      color: white;
      text-align: center;
    }

    h3 {
      color: white;
    }

    .description {
      margin: 10px 0 50px 0;
      p {
        text-align: center;
        margin: 0;
        color: white;
      }
    }

    a {
      color: #b01ba5;
      margin-bottom: 40px;

      &:hover ~ div.background {
        color: white;
        filter: brightness(70%);
      }
    }

    .live {
      &:hover {
        color: white;
      }
    }

    div.background {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      background-image: url("~@/assets/img/background-cs.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: saturate(30%);
      transition: all 0.3s linear;
    }
  }

  .unavailable {
    div.background {
      background-image: url("~@/assets/img/stadium-bg.jpg");
      filter: brightness(50%);
    }
  }
}

@media screen and (max-width: 992px) {
  .main-section {
    .available,
    .unavailable {
      h2 {
        font-size: 2.5rem;
      }

      .description {
        display: none;
      }

      a {
        margin-bottom: 50px;
      }
    }
  }
  // .main-section {
  //   padding-top: 0px;
  //   height: 500px;
  //   h2 {
  //     font-size: 2.5rem;
  //     color: white;
  //     text-align: center;
  //   }

  //   a {
  //     margin-bottom: 10px;
  //   }
  // }
}
</style>
