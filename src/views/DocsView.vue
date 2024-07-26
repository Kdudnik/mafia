<script setup>
import { ref } from "vue";
import DocsSidebar from "../components/DocsSidebar.vue";
import NavBar from "../components/NavBar.vue";
import dataJSON from "../../data/data.json";

const data = ref(dataJSON);
</script>

<template>
  <NavBar class="bg-white dark:bg-gray-dark" />
  <section class="container mt-24 mb-52">
    <div class="flex justify-between items-start relative">
      <router-view
        class="basis-3/4 leading-10 text-gray-dark dark:text-white-dark"
        :data="data"
      />
      <DocsSidebar :data="data" />
    </div>
  </section>
</template>

<style scoped></style>
