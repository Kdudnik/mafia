<script setup>
import { ref } from 'vue';
import { supabase } from '../lib/supabase';

const userLogin = ref("")
const userPassword = ref("")

async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
        email: userLogin.value,
        password: userPassword.value,
        options: {
            emailRedirectTo: 'https://example.com/welcome',
        },
    })
}

function formError() {
    console.error("ERROR DEBIL!!!")
}
</script>

<template>
    <!-- <form action="" method="post"> -->
    <label for="login">Enter your login</label>
    <input v-model="userLogin" type="text" id="login" placeholder="Your login">
    <label for="password">Enter your password</label>
    <input v-model="userPassword" type="password" id="password" placeholder="Your password">
    <button data-log-in="submit" @click="signUpNewUser()">
        Log In</button>
    <!-- </form> -->
</template>