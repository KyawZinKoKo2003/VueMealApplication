<template>
  <div class="flex gap-2 justify-center mt-3">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter in letters"
      :key="letter"
      >{{ letter }}</router-link
    >
  </div>
  <div class="grid grod-cols-1 md:grid-cols-3 gap-3 mt-4">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"></MealItem>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetters);
watch(route, () => {
  store.dispatch("searchMealsByLetters", route.params.letter);
});
onMounted(() => {
  store.dispatch("searchMealsByLetters", route.params.letter);
});
</script>

<style lang="scss" scoped></style>
