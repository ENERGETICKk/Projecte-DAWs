# Sistema Web de Control d’Assistència – Institut TIC

## 📌 Introducció

Aquest projecte correspon a la **part web** del sistema de control d’assistència desenvolupat per a l’Institut TIC.  
L’objectiu principal de la web és oferir una **interfície gràfica** per consultar, gestionar i administrar tota la informació relacionada amb l’assistència dels usuaris del centre (alumnes, professors i personal).

La web permet interactuar amb la base de dades de manera visual, evitant l’ús directe de consultes SQL i facilitant la gestió del sistema per part dels administradors.

---

## 👤 Tipus d’usuaris

El sistema web gestiona diferents rols d’usuari, cadascun amb funcionalitats específiques:

- **Estudiant**
  - Consulta del calendari d’assistència.
  - Visualització de dies presents i absents.
  - Estadístiques i gràfiques d’assistència.

- **Professor i personal de servei**
  - Registre d’entrada i sortida.
  - Consulta del seu historial d’assistència.
  - Visualització d’estadístiques personals.

- **Administrador**
  - Alta de nous usuaris (email, contrasenya i rol).
  - Llistat complet d’usuaris.
  - Eliminació d’usuaris.
  - Accés global a la informació del sistema.

---

## 🧭 Navegació de la Web

- Tots els usuaris accedeixen inicialment a una **pantalla de login**.
- Segons el rol de l’usuari, el sistema redirigeix a una **pantalla principal diferent**.
- Totes les pàgines disposen de:
  - Botó per tornar a la pàgina principal.
  - Opció de tancar sessió, que retorna a la pantalla d’inici.

📎 Diagrama de navegació (Web):  
https://drive.google.com/file/d/15C4sUvmRlIT8aJx94-yetNESMf5R4Piz/view

---

## 🗄️ Connexió amb la Base de Dades

La web està connectada a una base de dades on es guarda tota la informació relacionada amb:

- Usuaris
- Assignatures
- Zones i aules
- Dispositius RFID
- Registres d’entrada i sortida
- Targetes NFC

Aquestes dades es consulten i s’actualitzen mitjançant la web, permetent una gestió centralitzada i segura.

---

## 🛠️ Tecnologies utilitzades

Per al desenvolupament de la part web s’han utilitzat les següents tecnologies:

- **Astro**
  - Framework orientat a l’alt rendiment i velocitat.
  - Permet reutilitzar components i millorar l’organització del codi.

- **HTML5**
- **CSS3**
- **JavaScript**

- **Supabase**
  - Utilitzat com a sistema de base de dades.
  - Solució visual, moderna i fàcil d’integrar amb aplicacions web.

Aquest conjunt de tecnologies permet una aplicació web ràpida, escalable i fàcil de mantenir.

---

## 🎯 Objectiu de la Web

El principal motiu de crear una aplicació web és disposar d’una eina clara i visual per:

- Consultar l’assistència dels usuaris.
- Gestionar dades de forma eficient.
- Centralitzar tota la informació del sistema.
- Facilitar la tasca administrativa i de seguiment.

---

## 🔗 Enllaços rellevants

- **Repositori GitHub (Web)**  
  https://github.com/ENERGETICKk/Projecte-DAWs.git

- **Prototip Web (PC)**  
  https://poll-glow-70600693.figma.site/

- **Presentació del projecte**  
  https://gamma.app/docs/Projecte-Arduino-iwqesj3a739utz7

- **Prototip App**  
  https://www.figma.com/design/lt5wNXGyqS3ygJ7XKX7YhT/Proyecto

---

## 📹 Vídeos

Carpeta compartida amb els vídeos de funcionament:  
https://drive.google.com/drive/folders/1zML54K0DhILrD42ouw4iz4jJZDZJ52c4
