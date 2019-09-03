<template>
  <section class="support-section">
    <h2 class="text-white">Apoio</h2>
    <div class="content-support">
      <ifce class="logo-support ifce" />
      <lar class="logo-support lar" />
      <infoplay class="logo-support infoplay" />
      <netonda class="logo-support netonda" />
    </div>
  </section>
</template>

<script>
import Infoplay from "@/components/svg/Infoplay";
import Netonda from "@/components/svg/Netonda";
import Ifce from "@/components/svg/Ifce";
import Lar from "@/components/svg/Lar";
export default {
  components: {
    Infoplay,
    Netonda,
    Ifce,
    Lar
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 480px) {
  .support-section {
    .content-support {
      .infoplay {
        width: 100px !important;
      }
      .ifce {
        width: 100px !important;
      }
      .lar {
        width: 100px !important;
      }
      .netonda {
        width: 100px !important;
      }
    }
  }
}

.support-section {
  display: flex;
  flex-direction: column;
  background: #451855;
  background: -webkit-linear-gradient(to right, #451855, #361855);
  background: linear-gradient(to right, #451855, #361855);
  padding: 100px 8%;
  h2 {
    font-size: 30px;
    text-transform: uppercase;
  }
  .content-support {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    .logo-support {
      margin: 30px 10px;
    }
    .infoplay {
      width: 120px;
    }
    .ifce {
      width: 180px;
    }
    .lar {
      width: 140px;
    }
    .netonda {
      width: 180px;
    }
  }
}
</style>