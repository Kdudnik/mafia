import { reactive, registerRuntimeCompiler } from "vue";
import { defineStore } from "pinia";
import { useUserTable } from "../composables/useUserTable";

export const useUser = defineStore('user', () => {
  const user = reactive({
    authorized: false,
    id: "",
    name: "",
    stats: {
      totalGames: 0,
      winrate: 0,
      favouriteRole: "-"
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

  async function setCurrentUser({authorized, id, name}) {
    const { getRow } = useUserTable()

    user.authorized = authorized
    user.id = id
    user.name = name

    const userStats = await getRow(user.id)

    user.stats.favouriteRole = userStats[0].favourite_role
    user.stats.winrate = userStats[0].winrate + "%"
    user.stats.totalGames = userStats[0].total_games
  }

  return { user, clearStore, getUser, setCurrentUser }
})
