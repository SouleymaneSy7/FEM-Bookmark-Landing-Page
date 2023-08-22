<template>
  <div>
    <div class="faq__header" @click="toggleAccordionState">
      <h3 class="faq__title">{{ faqTitle }}</h3>

      <i
        class="fa-solid fa-chevron-down"
        :class="accordionState === true ? 'active' : ''"
      ></i>
    </div>

    <div class="faq--body" :class="accordionState === true ? 'show' : ''">
      {{ faqBody }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  faqTitle: {
    type: String,
  },

  faqBody: {
    type: String,
  },
});

const accordionState = ref(false);

const toggleAccordionState = () => {
  accordionState.value = !accordionState.value;
};
</script>
