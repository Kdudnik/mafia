<script setup>
    function anchorScroll(event) {
        // window.scrollTo(0, )
        console.log(event)
    }
</script>

<template>
    <section class="container mt-24">
        <div class="flex justify-between items-start relative h-[10000px]">
            <router-view></router-view>
            <nav class="sticky top-52 right-0">
                <div class="flex flex-col gap-8 border-white border-l-2 border-solid pl-6">
                    <div>
                        <h4>
                            <router-link to="/docs/rules">Roles:</router-link>
                        </h4>
                        <ul class="ml-4">
                            <li>
                                <button @click="anchorScroll()" :data-anchor-btn="mafia">Mafia</button>
                            </li>
                            <li>
                                <button @click="anchorScroll()" :data-anchor-btn="sherif">Sherif</button>
                            </li>
                            <li>
                                <button @click="anchorScroll()" :data-anchor-btn="civilian">Civilian</button>
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