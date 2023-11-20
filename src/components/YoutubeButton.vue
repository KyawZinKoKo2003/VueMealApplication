<template>
  <div class="mt-3 flex items-center justify-between">
    <a
      :href="href.href"
      target="_blank"
      class="border border-red-400 bg-orange-400 hover:text-white py-2 rounded-sm hover:transition-colors hover:bg-orange-600 px-3"
    >
      <slot></slot
    ></a>
  </div>
</template>

<script setup>
const href = defineProps({
  href: String,
});
</script>

<style lang="scss" scoped></style>
