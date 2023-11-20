<template>
  <header class="bg-white h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex h-full p-5 text-3xl font-semibold"
    >
      Home</router-link
    >
    <div class="gap-3 flex items-center">
      <router-link
        class="inline-flex h-full items-center transition-colors hover:bg-purple-100 px-3"
        :to="{ name: 'byName' }"
        >Search
      </router-link>
      <router-link
        class="inline-flex h-full items-center transition-colors hover:bg-purple-100 px-3"
        :to="{ name: 'byLetter' }"
        >Meals By Letters
      </router-link>
      <router-link
        class="inline-flex h-full items-center transition-colors hover:bg-purple-100 px-3"
        :to="{ name: 'ingredients' }"
        >Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
