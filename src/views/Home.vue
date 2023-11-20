<template>
  <div class="flex flex-col p-8">
    <div class="flex gap-2 justify-center mt-3">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
        >{{ letter }}</router-link
      >
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import axiosClient from "../axiosClient.js";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
});
</script>

<style lang="scss" scoped></style>
