<script setup>
import { ref } from "vue";
import { useAuth } from "../supabase/useAuth";

const { authSignUp } = useAuth();

const userName = ref("");
const userEmail = ref("");
const userPassword = ref("");
</script>

<template>
  <form
    class="py-8 px-16 w-1/3 border-4 border-solid rounded-xl bg-opacity-50 border-gray-dark bg-gray-dark dark:border-white dark:bg-white dark:bg-opacity-30 dark:bg-opacity-30"
    @submit.prevent="authSignUp(userEmail, userPassword, userName)"
  >
    <div class="mt-12">
      <div class="flex flex-col basis-full gap-8">
        <input
          v-model="userName"
          class="py-3 px-5 rounded-md bg-transparent border-2 border-solid duration-150 border-gray-dark text-gray-dark dark:text-white dark:border-white focus-visible:border-yellow dark:focus-visible:border-yellow"
          type="text"
          :placeholder="$t('auth.fields.name')"
        >
        <input
          v-model="userEmail"
          class="py-3 px-5 rounded-md bg-transparent border-2 border-solid duration-150 border-gray-dark text-gray-dark dark:text-white dark:border-white focus-visible:border-yellow dark:focus-visible:border-yellow"
          type="email"
          :placeholder="$t('auth.fields.email')"
        >
        <input
          v-model="userPassword"
          class="py-3 px-5 rounded-md bg-transparent border-2 border-solid duration-150 border-gray-dark text-gray-dark dark:text-white dark:border-white focus-visible:border-yellow dark:focus-visible:border-yellow"
          type="password"
          :placeholder="$t('auth.fields.password')"
        >
        <input
          type="submit"
          class="btn grow w-auto cursor-pointer"
          :value="$t('auth.signUp.button')"
        >
      </div>
      <div class="text-sm mt-4">
        {{ $t("auth.signUp.linkText") }}
        <router-link
          to="/auth/signIn"
          class="duration-150 hover:text-yellow"
        >
          {{ $t("auth.signUp.link") }}
        </router-link>
      </div>
    </div>
  </form>
</template>
