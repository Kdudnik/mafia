<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../supabase/useAuth";
import { useValidate } from "../composables/useValidate";
import { useUser } from "../stores/useUser";
import { useUserTable } from "../composables/useUserTable";

const router = useRouter();

const userName = ref("");
const userEmail = ref("");
const userPassword = ref("");

const fieldsState = ref([]);

const supabaseErrorMessage = ref();

const onSignUp = async (userEmail, userPassword, userName) => {
  const { validateEmail, validatePassword, validateUsername } = useValidate();
  const emailFieldState = validateEmail(userEmail);
  const passwordFieldState = validatePassword(userPassword);
  const usernameFieldState = validateUsername(userName);

  fieldsState.value = [emailFieldState, passwordFieldState, usernameFieldState];
  if (!emailFieldState.isValid || !passwordFieldState.isValid || !usernameFieldState.isValid) return;

  const { authSignUp } = useAuth();
  const { data, error } = await authSignUp(userEmail, userPassword, userName);

  if (error) {
    supabaseErrorMessage.value = error.message;
  } else {
    const { user } = useUser()
    user.authorized = true
    user.id = data.user.id
    user.name = data.user.user_metadata.name
    const { userTableCreate } = useUserTable()
    userTableCreate(user)
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

const usernameIsValid = computed(() => {
  const usernameField = fieldsState.value.find((e) => e.field === "username");
  if (!!usernameField) return usernameField.isValid;
  else return !!usernameField ? false : true;
});
</script>

<template>
  <form
    novalidate
    class="py-8 px-16 w-1/3 border-4 border-solid rounded-xl bg-opacity-50 border-gray-dark bg-gray-dark dark:border-white dark:bg-white dark:bg-opacity-30"
    @submit.prevent="onSignUp(userEmail, userPassword, userName)"
  >
    <div class="mt-12">
      <div class="flex flex-col basis-full gap-8">
        <div class="flex flex-col gap-2">
          <input
            v-model="userName"
            class="py-3 px-5 rounded-md bg-transparent border-2 border-solid duration-150 text-gray-dark dark:text-white focus-visible:border-gray-light dark:focus-visible:border-gray-light"
            :class="[
              !usernameIsValid ? 'border-error' : 'border-gray-dark dark:border-white',
            ]"
            type="username"
            :placeholder="$t('auth.fields.username')"
          >

          <template v-if="!usernameIsValid">
            <span class="text-error">
              {{
                $t(`${fieldsState.find((e) => e.field === "username").message}`)
              }}
            </span>
          </template>
        </div>

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
          :value="$t('auth.signUp.button')"
          class="btn grow w-auto cursor-pointer"
        >
      </div>
      <div class="text-error mt-4" v-if="supabaseErrorMessage">
        {{ supabaseErrorMessage }}
      </div>
      <div class="text-sm mt-4">
        {{ $t("auth.signUp.linkText") }}
        <router-link to="/auth/signIn" class="duration-150 hover:text-yellow">
          {{ $t("auth.signUp.link") }}
        </router-link>
      </div>
    </div>
  </form>
</template>
