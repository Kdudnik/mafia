<script setup>
defineProps({
    data: Object,
})
</script>

<template>
    <div>
        <h2>{{ $t("docs.stages.title") }}</h2>
        <div
        v-for="(block, index) in data.docs.stages.topicsIds"
        class="mt-32 pb-4 border-b-2 border-gray-dark dark:border-white border-solid scroll-mt-40"
        :id="block.id"
        >
            <h3>{{ $tm(`docs.stages.blocks[${index}].title`) }}</h3>
            <div class="mt-8 flex flex-col gap-4 text-xl">
                <p>{{ $tm(`docs.stages.blocks[${index}].text`) }}</p>
                <ul v-if="$tm(`docs.stages.blocks[${index}].list`)">
                    <li v-for="el in $tm(`docs.stages.blocks[${index}].list`)">{{ el }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>