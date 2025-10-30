// consultas.js
import { supabase } from "./supabaseClient.js";

// Consultar todos los usuarios
const { data: usuarios, error: errorUsuarios } = await supabase
  .from("usuarios")
  .select("*");

if (errorUsuarios) console.error("❌ Error consultando usuarios:", errorUsuarios);
else console.log("👤 Usuarios:", usuarios);


// Consultar las materias de un profesor
const { data: aulas_zonas, error: errorAulas_Zonas } = await supabase
  .from("aulas_zonas")
  .select("*");

if (errorAulas_Zonas) console.error("❌ Error consultando materias:", errorMaterias);
else console.log("📘 Materias del profesor 1:", aulas_zonas);
