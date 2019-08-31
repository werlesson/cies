<template>
  <header class="header-section">
    <!-- <div style="margin-bottom: 10px;" class="header-social d-flex justify-content-end">
      <p>Siga-nos em nossas redes sociais:</p>
      <a href="https://www.facebook.com/ciesoficial/">
        <i class="fa fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/ciesoficial">
        <i class="fa fa-instagram"></i>
      </a>
      <a href="https://twitch.tv/MatheusTF7">
        <i class="fa fa-twitch"></i>
      </a>
    </div>-->
    <div class="header-bar-warp d-flex">
      <router-link to="/" class="site-logo">
        <img src="../assets/img/cies-logo-white.svg" alt />
      </router-link>
      <nav class="top-nav-area w-100">
        <a class="btn-register" href="https://forms.gle/Qco39doRwpdHSNmg7">Registre-se Aqui!</a>
        <!-- Menu -->
        <ul class="main-menu primary-menu">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <!-- <li>
              <router-link to="/games">Games</router-link>
              <ul class="sub-menu">
                <li>
                  <router-link to="/game-single">Game Singel</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/review">Reviews</router-link>
            </li>
            <li>
              <router-link to="/blog">Blog</router-link>
          </li>-->
          <li>
            <router-link to="/contact">Local do Evento</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  height: 100px;
  padding: 0;
}
.header-bar-warp {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 40px;
  nav {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    .main-menu li a {
      padding-bottom: 0;
    }
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
  width: 75px;
}
</style>