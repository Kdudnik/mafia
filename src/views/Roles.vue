<script>
</script>

<template>
    <div>
        <h2>{{ $t("docs.roles.title") }}</h2>
        <div
        v-for="block in $tm('docs.roles.blocks')"
        class="mt-32 pb-4 border-b-2 border-gray-dark dark:border-white border-solid scroll-mt-40"
        :id="block.id"
        >
            <h3>{{ block.title }}</h3>
            <div class="mt-8 flex flex-col gap-4 text-xl">
                <p>{{ block.text }}</p>
                <ul v-if="block.list">
                    <li v-for="el in block.list">{{ el }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>