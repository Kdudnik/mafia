<script setup>
import FooterBar from "../components/FooterBar.vue";
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div
    class="absolute h-full w-full -z-50 bg-pos-light bg-no-repeat bg-light dark:bg-pos-dark dark:bg-dark dark:bg-cover"
  />
  <Navbar />
  <section class="flex h-hero">
    <div class="container mt-52">
      <h1 class="text-yellow-light dark:text-yellow">
        Mafia Assistant
      </h1>
      <div
        class="flex flex-col text-lg mt-6 font-semibold leading-8 text-gray-dark dark:text-white-dark"
      >
        <span
          v-for="(subtitle, index) in $tm('hero.subtitles')"
          :key="index"
        >
          {{ subtitle }}
        </span>
      </div>
      <router-link to="/docs/rules">
        <button class="group btn mt-16 flex gap-4">
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
        </button>
      </router-link>
    </div>
    <FooterBar />
  </section>
</template>

<style scoped></style>
