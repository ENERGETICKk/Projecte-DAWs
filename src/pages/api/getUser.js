import { supabase } from '../../scripts/supabaseClient';

export async function GET() {
  console.log('🔵 API llamada - Obtener Usuarios');

  try {
    //.select('nombre, apellidos, email, tipo_usuario')
    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .order('fecha_creacion', { ascending: false }); // Ordenar por fecha de creación

    if (error) {
      console.error('❌ ERROR SUPABASE al obtener usuarios:', error);
      return new Response(
        JSON.stringify({ 
          error: error.message,
          details: error 
        }), 
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log(`✅ ${data.length} usuarios encontrados.`);
    
    return new Response(
      JSON.stringify({ 
        success: true,
        data: data 
      }), 
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' } 
      }
    );

  } catch (err) {
    console.error('💥 ERROR CATCH en getUsers:', err);
    return new Response(
      JSON.stringify({ 
        error: 'Error interno del servidor al procesar la solicitud.',
        details: err.message
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}