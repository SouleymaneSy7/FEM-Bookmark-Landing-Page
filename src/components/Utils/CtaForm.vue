<template>
  <form class="newsletter--form" @submit.prevent="handleSubmit">
    <div
      class="input-container"
      :class="inputErrorState === true ? 'errors' : ''"
    >
      <label for="input" :class="inputErrorState === true ? 'errors' : ''">
        <input
          type="email"
          name="input"
          id="input"
          class="form--input"
          placeholder="Enter your email address"
          v-model="inputValue"
          @input="handleSubmit"
        />

        <i class="fa-solid fa-circle-exclamation" v-if="inputErrorState"></i>
      </label>

      <span class="input-errors" v-if="inputErrorState">
        {{ inputErrorMsg }}
      </span>
    </div>

    <button type="submit" class="form--btn">Contact Us</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref("");
const inputErrorState = ref(false);
const inputErrorMsg = "Whoops, make sure it's an email";
const regEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

const handleSubmit = () => {
  if (regEx.test(inputValue.value)) {
    inputErrorState.value = false;
  } else {
    inputErrorState.value = true;
  }
};
</script>
