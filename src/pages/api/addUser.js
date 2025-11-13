import { supabase } from '../../scripts/supabaseClient.js';

export async function post({ request }) {
  try {
    const body = await request.json();
    const { nombre, apellidos, email, tipo_user } = body;

    if (!nombre || !apellidos || !email || !tipo_user) {
      return new Response(
        JSON.stringify({ error: 'Todos los campos son obligatorios' }),
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('usuarios')
      .insert([
        {
          nombre: nombre.trim(),
          apellidos: apellidos.trim(),
          email: email.trim(),
          tipo_user,
          fecha_creacion: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
