<script setup>
defineProps({
    data: Object,
})
</script>

<template>
    <div>
        <h2 :id="data.docs.rules.id">{{ $t("docs.rules.title") }}</h2>
        <div
        v-for="(block, index) in data.docs.rules.topicsIds"
        class="mt-32 pb-4 border-b-2 border-gray-dark dark:border-white border-solid scroll-mt-40"
        :id="block.id"
        >
            <h3>{{ $tm(`docs.rules.blocks[${index}].title`) }}</h3>
            <div class="mt-8 flex flex-col gap-4 text-xl">
                <p>{{ $tm(`docs.rules.blocks[${index}].text`) }}</p>
                <ul v-if="$tm(`docs.rules.blocks${[index]}.list`)">
                    <li v-for="el in $tm(`docs.rules.blocks${[index]}.list`)">{{ el }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>