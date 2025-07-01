<script setup>
const props = defineProps(['title'])
</script>

<template>
  <div
    class="w-full bg-white-dark dark:bg-gray-semi-dark rounded-2xl font-bold px-6 py-4 mb-10 text-3xl"
  >
    {{ $t(`stats.${props.title}`) }}
  </div>
</template>
