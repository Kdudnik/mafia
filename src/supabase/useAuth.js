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
    return signUpResponse;
  };

  const authSignIn = async function (userEmail, userPassword) {
    const signInResponse = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    });
    return signInResponse;
  };

  const authLogOut = async function () {
    let { error } = await supabase.auth.signOut();
    if (error) console.log(error);
  };

  const authGetUser = async function () {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  };

  return {
    authSignUp,
    authSignIn,
    authLogOut,
    authGetUser,
  };
};

export { useAuth };
