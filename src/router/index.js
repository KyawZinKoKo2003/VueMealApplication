import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import MealByIngredients from '../views/MealByIngredients.vue'
import MealByName from '../views/MealByName.vue'
import MealByLetter from '../views/MealByLetter.vue'
import Default from '../Layouts/Default.vue'
import Guest from '../Layouts/Guest.vue'
import MealDetail from '../views/MealDetail.vue';
import Ingredients from '../views/Ingredients.vue';
const routes = [
    {
        path: '/',
        component: Default,
        children: [
            {
                path: '/',
                name: "home",
                component: Home
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealByLetter
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealByName
            },
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredients',
                component: MealByIngredients
            },
            {
                path: 'meal/:id?',
                name: 'mealById',
                component: MealDetail,
            },
            {
                path: 'ingredients',
                name: 'ingredients',
                component: Ingredients,
            }
        ]
    },
    {
        path: '/guest',
        component: Guest
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;