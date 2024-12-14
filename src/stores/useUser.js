import { reactive, registerRuntimeCompiler } from "vue";
import { defineStore } from "pinia";

export const useUser = defineStore('user', () => {
  const user = reactive({
    authorized: false,
    id: "",
    name: "",
    stats: {
      totalGames: 0,
      winrate: "",
      favouriteRole: ""
    }
  })

  function clearStore () {
    user.authorized = false
    user.id = ""
    user.name = ""
  }

  function getUser() {
    return user
  }

  function setCurrentUser({authorized, id, name}) {
    user.authorized = authorized
    user.id = id
    user.name = name
  }

  return { user, clearStore, getUser, setCurrentUser }
})
