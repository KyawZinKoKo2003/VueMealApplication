<template>
  <div class="p-8">
    <input
      @change="searchMeals"
      v-model="keyword"
      class="rounded border-gray-200 border-2 w-full"
      placeholder="Search For meal"
    />
  </div>
  <div class="grid gird-cols-1 md:grid-cols-3 gap-4 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";
import MealItem from "../components/MealItem.vue";
const keyword = ref("");
const route = useRoute();
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
    console.log(store.state);
  } else {
    store.commit("setSearchedMeals", []);
  }
}
onMounted(() => {
  keyword.value = route.params.name;

  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style lang="scss" scoped></style>
