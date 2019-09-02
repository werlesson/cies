<template>
  <section class="main-section">
    <h2>{{title}}</h2>
    <div class="description">
      <p v-for="(text, index) in description" :key="index">{{text}}</p>
    </div>
    <a :href="subscription.link" class="site-btn">
      {{subscription.value}}
      <img src="@/assets/img/icons/double-arrow.png" alt="#" />
    </a>
  </section>
</template>
    
<script>
export default {
  data() {
    return {
      title: "Inscrições Abertas!",
      description: [
        "As inscrições para a 3ª edição do campeonato de CS:GO do CIES",
        "já estão abertas de 01/09/2019 até 13/09/2019.",
        "Clique no botão abaixo para se inscrever!"
      ],
      subscription: {
        value: " Inscreva-se agora!",
        link: "https://forms.gle/J7mPvQHRHRgNKte89"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.main-section {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  background-color: #cccccc;
  background-image: url("~@/assets/img/background-cs.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 200px;
  text-align: center;
  transition: all 0.3s linear;

  h2 {
    font-size: 3.5rem;
    color: white;
    text-align: center;
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
    margin-bottom: 40px;
  }
}

@media only screen and (max-width: 800px) {
  .main-section {
    padding-top: 0px;
    height: 500px;
    h2 {
      font-size: 2.5rem;
      color: white;
      text-align: center;
    }

    a {
      margin-bottom: 10px;
    }
  }
}
</style>