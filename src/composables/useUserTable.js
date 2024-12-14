import { supabase } from "../lib/supabase";

export function useUserTable() {
  const userTableCreate = async (user) => {
    const { error } = await supabase.from("users-details").insert({
      uuid: user.id,
      total_games: user.stats.totalGames,
      winrate: user.stats.winrate,
      favourite_role: user.stats.favouriteRole,
    });
    if (error) alert(error);
  };

  return {
    userTableCreate,
  };
}
