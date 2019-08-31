<template>
  <!-- Header section -->
  <header class="header-section">
    <div class="header-warp">
      <div class="header-social d-flex justify-content-end">
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
      </div>
      <div class="header-bar-warp d-flex">
        <!-- site logo -->
        <router-link to="/" class="site-logo">
          <img src="../assets/img/logo1.png" alt />
        </router-link>
        <nav class="top-nav-area w-100">
          <div class="user-panel pb-5">
            <!-- <a href>Login</a> / -->
            <a href="https://forms.gle/Qco39doRwpdHSNmg7">Registre-se Aqui!</a>
          </div>
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
            </li> -->
            <li>
              <router-link to="/contact">Local do Evento</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <!-- Header section end -->
</template>

<script>
export default {};
</script>
