# 🐾 Backend Puppy

API desarrollada con **Node.js**, **Express**, **TypeScript** y **MongoDB (Mongoose)** para gestionar la información de una asociación de perritos.  
Permite administrar mascotas, voluntarios y adoptantes, y está pensada para ser consumida por un frontend en **React**.

---

## ⚙️ Tecnologías

- **Node.js** + **Express 5**
- **TypeScript**
- **MongoDB** con **Mongoose**
- **Helmet**, **CORS**, **Morgan** para seguridad y logs
- **dotenv** para variables de entorno

---

## 🚀 Scripts disponibles

| Comando         | Descripción                                                  |
| --------------- | ------------------------------------------------------------ |
| `npm run dev`   | Ejecuta el servidor en modo desarrollo con `ts-node-dev`     |
| `npm run build` | Compila el proyecto TypeScript a JavaScript (carpeta `dist`) |
| `npm start`     | Inicia el servidor en producción desde `dist/server.js`      |

---

## 🔐 Variables de entorno (`.env`)

Crea un archivo `.env` en la raíz con las siguientes claves:

---

## 🧠 Endpoints básicos

| Método | Endpoint  | Descripción                          |
| ------ | --------- | ------------------------------------ |
| `GET`  | `/health` | Verifica que la API esté funcionando |

> Próximamente se agregarán rutas para:
>
> - 🐕 **Mascotas** (`/api/pets`)
> - 👩‍⚕️ **Voluntarios** (`/api/volunteers`)
> - 🏡 **Adoptantes** (`/api/adopters`)

---

## 🧰 Comandos útiles

- `npm install` → Instala dependencias
- `npm run dev` → Inicia en modo desarrollo
- `npm run build && npm start` → Compila y ejecuta en producción

---

## 🧑‍💻 Autor

**Andre Tirado**  
Proyecto: _Backend Puppy_  
API REST para asociación de rescate y adopción de perritos 🐾

---

## 📜 Licencia

Este proyecto está bajo licencia **ISC**.
