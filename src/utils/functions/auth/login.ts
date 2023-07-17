import { store } from "@/stores";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

export const handleSignUp = async (email: string, password: string) => {
  await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/`,
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
      redirectTo: `${window.location.origin}/`,
    },
  });
};

export const facebookSignIn = async (lng: string) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
    options: {
      redirectTo: `${window.location.origin}/en/`,
      queryParams: {
        display: "popup",
      },
    },
  });
};