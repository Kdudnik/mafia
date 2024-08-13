<script setup>
import NavbarComponent from "../components/NavbarComponent.vue";
</script>

<template>
  <div
    class="absolute h-full w-full -z-50 bg-pos-light bg-no-repeat bg-auth-light dark:bg-auth-dark dark:brightness-75"
  />
  <NavbarComponent />
  <section class="container flex items-center h-maf-screen pl-32">
    <router-view class="animate-fade-down" />
  </section>
</template>
