<script setup>
import { ref } from "vue";
import { useRoute } from 'vue-router';

import DocsSidebar from "../components/DocsSidebar.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
import dataJSON from "../../data/data.json";

const { params } = useRoute()

const data = ref(dataJSON);
</script>

<template>
  <NavbarComponent class="bg-white dark:bg-gray-dark" />
  <section class="container mt-24 mb-52">
    <div class="flex justify-between items-start relative">
      {{ params.title }}
      <router-view
        :name="params.title"
        class="basis-3/4 leading-10"
        :data="data"
        :route-title="params.title"
      />
      <DocsSidebar :data="data" />
    </div>
  </section>
</template>

<style scoped></style>
