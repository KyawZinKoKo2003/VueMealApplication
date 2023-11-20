<template>
  <div class="max-w-[800px] mx-auto">
    <h1 class="font-bold text-4xl text-center mb-4">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="grid grid-cols-1 md:grid-cols-3 mt-3 text-lg py-3">
      <div class=""><strong>Category :</strong>{{ meal.strCategory }}</div>
      <div><strong>Area:</strong> {{ meal.strArea }}</div>
      <div><strong>Tag:</strong> {{ meal.strTag }}</div>
    </div>
    <div class="my-3 mx-auto">{{ meal.strInstructions }}</div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold">Ingredients</h2>
        <template v-for="(i, index) in new Array(20)">
          <h2 v-if="meal[`strIngredient${index + 1}`]">
            {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
          </h2>
        </template>
      </div>
      <div>
        <h2 class="text-2xl font-semibold">Measurer</h2>
        <template v-for="(i, index) in new Array(20)">
          <h2 v-if="meal[`strMeasure${index + 1}`]">
            {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
          </h2>
        </template>
      </div>
    </div>
    <div class="flex mt-3 gap-3">
      <YoutubeButton :href="meal.strYoutube">Got to You tube</YoutubeButton>
      <a
        :href="meal.strSource"
        class="border mt-3 border-transparent py-3 px-2 hover:bg-indigo-600 text-indigo-600 hover:text-white h-9 rounded"
        >View Source</a
      >
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";
const meal = ref({});
const route = useRoute();
onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
  console.log(meal);
});
</script>

<style lang="scss" scoped></style>
