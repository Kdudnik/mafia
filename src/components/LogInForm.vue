<script setup>
    import { ref } from 'vue';
    import { supabase } from '../lib/supabase';

    const formLoginField = ref("")
    const formPasswordField = ref("")
    async function addUser() {
        const { data, error } = await supabase.from('users').select()
        if(error) {
            console.error(error.message)
            return
        }
        console.log(data)
    }
    function formError() {
        console.error("ERROR DEBIL!!!")
    }
</script>

<template>
    <!-- <form action="" method="post"> -->
        <label for="login">Enter your login</label>
        <input v-model="formLoginField" type="text" id="login" placeholder="Your login">
        <label for="password">Enter your password</label>
        <input v-model="formPasswordField" type="password" id="password" placeholder="Your password">
        <button data-log-in="submit"
                @click="formLoginField && formPasswordField ? addUser() : formError()">
        Log In</button>
    <!-- </form> -->
</template>