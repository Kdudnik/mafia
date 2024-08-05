<script setup>
import NavbarComponent from "../components/NavbarComponent.vue";
</script>

<template>
  <div
    class="absolute h-full w-full -z-50 bg-pos-light bg-no-repeat bg-auth-light dark:bg-auth-dark dark:blur-none"
  />
  <NavbarComponent />
  <section class="flex h-maf-screen">
    <div class="container flex items-center pl-32">
      <router-view class="animate-fade-down" />
    </div>
  </section>
</template>
