<template>
  <section class="faq-container | spacing">
    <div class="faq__description">
      <h2 class="secondary-title fw-bold text-clr-100 text-center">
        Frequently Asked Questions
      </h2>
      <p class="fs-base fw-regular text-clr-600 text-center">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
    </div>

    <div class="faq-card">
      <BaseFAQ
        v-for="faq in faqDetails"
        :key="faq.id"
        :faq-title="faq.faqTitle"
        :faq-body="faq.faqBody"
      />
    </div>

    <button type="button" class="btn-primary">More Info</button>
  </section>
</template>

<script setup>
import { ref } from "vue";
import BaseFAQ from "../Utils/BaseFAQ.vue";

const faqDetails = ref([
  {
    id: 0,
    faqTitle: "What is Bookmark?",
    faqBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tinciduntjusto eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 1,
    faqTitle: "How can I request a new browser?",
    faqBody:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: 2,
    faqTitle: "Is there a mobile app?",
    faqBody:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum. ",
  },
  {
    id: 3,
    faqTitle: "What about other Chromium browsers?",
    faqBody:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
]);
</script>
