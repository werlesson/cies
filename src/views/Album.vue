<template>
  <div class="about contact-page text-black">
    <div class="container">
      <h2 class="text-white">Fotos CIES 2019</h2>
      <div class="py-5 bg-light contact-page">
        <div class="container">
          <div class="row">
            <div class="col-md-4" v-for="(item, index) in fotos_csgo_2019" :key="index">
              <div class="card mb-4 box-shadow">
                <img
                  class="card-img-top"
                  :src="'https://docs.google.com/uc?id='+item.id"
                  :alt="item.photo"
                />
                <div class="card-body">
                  <!-- <p class="card-text">CIES CSGO:2019</p> -->
                  <div class="d-flex justify-content-between align-items-center">
                    <!-- <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Baixar</button>
                    </div>-->
                    <div>
                      <!-- <a :href="'https://drive.google.com/uc?export=download&id='+item.id">
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                          Baixar
                          <i class="fa fa-download"></i>
                        </button>
                      </a>-->
                    </div>
                    <small class="text-muted">26/10/2019</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="https://drive.google.com/drive/u/2/folders/1utNIdFlW7OXKyoAxIlBD7YTFRQcNrnUb">
            <button class="float-right btn btn-outline-light">
              Ver Todas
              <img src="@/assets/img/icons/double-arrow.png" alt="#" />
            </button>
          </a>

          <!-- <a href="https://forms.gle/J7mPvQHRHRgNKte89" class="site-btn float-right">
            Ver Todas
            <img src="@/assets/img/icons/double-arrow.png" alt="#" />
          </a>-->
          <!-- <nav aria-label="...">
            <ul class="pagination">
              <li :class="'page-item' + (page == 0 ? ' disabled' : '')">
                <a class="page-link" href="#" @click="previous_page()">Anterior</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">
                  {{page+1}}
                  <span class="sr-only">(atual)</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" @click="next_page()">Próxima</a>
              </li>
            </ul>
          </nav>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { _fotos_cies_2019 } from "@/modules/cies-2019.js";
export default {
  data() {
    return {
      page: 0,
      size: 9,
      fotos_csgo_2019: []
    };
  },

  created() {
    // this.fotos_csgo_2019 = _fotos_cies_2019();
    this.fotos_csgo_2019 = _fotos_cies_2019().slice(
      this.page * this.size,
      (this.page + 1) * this.size
    );
  },

  mounted() {},

  methods: {
    paginate(array = [], page_size = 9, page_number = 1) {
      --page_number; // indice começa do 0
      return array.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.about {
  padding-top: 100px;
}

.btn-outline-light {
  border-color: #b71dae;
  color: #ac15a2;
  background-color: #fff;
  &:hover {
    color: #fff;
    background-color: #b71dae;
  }
}

.album-bg {
  background: linear-gradient(to right, #330d38 0%, #190d36 100%);
}
</style>
