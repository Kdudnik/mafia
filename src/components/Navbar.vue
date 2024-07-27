<script setup>
import { useI18n } from "vue-i18n";

const { locale, availableLocales } = useI18n();

function switchTheme() {
  document.documentElement.classList.toggle("dark");
}

function switchLanguage() {
  const localeIndex = availableLocales.findIndex((el) => el === locale.value);
  if (localeIndex + 1 >= availableLocales.length)
    locale.value = availableLocales[0];
  else locale.value = availableLocales[localeIndex + 1];
}
</script>

<template>
  <header class="sticky top-0 z-50 flex justify-center h-20 w-full">
    <nav class="container flex grow items-center justify-between py-3">
      <router-link
        to="/"
        class="basis-12 hover:scale-110 duration-200"
      >
        <img
          src="/images/navbar/logo.png"
          alt=""
        >
      </router-link>
      <ul class="flex gap-8 text-2xl font-semibold">
        <button class="group flex flex-wrap relative">
          <router-link to="/">
            <li
              class="duration-200 text-gray-dark group-hover:text-gray-light dark:text-gray dark:group-hover:text-gray-light"
            >
              {{ $t("navbar.home") }}
            </li>
            <div
              class="h-0.5 w-0 absolute bottom-0 bg-gray rounded-md duration-200 group-hover:w-full"
            />
          </router-link>
        </button>
        <button class="group flex flex-wrap relative">
          <router-link :to="{name: 'docs.rules', hash: '#rules'}">
            <li
              class="duration-200 text-gray-dark group-hover:text-gray-light dark:text-gray dark:group-hover:text-gray-light"
            >
              {{ $t("navbar.docs") }}
            </li>
            <div
              class="h-0.5 w-0 absolute bottom-0 bg-gray rounded-md duration-200 group-hover:w-full"
            />
          </router-link>
        </button>
        <!-- <button class="group flex flex-wrap relative">
                    <router-link to="/generation">
                        <li
                            class="duration-200 text-gray-dark group-hover:text-gray-light dark:text-gray dark:group-hover:text-gray-light">
                            {{ $t("navbar.generation") }}
                        </li>
                        <div class="h-0.5 w-0 absolute bottom-0 bg-gray rounded-md duration-200 group-hover:w-full">
                        </div>
                    </router-link>
                </button> -->
      </ul>
      <div class="flex gap-8 items-center">
        <button
          class="group duration-200 hover:scale-110"
          @click="switchTheme()"
        >
          <svg
            class="dark:hidden"
            width="26"
            height="26"
          >
            <path
              class="fill-gray-dark text-gray group-hover:fill-gray"
              fill-rule="evenodd"
              d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
            />
          </svg>
          <svg
            class="hidden dark:inline"
            width="26"
            height="26"
          >
            <path
              class="dark:fill-white dark:group-hover:fill-gray"
              fill-rule="evenodd"
              d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
            />
          </svg>
        </button>
        <button
          class="w-10 h-6 rounded-sm overflow-hidden dark:brightness-50 duration-200 hover:scale-110 dark:hover:brightness-75"
          @click="switchLanguage"
        >
          <img
            class="h-full w-full"
            :src="`/images/navbar/${$i18n.locale}.png`"
            alt=""
          >
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
@tailwind utilities;

@layer utilities {
  .active-page > li {
    @apply text-gray-light;
    @apply dark:text-gray-light;
  }

  .active-page > div {
    @apply w-full;
  }
}
</style>
