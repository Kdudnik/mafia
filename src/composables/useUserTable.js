import { supabase } from "../lib/supabase";

export function useUserTable() {
  const createRow = async (user) => {
    const { error } = await supabase.from("users-details").insert({
      uuid: user.id,
      total_games: user.stats.totalGames,
      winrate: user.stats.winrate,
      favourite_role: user.stats.favouriteRole,
    });
    if (error) console.log(error);
  };

  const getRow = async (userId) => {
    const { data, error } = await supabase
      .from("users-details")
      .select()
      .eq("uuid", userId);

      if(error) {
        return error
      }
      else {
        return data
      }
  };

  return {
    createRow,
    getRow,
  };
}
