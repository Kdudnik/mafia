import { reactive } from "vue";
import { defineStore } from "pinia";

export const useUser = defineStore('user', () => {
  const userAuthorized = reactive(false)

  const userId = reactive()

  const username = reactive("")

  return { userAuthorized, userId, username }
})
