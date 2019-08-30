<template>
  <!-- Header section -->
  <header class="header-section">
    <div class="header-warp">
      <div class="header-social d-flex justify-content-end">
        <p>Follow us:</p>
        <a href="#">
          <i class="fa fa-pinterest"></i>
        </a>
        <a href="#">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="#">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fa fa-dribbble"></i>
        </a>
        <a href="#">
          <i class="fa fa-behance"></i>
        </a>
      </div>
      <div class="header-bar-warp d-flex">
        <!-- site logo -->
        <router-link to="/" class="site-logo">
          <img src="../assets/img/logo.png" alt />
        </router-link>
        <nav class="top-nav-area w-100">
          <div class="user-panel">
            <a href>Login</a> /
            <a href>Register</a>
          </div>
          <!-- Menu -->
          <ul class="main-menu primary-menu">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
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
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
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
