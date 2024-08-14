import { supabase } from "../lib/supabase";

export function useUserTable() {
  const userTableCreate = async (user) => {
    const { error } = await supabase
    .from('users-details')
    .insert({ uuid: user.id })
    if(error) alert(error)
  }

  return {
    userTableCreate
  }
}
