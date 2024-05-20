import axios from "axios";
import supabase, { BASE_URL } from "./supabase";

axios.defaults.withCredentials = true;

export const getUsers = async () => {
  const { data: clients, error } = await supabase.auth.admin.listUsers();

  if (error) throw error;

  return clients.users;
};

export const getVehicles = async () => {
  let { data, error } = await supabase.from("vehicles").select("*");

  if (error) {
    return error;
  }

  return data;
};

export const deleteVehicle = async (id) => {
  let { error } = await supabase.from("vehicles").delete().eq("id", id);

  if (error) {
    return error;
  }

  return id;
};

export const getRecords = async () => {
  let { data, error } = await supabase.from("bookings").select("*");

  if (error) {
    return error;
  }

  return data;
};

export const deleteRecord = async (id) => {
  let { error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    return error;
  }

  return id;
};
