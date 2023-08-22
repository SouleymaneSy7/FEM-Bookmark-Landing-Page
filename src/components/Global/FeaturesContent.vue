<template>
  <section class="feature">
    <div class="feature__description">
      <h2 class="secondary-title fw-bold text-clr-100">Features</h2>

      <p class="fs-base text-clr-600 fw-regular">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
    </div>

    <ul class="feature__links" role="list">
      <li><router-link to="/">Simple Bookmarking</router-link></li>
      <li><router-link to="Feature-2">Speedy Searching</router-link></li>
      <li><router-link to="Feature-3">Easy Sharing</router-link></li>
    </ul>

    <div class="feature--views">
      <RouterView />
    </div>
  </section>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
