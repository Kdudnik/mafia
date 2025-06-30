<script setup>
import NavbarComponent from "../components/NavbarComponent.vue";
import StatTitle from "../components/StatTitle.vue";
import { useUser } from "../stores/useUser";

const { user } = useUser();
</script>

<template>
  <NavbarComponent class="bg-white dark:bg-gray-dark" />
  <section class="container mt-20">
    <div>
      <h2 class="text-6xl mb-20">{{ $t("stats.title") }}, {{ user.name }}</h2>
      <StatTitle title="overall" />
      <div class="flex gap-8">
        <div
          v-for="(stat, statKey) in user.stats"
          :key="statKey"
          class="flex justify-center items-center flex-col basis-1/3 border-solid border-2 rounded-md w-max p-8 gap-4 mx-10 border-gray dark:border-gray-semi-dark"
        >
          <span class="text-xl">{{ $t(`stats.${statKey}`) }}</span>
          <span class="font-bold text-4xl">{{ stat }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
