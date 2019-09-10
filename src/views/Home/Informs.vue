<template>
  <section class="featured-section">
    <div class="featured-bg"></div>
    <div class="featured-box">
      <div class="text-box">
        <div class="top-meta">
          <h3>{{title}}</h3>
        </div>
        <p v-html="content"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Durante a fase online, como se dará a prevenção de hackers?",
      content: `
      O match maker dos jogos na fase online se dará através da
          <a
            href="gamersclub.com.br"
          >Gamers Club</a> (GC). A GC possui uma forte política contra hackers e seu louncher
          contém um anti-cheat integrado que detecta e faz o banimento dos jogadores que estiverem fazendo uso de hacks.
          <br />Ficou com dúvida quanto a performance do outro time? Ao final da partida você pode denunciar e a equipe realizadora do evento irá analisar. Constatada
          a irregularidade a punição é o
          <strong>banimento</strong> da equipe beneficiada da competição e anulação da partida.
          <br />NÃO SERÃO ADMITIDOS AUXÍLIOS EXTERNOS DE NENHUM MODO. A CIES NÃO INCENTIVA A DESPORTIVIDADE. JOGUE LIMPO!
      `
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.featured-box {
  padding: 50px 50px 50px 75px;
}

.text-box {
  margin: 0 !important;
}

.featured-bg {
  background-image: url("~@/assets/img/featured-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

a {
  color: #b01ba5 !important;
}
</style>