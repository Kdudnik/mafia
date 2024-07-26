<script setup>
import { useI18n } from "vue-i18n";

const { tm } = useI18n();

defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const hasTranslation = (i) => !!Object.values(tm(`sidebar[${i}]`)).length;
</script>
<template>
  <nav class="sticky top-52 right-0">
    <div
      class="flex flex-col gap-8 border-l-2 border-solid pl-6 border-gray-dark text-gray-dark dark:text-white dark:border-white"
    >
      <template
        v-for="(block, index) in data.sidebar"
        :key="index"
      >
        <div v-if="hasTranslation(index)">
          <h4 class="duration-200 hover:text-gray-light">
            <router-link :to="`${block.link}${block.anchor}`">
              {{ $t(`sidebar[${index}].title`) }}
            </router-link>
          </h4>
          <ul class="ml-4 text-gray-dark dark:text-white">
            <li
              v-for="(topic, i) in block.topics"
              :key="i"
            >
              <a
                class="duration-200 hover:text-gray-light"
                :href="`${block.link}${topic.anchor}`"
              >
                {{ $t(`sidebar[${index}].topics[${i}].title`) }}
              </a>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </nav>
</template>
