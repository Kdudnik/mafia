<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <h2 :id="data.docs.roles.id">
      {{ $t("docs.roles.title") }}
    </h2>
    <div
      v-for="(block, index) in data.docs.roles.topicsIds"
      :id="block.id"
      :key="index"
      class="mt-32 pb-4 border-b-2 border-gray-dark dark:border-white border-solid scroll-mt-40"
    >
      <h3>{{ $tm(`docs.roles.blocks[${index}].title`) }}</h3>
      <div class="mt-8 flex flex-col gap-4 text-xl">
        <p>{{ $tm(`docs.roles.blocks[${index}].text`) }}</p>
        <ul v-if="$tm(`docs.roles.blocks${[index]}.list`)">
          <li
            v-for="(el, i) in $tm(`docs.roles.blocks${[index]}.list`)"
            :key="i"
          >
            {{ el }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
