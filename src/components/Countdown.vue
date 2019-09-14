<template>
  <div class="countdown">
    <div class="block">
      <p class="digit">{{ days | two_digits }}</p>
      <p class="text">Dias</p>
    </div>
    <div class="block">
      <p class="digit">{{ hours | two_digits }}</p>
      <p class="text">Horas</p>
    </div>
    <div class="block">
      <p class="digit">{{ minutes | two_digits }}</p>
      <p class="text">Minutos</p>
    </div>
    <div class="block">
      <p class="digit">{{ seconds | two_digits }}</p>
      <p class="text">Segundos</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    date: {
      type: String,
      default: "Sep 20, 2019"
    }
  },

  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000)
    };
  },

  mounted() {
    setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
      this.limit - this.now < 0 &&
        this.updateAvailability(this.limit - this.now > 0);
    }, 1000);
  },

  computed: {
    limit() {
      return Math.trunc(Date.parse(this.date) / 1000);
    },

    seconds() {
      return (this.limit - this.now) % 60;
    },

    minutes() {
      return Math.trunc((this.limit - this.now) / 60) % 60;
    },

    hours() {
      return Math.trunc((this.limit - this.now) / 60 / 60) % 24;
    },

    days() {
      return Math.trunc((this.limit - this.now) / 60 / 60 / 24);
    }
  },
  methods: {
    ...mapActions(["updateAvailability"])
  },

  filters: {
    two_digits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    }
  }
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);

.countdown {
  display: flex;
  transform: scale(0.75);

  .block {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .text {
    color: #b01ba5;
    font-size: 25px;
    font-family: "Roboto Condensed", serif;
    font-weight: 40;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
  }

  .digit {
    color: #ecf0f1;
    font-size: 130px;
    font-weight: 100;
    font-family: "Roboto", serif;
    margin: 10px;
    text-align: center;
  }
}

@media screen and (max-width: 992px) {
  .countdown {
    flex-wrap: wrap;
    justify-content: space-around;

    & .text {
      margin: 0px;
    }
    & .digit {
      font-size: 100px;
      margin: 0px;
    }
  }
}

@media screen and (max-width: 650px) {
  .countdown {
    & .text {
      font-size: 17px;
    }
    & .digit {
      font-size: 70px;
      line-height: 1;
    }
  }
}
</style>
