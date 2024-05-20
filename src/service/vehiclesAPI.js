import axios from "axios";
import supabase, { BASE_URL } from "./supabase";

axios.defaults.withCredentials = true;

export const getVehicles = async () => {
  let { data, error } = await supabase.from("vehicles").select("*");

  if (error) {
    return error;
  }

  return data;
};

export const getVehicle = async (id) => {
  let { data: vehicle, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return error;
  }

  return vehicle;
};

export const addVehicleApi = async (vehicle) => {
  let { data, error } = await supabase.from("vehicles").insert([vehicle]);

  if (error) {
    return error;
  }

  return data;
};

export const updateVehicle = async (vehicle) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/vehicles/${vehicle.id}`,
      vehicle,
    );

    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteVehicle = async (id) => {
  let { error } = await supabase.from("vehicles").delete().eq("id", id);

  if (error) {
    return error;
  }

  return id;
};
