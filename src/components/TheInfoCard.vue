<script>
export default {
  props: {
    singleInfo: {
      type: String,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <!-- Grazie al props poter estrapolare le informazioni -->
  <img
    :src="singleInfo.card_images[0].image_url"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body d-flex flex-column text-center bg-main pt-4 pb-4">
    <h5 class="card-title text-uppercase text-white">
      {{ singleInfo.name }}
    </h5>
    <div class="card-text mt-auto">{{ singleInfo.archetype }}</div>
  </div>
</template>

<style lang="scss" scoped>
.bg-main {
  background-color: rgb(212, 143, 56);
}
</style>
