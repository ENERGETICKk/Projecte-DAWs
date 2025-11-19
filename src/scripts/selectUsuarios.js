
import { supabase } from './supabaseClient.js';
import readline from 'readline';



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pregunta(texto) {
  return new Promise((resolve) => rl.question(texto, resolve));
}

function mostrarUsuarios(usuarios) {
  console.log('\n📊 USUARIOS ENCONTRADOS');
  console.log('═══════════════════════════════════════════════════════════════\n');

  if (!usuarios || usuarios.length === 0) {
    console.log('⚠️  No se encontraron usuarios\n');
    return;
  }

  usuarios.forEach((user, i) => {
    console.log(`${i + 1}. ${user.nombre} ${user.apellidos}`);
    console.log(`   📧 Email: ${user.email}`);
    console.log(`   👤 Tipo: ${user.tipo_usuario}`);
    console.log(`   🆔 ID: ${user.usuarios_id}`);
    console.log('───────────────────────────────────────────────────────────────');
  });

  console.log(`\n📈 Total: ${usuarios.length} usuario(s)\n`);
}


async function consultarTodos() {
  const { data, error } = await supabase.from('usuarios').select('*');
  if (error) throw error;
  mostrarUsuarios(data);
}

async function consultarPorTipo() {
  console.log('\n📝 Tipo de usuario:');
  console.log('1. Estudiant');
  console.log('2. Professor');
  console.log('3. Admin');
  const opcion = await pregunta('\nSelecciona una opción (1-3): ');

  const tipos = { 1: 'estudiant', 2: 'professor', 3: 'admin' };
  const tipo = tipos[opcion];

  if (!tipo) {
    console.log('❌ Opción inválida');
    return;
  }

  const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('tipo_usuario', tipo);

  if (error) throw error;
  mostrarUsuarios(data);
}

async function consultarPorEmail() {
  const email = await pregunta('\n📧 Introduce el email: ');
  const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .ilike('email', `%${email}%`);
  if (error) throw error;
  mostrarUsuarios(data);
}

async function consultarPorNombre() {
  const nombre = await pregunta('\n👤 Introduce el nombre o apellido: ');
  const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .or(`nombre.ilike.%${nombre}%,apellidos.ilike.%${nombre}%`);
  if (error) throw error;
  mostrarUsuarios(data);
}

async function consultarEstadisticas() {
  const { data, error } = await supabase.from('usuarios').select('tipo_usuario');
  if (error) throw error;

  const stats = data.reduce((acc, user) => {
    acc[user.tipo_usuario] = (acc[user.tipo_usuario] || 0) + 1;
    return acc;
  }, {});

  console.log('\n📈 ESTADÍSTICAS DE USUARIOS');
  console.log('═══════════════════════════════════════');
  console.log(`📚 Estudiantes: ${stats.estudiant || 0}`);
  console.log(`👨‍🏫 Profesores: ${stats.professor || 0}`);
  console.log(`⚙️  Administradores: ${stats.admin || 0}`);
  console.log('═══════════════════════════════════════\n');
}


async function menu() {
  console.clear();
  console.log('\n╔═══════════════════════════════════════╗');
  console.log('║   🔍 CONSULTAR USUARIOS - MENÚ       ║');
  console.log('╚═══════════════════════════════════════╝\n');
  console.log('1. Ver todos los usuarios');
  console.log('2. Buscar por tipo de usuario');
  console.log('3. Buscar por email');
  console.log('4. Buscar por nombre/apellido');
  console.log('5. Ver estadísticas');
  console.log('6. Salir\n');

  const opcion = await pregunta('Selecciona una opción (1-6): ');

  try {
    switch (opcion) {
      case '1':
        await consultarTodos();
        break;
      case '2':
        await consultarPorTipo();
        break;
      case '3':
        await consultarPorEmail();
        break;
      case '4':
        await consultarPorNombre();
        break;
      case '5':
        await consultarEstadisticas();
        break;
      case '6':
        console.log('\n👋 ¡Hasta luego!\n');
        rl.close();
        return;
      default:
        console.log('\n❌ Opción inválida\n');
    }
  } catch (error) {
    console.error('\n❌ Error:', error.message);
  }

  await pregunta('\nPresiona Enter para volver al menú...');
  menu();
}


menu();
