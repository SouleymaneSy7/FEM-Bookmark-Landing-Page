<template>
  <section class="card">
    <div class="card__img">
      <img :src="cardProps.cardImg" alt="" />
    </div>

    <div class="card__description">
      <h3 class="card__title | text-center">{{ cardProps.cardTitle }}</h3>

      <p class="text-clr-600 fw-regular fs-base text-center">
        {{ cardProps.cardText }}
      </p>
    </div>

    <div class="card-btn-container">
      <button type="button" class="card--btn">Add & Install Extension</button>
    </div>
  </section>
</template>

<script setup>
const cardProps = defineProps({
  cardImg: {
    type: String,
  },
  cardTitle: {
    type: String,
  },
  cardText: {
    type: String,
  },
});
</script>
