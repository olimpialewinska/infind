import { store } from "@/stores";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

export const handleSignUp = async (email: string, password: string) => {
  await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/${store.language.currentLanguage}/`,
    },
  });
};

export const handleSignIn = async (email: string, password: string) => {
  const data = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (data.data.user) {
    store.user.currentUserStore = {
      id: data.data.user.id,
      email: data.data.user.email!,
    };
  }
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  store.user.currentUserStore = undefined;
};

export const googleSignIn = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      redirectTo: `${window.location.origin}/${store.language.currentLanguage}`,
    },
  });
};

export const facebookSignIn = async (lng: string) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
    options: {
      redirectTo: `${window.location.origin}/${lng}/`,
      queryParams: {
        display: "popup",
      },
    },
  });
};

export const passwordReset = async (email: string, lng: string) => {
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/${lng}/account/resetPassword`,
  });
};

export const passwordRecovery = async (password: string) => {
  const { error } = await supabase.auth.updateUser({
    password: password,
  });
};
