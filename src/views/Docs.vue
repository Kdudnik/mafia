<script setup>
</script>

<template>
    <section class="container mt-24">
        <div class="flex justify-between items-start relative">
            <router-view></router-view>
            <nav class="sticky top-52 right-0">
                <div class="flex flex-col gap-8 border-white border-l-2 border-solid pl-6">
                    <div>
                        <h4>
                            <router-link to="/docs/rules">Roles:</router-link>
                        </h4>
                        <ul class="ml-4">
                            <li>
                                <a href="#mafia">Mafia</a>
                            </li>
                            <li>
                                <button>Sherif</button>
                            </li>
                            <li>
                                <button>Civilian</button>
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