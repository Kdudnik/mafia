import { supabase } from "../lib/supabase";

const useAuth = function () {
  const authSignUp = async function (userEmail, userPassword, userName) {
    const signUpResponse = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
      options: {
        data: {
          name: userName,
        },
      },
    });
    return signUpResponse
  };

  const authSignIn = async function (userEmail, userPassword) {
    const signInResponse = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    });
    return signInResponse;
  };

  const authGetSession = async function () {
    const localSession = await supabase.auth.getSession();
    return localSession.data.session
  };

  return {
    authSignUp,
    authSignIn,
    authGetSession,
  };
};

export { useAuth };
