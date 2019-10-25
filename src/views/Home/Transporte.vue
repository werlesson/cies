<template>
  <section class="transporte" id="transporte">
    <div class="row pt-2 pb-2 pr-4 pl-4">
      <div class="col-md-4 col-sm-12 pt-5 text-justify">
        <h2
          class="text-left"
        >Vai ter transporte para o evento? É claro! E ainda é grátis ( ͡° ͜ʖ ͡°)</h2>
        <p class="pt-5">
          A rota de ida irá começar as 7h15 do dia 26/10 saindo da matriz em direção ao
          <router-link to="/local">IFCE Aracati</router-link>onde a fase presencial do evento irá ocorrer. Chegando lá, desloque-se até o auditório que é o local onde a baguncinha acontecerá.
        </p>
        <p>
          Não quer ir no ônibus e prefere ir em transporte próprio ou alternativo?
          <router-link to="/local">clique aqui</router-link>e veja como chegar
        </p>
      </div>
      <div class="col-md-4 col-sm-12 pt-5 pb-5">
        <img src="~@/assets/img/rota-ida.png" alt />
      </div>
      <div class="col-md-4 col-sm-12 pt-5 pb-5">
        <img src="~@/assets/img/rota-volta.jpg" alt />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.transporte {
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
