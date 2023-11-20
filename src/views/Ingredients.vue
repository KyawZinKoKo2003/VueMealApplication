<template>
  <div class="p-5">
    <h1 class="text-3xl font-bold font-sans text-center">Ingredients</h1>

    <router-link
      :to="{
        name: 'byIngredients',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of ingredients"
      :key="ingredient.idIngredient"
    >
      <div class="p-3 rounded mb-3 shadow">
        <h2 class="font-bold text-2xl mb-2">{{ ingredient.strIngredient }}</h2>
        <p class="">{{ ingredient.strDescription }}</p>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axiosClient from "../axiosClient";
const ingredients = ref([]);
axiosClient.get("list.php?i=list").then(({ data }) => {
  console.log(data.meals);
  ingredients.value = data.meals;
});
console.log(ingredients);
</script>

<style lang="scss" scoped></style>
