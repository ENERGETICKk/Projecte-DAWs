// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import vercel from '@astrojs/vercel';

// La configuración de Node es necesaria para manejar las peticiones POST y GET dinámicas (tus API endpoints).
export default defineConfig({
  // Establece el modo de salida como 'server'.
  // Esto hace que Astro compile tu proyecto para ser ejecutado en un servidor (Node.js en este caso).
  // Define el adaptador que usará Astro para el modo 'server'.
  // El adaptador @astrojs/node genera la lógica necesaria para correr el servidor de Node.js.
  output: 'server',

  adapter: vercel()
});