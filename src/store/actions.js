import axiosClient from "../axiosClient";
export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
        commit('setSearchedMeals', data.meals)
    });
}
export function searchMealsByLetters({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
        commit('setMealsByLetters', data.meals)
    });
}
export function mealsByIngredients({ commit }, ingredient) {
    axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {

        commit('setMealsByIngredients', data.meals)
    });
}