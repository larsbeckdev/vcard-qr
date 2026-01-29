<script setup>
defineProps({
  width: {
    type: [Number, String],
    default: 160,
  },
});
</script>


<template>
  <router-link to="https://example.com" class="logo-link">
    Text
  </router-link>
  <img
    src="@/assets/png/logo.png"
    alt="vcard-qr logo"
    :style="{ width: typeof width === 'number' ? `${width}px` : width }"
    class="select-none" />
</template>
