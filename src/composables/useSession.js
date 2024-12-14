import { supabase } from "../lib/supabase";
import { useAuth } from "../supabase/useAuth";

export const useSession = function () {
  const checkExpiredSession = async function () {
    const { data: { user }, error } = await supabase.auth.getUser()
    if(error) {
      console.log(error)
      return
    }
    const currentDate = new Date()
    const lastSignedInDate = new Date(user.last_sign_in_at)
    const differenceInMilliseconds = currentDate - lastSignedInDate
    const differenceInHours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
    const { authLogOut } = useAuth()
    if(differenceInHours >= 2) authLogOut()
  };

  return {
    checkExpiredSession,
  };
};
