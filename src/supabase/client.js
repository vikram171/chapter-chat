import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "undefined";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "undefined";

console.log("URL:", supabaseUrl);
console.log("KEY:", supabaseAnonKey);

if (supabaseUrl === "undefined" || supabaseAnonKey === "undefined") {
  throw new Error("❌ Environment variables are not loading. Check your .env file and restart the dev server.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
