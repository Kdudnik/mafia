<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="animate-fade-right">
    <h2 :id="data.docs.stages.id" class="animate-fade-down">
      {{ $t("docs.stages.title") }}
    </h2>
    <div
      v-for="(block, index) in data.docs.stages.topicsIds"
      :id="block.id"
      :key="index"
      class="mt-32 pb-4 border-b-2 border-gray-dark dark:border-white border-solid scroll-mt-40"
    >
      <h3 class="animate-fade-down animate-delay-150">{{ $tm(`docs.stages.blocks[${index}].title`) }}</h3>
      <div class="mt-8 flex flex-col gap-4 text-xl animate-fade-down animate-delay-300">
        <p>{{ $tm(`docs.stages.blocks[${index}].text`) }}</p>
        <ul v-if="$tm(`docs.stages.blocks${[index]}.list`)">
          <li
            v-for="(el, i) in $tm(`docs.stages.blocks${[index]}.list`)"
            :key="i"
          >
            {{ el }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
