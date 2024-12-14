<script setup>
import NavbarComponent from "../components/NavbarComponent.vue";
import { useUser } from "../stores/useUser";

const { user } = useUser();
</script>

<template>
  <NavbarComponent class="bg-white dark:bg-gray-dark" />
  <section class="container mt-20">
    <div>
      <h2 class="text-6xl">{{ $t("stats.title") }}, {{ user.name }}</h2>
      <div class="flex gap-8">
        <div
          class="flex justify-center items-center flex-col border-solid border-2 rounded-md w-max p-8 gap-4 mt-20 mx-10 border-gray dark:border-gray-semi-dark"
        >
          <span>{{ $t("stats.allGamesTitle") }}</span>
          <span>0</span>
        </div>
        <div
          class="flex justify-center items-center flex-col border-solid border-2 rounded-md w-max p-8 gap-4 mt-20 mx-10 border-gray dark:border-gray-semi-dark"
        >
          <span>{{ $t("stats.allGamesTitle") }}</span>
          <span>0</span>
        </div>
        <div
          class="flex justify-center items-center flex-col border-solid border-2 rounded-md w-max p-8 gap-4 mt-20 mx-10 border-gray dark:border-gray-semi-dark"
        >
          <span>{{ $t("stats.allGamesTitle") }}</span>
          <span>0</span>
        </div>
      </div>
    </div>
  </section>
</template>
