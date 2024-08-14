<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../supabase/useAuth";
import { useValidate } from "../composables/useValidate";
import { useUser } from "../stores/useUser";

const router = useRouter();

const userEmail = ref("");
const userPassword = ref("");

const fieldsState = ref([]);

const supabaseErrorMessage = ref();

const onSignIn = async (userEmail, userPassword) => {
  const { validateEmail, validatePassword } = useValidate();
  const emailFieldState = validateEmail(userEmail);
  const passwordFieldState = validatePassword(userPassword);

  fieldsState.value = [emailFieldState, passwordFieldState];
  if (!emailFieldState.isValid || !passwordFieldState.isValid) return;

  const { authSignIn } = useAuth();
  const { data, error } = await authSignIn(userEmail, userPassword);

  if (error) {
    supabaseErrorMessage.value = error.message;
  } else {
    const { user } = useUser()
    user.authorized = true
    user.id = data.user.id
    user.name = data.user.user_metadata.name
    router.push({ name: "hero" });
  }
};

const emailIsValid = computed(() => {
  const emailField = fieldsState.value.find((e) => e.field === "email");
  if (!!emailField) return emailField.isValid;
  else return !!emailField ? false : true;
});

const passwordIsValid = computed(() => {
  const passwordField = fieldsState.value.find((e) => e.field === "password");
  if (!!passwordField) return passwordField.isValid;
  else return !!passwordField ? false : true;
});
</script>

<template>
  <form
    novalidate
    class="py-8 px-16 w-1/3 border-4 border-solid rounded-xl bg-opacity-50 border-gray-dark bg-gray-light dark:border-white dark:bg-white dark:bg-opacity-30"
    @submit.prevent="onSignIn(userEmail, userPassword)"
  >
    <div class="mt-12">
      <div class="flex flex-col basis-full gap-8">
        <div class="flex flex-col gap-2">
          <input
            v-model="userEmail"
            class="py-3 px-5 rounded-md bg-transparent border-2 border-solid duration-150 text-gray-dark dark:text-white focus-visible:border-gray-light dark:focus-visible:border-gray-light"
            :class="[
              !emailIsValid ? 'border-error' : 'border-gray-dark dark:border-white',
            ]"
            type="email"
            :placeholder="$t('auth.fields.email')"
          >

          <template v-if="!emailIsValid">
            <span class="text-error">
              {{
                $t(`${fieldsState.find((e) => e.field === "email").message}`)
              }}
            </span>
          </template>
        </div>

        <div class="flex flex-col gap-2">
          <input
            v-model="userPassword"
            class="py-3 px-5 rounded-md bg-transparent border-2 border-solid duration-150 text-gray-dark dark:text-white focus-visible:border-gray-light dark:focus-visible:border-gray-light"
            :class="[
              !passwordIsValid ? 'border-error' : 'border-gray-dark dark:border-white',
            ]"
            type="password"
            :placeholder="$t('auth.fields.password')"
          >

          <template v-if="!passwordIsValid">
            <span class="text-error">
              {{
                $t(`${fieldsState.find((e) => e.field === "password").message}`)
              }}
            </span>
          </template>
        </div>

        <input
          type="submit"
          :value="$t('auth.signIn.button')"
          class="btn grow w-auto cursor-pointer"
        >
      </div>
      <div class="text-error mt-4" v-if="supabaseErrorMessage">
        {{ supabaseErrorMessage }}
      </div>
      <div class="text-sm mt-4">
        {{ $t("auth.signIn.linkText") }}
        <router-link to="/auth/signUp" class="duration-150 hover:text-yellow">
          {{ $t("auth.signIn.link") }}
        </router-link>
      </div>
    </div>
  </form>
</template>
