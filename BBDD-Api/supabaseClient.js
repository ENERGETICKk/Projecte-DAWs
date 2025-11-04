// supabase.js
import { createClient } from '@supabase/supabase-js';
import dotenv from "dotenv";
dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error("❌ Faltan variables de entorno SUPABASE_URL o SUPABASE_ANON_KEY");
  process.exit(1);
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


// Para ejecutar es con node <nombreArchivo>.js