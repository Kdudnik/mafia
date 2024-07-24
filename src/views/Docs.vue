<script setup>
</script>

<template>
    <section class="container mt-24">
        <div class="flex justify-between items-start relative">
            <router-view class="text-gray-dark dark:text-white"></router-view>
            <nav class="sticky top-52 right-0">
                <div class="flex flex-col gap-8 border-l-2 border-solid pl-6 border-gray-dark text-gray-dark dark:text-white dark:border-white">
                    <div>
                        <h4 class="duration-200 hover:text-gray-light">
                            <router-link to="/docs/roles">Roles:</router-link>
                        </h4>
                        <ul class="ml-4 text-gray-dark dark:text-white">
                            <li>
                                <a class="duration-200 hover:text-gray-light" href="#mafia">Mafia</a>
                            </li>
                            <li>
                                <a class="duration-200 hover:text-gray-light" href="#sherif">Sherif</a>
                            </li>
                            <li>
                                <a class="duration-200 hover:text-gray-light" href="#civilian">Civilian</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>
                            <router-link to="/docs/game">Game:</router-link>
                        </h4>
                        <ul class="ml-4">
                            <li>Mafia</li>
                            <li>Sherif</li>
                            <li>Civilian</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Stage:</h4>
                        <ul class="ml-4">
                            <li>Mafia</li>
                            <li>Sherif</li>
                            <li>Civilian</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Help:</h4>
                        <ul class="ml-4">
                            <li>Mafia</li>
                            <li>Sherif</li>
                            <li>Civilian</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </section>
</template>

<style scoped>

</style>