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
        <i class="fa fa-trophy" style="color: yellow;"></i> CIES 2019
        <i class="fa fa-trophy" style="color: yellow;"></i>
      </h2>
      <h3>
        aqui tem
        <a href="#sorteio">!sorteio</a>,
        clica
      </h3>
      <h3>Playoffs presenciais dia 26/10 no IFCE</h3>

      <div class="playoffs">
        <ul class="left">
          <li class="logo" :class="txg.id">
            <a :href="txg.gc">
              <img
                :src="txg.logo"
                :alt="`${txg.name} Logo`"
                :title="txg.name"
                :class="!txg.live ? 'eliminated' : ''"
              />
            </a>
          </li>
          <li class="logo" :class="kmc.id">
            <a :href="kmc.gc">
              <img
                :src="kmc.logo"
                :alt="`${kmc.name} Logo`"
                :title="kmc.name"
                :class="!kmc.live ? 'eliminated' : ''"
              />
            </a>
          </li>
        </ul>

        <div class="middle cies-playoffs"></div>

        <ul class="right">
          <li class="logo" :class="avt.id">
            <a :href="avt.gc">
              <img
                :src="avt.logo"
                :alt="`${avt.name} Logo`"
                :title="avt.name"
                :class="!avt.live ? 'eliminated' : ''"
              />
            </a>
          </li>
          <li class="logo" :class="n7g.id">
            <a :href="n7g.gc">
              <img
                :src="n7g.logo"
                :alt="`${n7g.name} Logo`"
                :title="n7g.name"
                :class="!n7g.live ? 'eliminated' : ''"
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="background finals"></div>
    </section>

    <!-- <section class="unavailable" v-else>
      <h2>
        <i class="fa fa-trophy" style="color: yellow;"></i> CIES 2019
        <i class="fa fa-trophy" style="color: yellow;"></i>
      </h2>
      <h2>
        Lives na Twitch
        <i class="fa fa-twitch"></i>
      </h2>

      <div class>
        <p class="text-white">Siga nossos canais</p>
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
    </section>-->
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
      ],
      txg: {
        name: "TOXIC Gaming",
        id: "txg",
        logo: require("@/assets/img/teams/toxic.svg"),
        gc: "https://gamersclub.com.br/time/126573",
        live: true
      },
      kmc: {
        name: "Kommando CHOSK",
        id: "kmc",
        logo: require("@/assets/img/teams/kommando.png"),
        gc: "https://gamersclub.com.br/time/137193",
        live: true
      },
      avt: {
        name: "a7-Ventu's Team",
        id: "avt",
        logo: require("@/assets/img/teams/ventus.png"),
        gc: "https://gamersclub.com.br/time/122255",
        live: true
      },
      n7g: {
        name: "NATUS7 GAMING",
        id: "n7g",
        logo: require("@/assets/img/teams/natus.png"),
        gc: "https://gamersclub.com.br/time/101392",
        live: true
      }
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

      &.finals {
        background: #190c44;
      }
    }
  }

  .unavailable {
    div.background {
      background-image: url("~@/assets/img/stadium-bg.jpg");
      filter: brightness(50%);
    }
  }
}

.playoffs {
  display: flex;
  width: 50%;
  justify-content: space-between;

  .cies-playoffs {
    width: 200px;
    height: 500px;
    background-image: url("~@/assets/img/CIES_Playoffs.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
  }

  ul {
    list-style: none;
    color: white;
  }

  ul.left::before,
  ul.right::before {
    content: "";
    background-color: white;
    display: block;
    height: 2px;
    width: 50px;
    position: relative;
    top: 50%;
    transform: translate(50px, -48px);
  }

  ul.left::before {
    left: 100%;
  }

  ul.right::before {
    right: 100%;
    transform: translate(100px, -48px);
  }

  .logo {
    display: block;
    padding: 0 !important;
    margin: 0 !important;
    height: 300px;

    img {
      height: 200px;
      padding: 10px;
      transition: padding 300ms ease-in-out;

      &:hover {
        padding: 2px;
      }

      &.eliminated {
        filter: grayscale(1);
      }
    }

    &.txg::before,
    &.kmc::before,
    &.avt::before,
    &.n7g::before {
      content: "";
      width: 50px;
      height: 2px;
      display: block;
      background-color: white;
      position: relative;
      top: 100px;
      left: 50%;
      transform: translate(100px, 0);
    }

    &.avt::before,
    &.n7g::before {
      left: -50px;
      transform: translate(0, 0);
    }

    &.txg::after,
    &.kmc::after,
    &.avt::after,
    &.n7g::after {
      content: "";
      width: 2px;
      height: 150px;
      display: block;
      background-color: white;
      position: relative;
      left: 50%;
      top: -100px;
      transform: translate(148px, 0);
    }

    &.txg::after,
    &.avt::after {
      height: 150px;
    }

    &.kmc::after,
    &.n7g::after {
      top: -250px;
    }

    &.avt::after,
    &.n7g::after {
      left: -50px;
      transform: translate(0, 0);
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

@media screen and (max-width: 1600px) {
  .playoffs {
    width: 60%;
  }
}

@media screen and (max-width: 1400px) {
  .playoffs {
    width: 70%;
  }
}

@media screen and (max-width: 1200px) {
  .playoffs {
    width: 80%;
  }
}

@media screen and (max-width: 1000px) {
  .playoffs {
    width: 100%;
  }
}

@media screen and (max-width: 800px) {
  .playoffs {
    ul.left::before {
      transform: translate(30px, -48px);
    }

    .cies-playoffs {
      height: 300px;
    }

    ul.right::before {
      transform: translate(40px, -48px);
    }

    ul.left::before,
    ul.right::before {
      width: 30px;
    }

    .logo {
      height: 200px;

      img {
        height: 100px;
      }

      &.txg::before,
      &.kmc::before {
        top: 50px;
        width: 30px;
        transform: translate(50px, 0);
      }

      &.txg::after,
      &.kmc::after {
        transform: translate(78px, 48px);
      }

      &.avt::before,
      &.n7g::before {
        transform: translate(20px, -50px);
        width: 30px;
      }

      &.avt::after,
      &.n7g::after {
        transform: translate(20px, 48px);
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .playoffs {
    .cies-playoffs {
      width: 120px;
    }
  }
}
</style>
