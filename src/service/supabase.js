import { createClient } from "@supabase/supabase-js";
export const BASE_URL = "https://roadside-api.onrender.com";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
