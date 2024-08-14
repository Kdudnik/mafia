<script setup>
import FooterComponent from "../components/FooterComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
</script>

<template>
  <div
    class="absolute h-full w-full -z-50 bg-pos-light bg-no-repeat bg-hero-light dark:bg-pos-dark dark:bg-hero-dark dark:bg-cover"
  />
  <NavbarComponent />
  <section class="flex h-maf-screen">
    <div class="container flex flex-col justify-center">
      <h1 class="text-yellow-light dark:text-yellow animate-fade-down">
        Mafia Assistant
      </h1>
      <div
        class="flex flex-col text-lg mt-6 font-semibold leading-8 animate-fade-down animate-delay-150"
      >
        <span v-for="(subtitle, index) in $tm('hero.subtitles')" :key="index">
          {{ subtitle }}
        </span>
      </div>
      <router-link
        to="/docs/rules"
        class="group btn mt-16 flex gap-4 animate-fade-down animate-delay-300"
      >
        <span>{{ $t("hero.btn") }}</span>
        <div
          class="w-6 overflow-hidden flex justify-end duration-150 group-hover:w-9"
        >
          <svg
            class="shrink-0"
            width="38"
            height="16"
            viewBox="0 0 38 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="fill-white-dark dark:fill-gray-dark"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M31.3222 0L38 8L31.3222 16L29.7759 14.639L34.4448 9.04564H0V6.95436H34.4448L29.7759 1.36099L31.3222 0Z"
              fill="#1BB9DC"
            />
          </svg>
        </div>
      </router-link>
    </div>
    <FooterComponent />
  </section>
</template>

<style scoped></style>
