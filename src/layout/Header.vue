<template>
  <header class="header-section">
    <nav class="navbar navbar-expand-lg header-bar-warp d-flex">
      <router-link to="/" class="site-logo navbar-brand">
        <img src="../assets/img/cies-logo-white.svg" alt />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src="@/assets/img/menu-toggle.svg" width="35" alt />
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 main-menu primary-menu">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/contact">Local do Evento</router-link>
          </li>
          <!-- <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>-->
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <a class="btn-register" href="https://forms.gle/Qco39doRwpdHSNmg7">Inscreva-se!</a>
        </form>
      </div>
    </nav>
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
  // justify-content: center;
  padding: 15px 40px;
  height: 100%;
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

.navbar-collapse.show {
  background-color: rgb(8, 22, 36);
  padding: 20px;
  position: absolute;
  top: 100px;
  width: 100%;
  left: 0px;
}
</style>