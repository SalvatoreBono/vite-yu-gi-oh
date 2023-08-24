<script>
import TheInfoCard from "../components/TheInfoCard.vue";
import { store } from "../store";
export default {
  components: {
    TheInfoCard,
  },
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
  <div class="bg-main pb-5">
    <div class="container">
      <div class="dropdown pt-3 pb-3">
        <button
          class="btn btn-secondary rounded-0 dropdown-toggle bg-white text-dark"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="pe-3">Archetype</span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#"> Alien </a>
          </li>
          <li>
            <a class="dropdown-item" href="#"> Noble Knight </a>
          </li>
          <li>
            <a class="dropdown-item" href="#"> Melodious </a>
          </li>
        </ul>
      </div>
      <div class="bg-white p-5">
        <div class="bg-dark text-white fw-bold p-2">Found 39 cards</div>
        <div class="d-flex flex-wrap gap-3 justify-content-center">
          <!-- Fare un ciclo for della singola carta -->
          <div v-for="singleCard in store.card" class="structure">
            <div class="card">
              <!-- Fare un componente per le singole informazioni della carta utilizzando i props -->
              <TheInfoCard :singleInfo="singleCard"></TheInfoCard>
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
.card {
  height: 100%;
}
.structure {
  flex-basis: calc(100% / 5 - 1rem);
}
</style>
