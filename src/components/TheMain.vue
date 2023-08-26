<script>
import TheInfoCard from "../components/TheInfoCard.vue";
import TheLoader from "../components/TheLoader.vue";
import { ExportApi, ExportApiArchetype, store } from "../store";
export default {
  components: {
    TheInfoCard,
    TheLoader,
  },
  data() {
    return {
      archetype: "",
      store,
    };
  },
  methods: {
    /*devo richiamare la funzione ExportApi perchè sennò non viene calcolata come funzione al click */
    ExportApi,
  },
  mounted() {
    ExportApi();
    ExportApiArchetype();
  },
};
</script>

<template>
  <div class="bg-main pb-5">
    <div class="container">
      <div class="col-2 pt-3 pb-3">
        <select v-model="archetype" class="form-select">
          <!-- popolare dinamicamente con un ciclo gli archetipi -->
          <!-- al click avviare ExportApi (che serve per spawnare le carte) che come argomento ha il v-model di "archetype" -->
          <option
            @click="ExportApi(archetype)"
            v-for="singleArchetype in store.archetype"
          >
            {{ singleArchetype.archetype_name }}
          </option>
        </select>
      </div>
      <div class="bg-white p-5">
        <div class="bg-dark text-white fw-bold p-2">
          Found {{ store.cardNumber }} cards
        </div>
        <div class="d-flex flex-wrap gap-3 justify-content-between">
          <!-- Fare un ciclo for della singola carta -->
          <div v-for="singleCard in store.card" class="structure">
            <div class="card">
              <!-- Fare un componente per le singole informazioni della carta utilizzando i props -->
              <TheInfoCard :singleInfo="singleCard"></TheInfoCard>
            </div>
          </div>
        </div>
        <!-- Mostra il loader solo quando è true -->
        <TheLoader v-if="store.loading"></TheLoader>
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
