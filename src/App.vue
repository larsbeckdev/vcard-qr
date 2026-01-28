<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <main class="p-6">
    <h1>Vite + Vue 🚀</h1>
    <button @click="count++">Count: {{ count }}</button>
  </main>
</template>
