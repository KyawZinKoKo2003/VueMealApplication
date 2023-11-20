<template>
  <div class="shadow-md rounded">
    <router-link :to="{ name: 'mealById', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>

    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vitae ad
        tempora laudantium? Illo culpa officia ut maiores blanditiis itaque
      </p>
      <YoutubeButton :href="meal.strYoutube">Go to youtube</YoutubeButton>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";
const { meal } = defineProps({
  meal: {
    require: true,
    type: Object,
  },
});
console.log(meal);
</script>

<style scoped></style>
