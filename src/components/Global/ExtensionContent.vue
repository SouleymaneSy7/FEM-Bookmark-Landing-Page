<template>
  <section class="extension | spacing">
    <div class="extension__description">
      <h2 class="secondary-title fw-bold text-clr-100">
        Download the extension
      </h2>

      <p class="fs-base fw-regular text-clr-600">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
    </div>

    <div class="extension-card | even-flex">
      <ExtensionCard
        v-for="card in cardDetails"
        :key="card.id"
        :card-img="card.cardImg"
        :card-title="card.cardTitle"
        :card-text="card.cardText"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ExtensionCard from "../Utils/ExtensionCard.vue";
import cardImg1 from "@/assets/logo-chrome.svg";
import cardImg2 from "@/assets/logo-firefox.svg";
import cardImg3 from "@/assets/logo-opera.svg";

const cardDetails = ref([
  {
    id: 0,
    cardImg: cardImg1,
    cardTitle: "Add to Chrome",
    cardText: "Minimum version 62",
  },
  {
    id: 1,
    cardImg: cardImg2,
    cardTitle: "Add to Firefox",
    cardText: "Minimum version 55",
  },
  {
    id: 2,
    cardImg: cardImg3,
    cardTitle: "Add to Opera",
    cardText: "Minimum version 46",
  },
]);
</script>
