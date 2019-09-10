<template>
  <section class="newsletter-section">
    <div class="container">
      <h2>{{title}}</h2>
      <h5>{{subtitle}}</h5>
      <a :href="linkForm" class="site-btn text-black">
        Enviar Feedback
        <img src="@/assets/img/icons/double-arrow.png" alt="#" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title:
        "Encontrou Erros ou Possui Sugestões e quer Reportar para a Equipe de Desenvolvimento?",
      subtitle: "Envie um report para nós agora mesmo clicando no botão abaixo",
      linkForm: "https://forms.gle/kjnH3ffGUcMf7qeX6"
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.newsletter-section {
  h2 {
    font-size: 30px;
    margin-bottom: 2.5rem;
  }
  h5 {
    color: white;
    padding-bottom: 1.2rem;
  }
}
</style>