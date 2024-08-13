import { reactive } from "vue";
import { defineStore } from "pinia";

export const useUser = defineStore('user', () => {
  const userDetails = reactive({})

  return { userDetails }
})
