<template>
  <section class="support-section">
    <h2 class="text-white">Apoio</h2>
    <div class="row">
      <div class="col-md-4 pt-2">
        <img src="../../assets/img/patrocinio/ifce.png" alt />
      </div>
      <div class="col-md-4 pt-2">
        <!-- <img src="../../assets/img/patrocinio/infoplay.svg" alt /> -->
        <infoplay />
      </div>
      <div class="col-md-4 pt-2">
        <!-- <img src="../../assets/img/patrocinio/netonda.png" alt /> -->
        <netonda />
      </div>
    </div>
  </section>
</template>

<script>
import Infoplay from "@/components/svg/Infoplay";
import Netonda from "@/components/svg/Netonda";
export default {
  components: {
    Infoplay,
    Netonda
  }
};
</script>

<style lang="scss" scoped>
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
}
</style>