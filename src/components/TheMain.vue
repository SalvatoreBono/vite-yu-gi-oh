<script>
import { store } from "../store";
export default {
  components: {},
  data() {
    return {
      store,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <div class="bg-main">
    <div class="container">
      <div class="dropdown pt-3 pb-3">
        <button
          class="btn btn-secondary rounded-0 dropdown-toggle bg-white text-dark"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Alien
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <div class="bg-white p-5">
        <div class="bg-dark text-white fw-bold p-2">Found 39 cards</div>
        <div class="d-flex flex-wrap gap-3 justify-content-center">
          <div v-for="singleCard in store.card" class="structure">
            <div class="card">
              <img
                :src="singleCard.card_images[0].image_url"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body text-center bg-main pt-4 pb-4">
                <h5 class="card-title text-uppercase text-white">
                  {{ singleCard.name }}
                </h5>
                <div class="card-text">{{ singleCard.archetype }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-main {
  background-color: rgb(212, 143, 56);
}
.structure {
  flex-basis: calc(100% / 5 - 1rem);
}
img {
  width: 100%;
}
</style>
