import { reactive } from "vue";
import { defineStore } from "pinia";

export const useUser = defineStore('user', () => {
  const user = reactive({
    authorized: false,
    id: "",
    name: ""
  })

  function clearStore () {
    user.authorized = false
    user.id = ""
    user.name = ""
  }

  return { user, clearStore }
})
