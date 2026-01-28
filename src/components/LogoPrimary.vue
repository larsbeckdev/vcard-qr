<script setup>
defineProps({
  width: {
    type: [Number, String],
    default: 160,
  },
});
</script>

<template>
  <img
    src="@/assets/logo-dark.svg"
    alt="vcard-qr logo"
    :style="{ width: typeof width === 'number' ? `${width}px` : width }"
    class="select-none" />
</template>
