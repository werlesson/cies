<template>
  <section class="sorteio" id="sorteio">
    <div class="row pt-2 pb-2 pr-4 pl-4">
      <div class="col-md-1"></div>
      <div class="col-md-6 col-sm-12 pt-5 text-justify">
        <h2 class="text-left">
          O bot viu você digitanto
          <b>!sorteio</b> nas lives
        </h2>
        <p class="pt-3">
          Durante a fase presencial no dia 26/10 no
          <router-link to="/local">IFCE Aracati</router-link>haverá sorteio de um
          <b>Headset dazz Balistic Core 7.1</b> oferecido pela
          <a href="https://www.facebook.com/lojainfoplay/">infoplay</a>.
        </p>
        <p>
          O sorteio irá acontecer no decorrer do evento e para participar basta estar presente no local. É mais fácil que digitar
          <b>!sorteio</b> no chat. Venha prestigiar o fino do fino do fino do bino na fase presencial da CIES CS:GO 2019 e ainda concorra a um prêmio.
          Quer mais? Boatos apontam que terão as dançarinas do Faustão no palco, dragões cospindo fogo, duendes de patinete e ainda a presença do ilustre
          <b>LindZika</b> que
          dará autógragos durante a competição caso este CSGO Player God esteja a fim.
        </p>
        <p>Compareça e PARTICIPE!</p>
      </div>
      <div class="col-md-4 col sm-12 pt-5 pb-5">
        <img src="~@/assets/img/headset.png" alt />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sorteio {
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: rgb(51, 13, 56);
  /* Old browsers */
  /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(51, 13, 56, 1) 0%,
    rgba(25, 13, 54, 1) 100%
  );
  /* Chrome10-25,Safari5.1-6 */
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(51, 13, 56, 1)),
    to(rgba(25, 13, 54, 1))
  );
  background: -o-linear-gradient(
    left,
    rgba(51, 13, 56, 1) 0%,
    rgba(25, 13, 54, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(51, 13, 56, 1) 0%,
    rgba(25, 13, 54, 1) 100%
  );

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
  }

  p {
    color: #9591a8;
  }

  .row {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
}

a {
  color: #b01ba5 !important;
}
</style>
