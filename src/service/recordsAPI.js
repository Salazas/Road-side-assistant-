import axios from "axios";
import supabase, { BASE_URL } from "./supabase";

axios.defaults.withCredentials = true;

export const getRecords = async () => {
  let { data: bookings, error } = await supabase.from("bookings").select("*");

  if (error) {
    return error;
  }

  return bookings;
};

export const getRecord = async (id) => {
  let { data: booking, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return error;
  }

  return booking;
};

export const createRecord = async (record) => {
  let { data, error } = await supabase.from("bookings").insert([record]);

  if (error) {
    return error;
  }

  return data;
};

export const createEditRecord = async (record) => {
  let { data, error } = await supabase.from("bookings").upsert([record]);

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
