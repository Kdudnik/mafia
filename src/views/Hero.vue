<script setup>
    import Footerbar from '../components/Footerbar.vue';
</script>

<template>
    <section class="bg-center flex h-hero dark:bg-hero-dark">
        <div class="container mt-52">
            <h1 class="text-red-light dark:text-red">Mafia Assistant</h1>
            <div class="flex flex-col text-2xl mt-6 font-semibold leading-8 text-gray-dark dark:text-white">
                <span>Your second hand in the mafia world. </span>
                <span>We've prepared anything you need during the game.</span>
                <span>And we're glad to make your mafia experience better.</span>
            </div>
            <router-link to="/docs">
                <button class="group btn mt-16 flex gap-4">
                    <span>Get Started</span>
                    <div class="w-6 overflow-hidden flex justify-end duration-150 group-hover:w-9">
                        <svg class="shrink-0" width="38" height="16" viewBox="0 0 38 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M31.3222 0L38 8L31.3222 16L29.7759 14.639L34.4448 9.04564H0V6.95436H34.4448L29.7759 1.36099L31.3222 0Z" fill="#1BB9DC"/>
                        </svg>
                    </div>
                </button>
            </router-link>
        </div>
        <Footerbar></Footerbar>
    </section>
</template>

<style scoped>

</style>
