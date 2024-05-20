import axios from "axios";
import supabase, { BASE_URL } from "./supabase";

axios.defaults.withCredentials = true;

export const apiLogin = async ({ email, password }) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return data;
};

export const apiLogout = async () => {
  let { error } = await supabase.auth.signOut();

  if (error) throw error;
};

export const apiCheckAuth = async () => {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
};

export const apiRegister = async ({ email, password, phone, username }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        phone,
        username,
      },
    },
  });

  if (error) throw error;

  return data;
};
