<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../supabase/useAuth";
import { useValidate } from "../composables/useValidate";

const router = useRouter();

const userEmail = ref("");
const userPassword = ref("");

const fieldsState = ref([])

const onLogin = async (userEmail, userPassword) => {
  const { validateEmail, validatePassword } = useValidate()
  const emailFieldState = validateEmail(userEmail, userPassword)
  const passwordFieldState = validatePassword(userEmail, userPassword)

  if (!emailFieldState.isValid || !passwordFieldState.isValid) {
    fieldsState.value = [emailFieldState, passwordFieldState]
    return
  }

  const { authSignIn } = useAuth()
  const { error } = await authSignIn(userEmail, userPassword)

  if (!error) router.push({ name: "hero" })
}

const emailIsValid = computed(() => {
  return !!fieldsState.value.find(e => e.field === "email") ? false : true
})

const passwordIsValid = computed(() => {
  return !!fieldsState.value.find(e => e.field === "password") ? false : true
})
</script>

<template>
  <form
    novalidate
    class="py-8 px-16 w-1/3 border-4 border-solid rounded-xl bg-opacity-50 border-gray-dark bg-gray-dark dark:border-white dark:bg-white dark:bg-opacity-30 dark:bg-opacity-30"
    @submit.prevent="onLogin(userEmail, userPassword)"
  >
    <div class="mt-12">
      <div class="flex flex-col basis-full gap-8">
        <div class="flex flex-col gap-2">
          <input
            v-model="userEmail"
            class="py-3 px-5 rounded-md bg-transparent border-2 border-solid duration-150 border-gray-dark text-gray-dark dark:text-white focus-visible:border-gray-light dark:focus-visible:border-gray-light"
            :class="[ !emailIsValid ? 'dark:border-red-600' : 'dark:border-white']"
            type="email"
            :placeholder="$t('auth.fields.email')"
          >

          <template v-if="!emailIsValid">
            <span class="text-red-600">
              {{ $t(`${fieldsState.find(e => e.field === "email").message}`) }}
            </span>
          </template>
        </div>

        <div class="flex flex-col gap-2">
          <input
            v-model="userPassword"
            class="py-3 px-5 rounded-md bg-transparent border-2 border-solid duration-150 border-gray-dark text-gray-dark dark:text-white focus-visible:border-gray-light dark:focus-visible:border-gray-light"
            :class="[ !passwordIsValid ? 'dark:border-red-600' : 'dark:border-white']"
            type="password"
            :placeholder="$t('auth.fields.password')"
          >

          <template v-if="!passwordIsValid">
            <span class="text-red-600">
              {{ $t(`${fieldsState.find(e => e.field === "password").message}`) }}
            </span>
          </template>
        </div>

        <input
          type="submit"
          :value="$t('auth.signIn.button')"
          class="btn grow w-auto cursor-pointer"
        >
      </div>
      <div class="text-sm mt-4">
        {{ $t("auth.signIn.linkText") }}
        <router-link
          to="/auth/signUp"
          class="duration-150 hover:text-yellow"
        >
          {{ $t("auth.signIn.link") }}
        </router-link>
      </div>
    </div>
  </form>
</template>
