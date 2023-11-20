<template>
  <div class="grid gird-cols-1 md:grid-cols-3 gap-4 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import MealItem from "../components/MealItem.vue";
import store from "../store";
import { useRoute } from "vue-router";
const route = useRoute();
const meals = store.state.mealsByIngredients;
console.log(store.state.mealsByIngredients);
onMounted(() => {
  store.dispatch("mealsByIngredients", route.params.ingredient);
});
console.log(meals);
</script>

<style lang="scss" scoped></style>
