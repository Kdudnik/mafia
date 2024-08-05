import { supabase } from "../lib/supabase";

const useAuth = function () {
  const authSignUp = async function (userEmail, userPassword, userName) {
    const { data, error } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
      options: {
        data: {
          name: userName
        }
      }
    });
  };

  const authSignIn = async function (userEmail, userPassword) {
    const signInResponse = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    });

    return signInResponse
  };

  return {
    authSignUp,
    authSignIn,
  };
};

export { useAuth };
