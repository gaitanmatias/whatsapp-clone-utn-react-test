# Clon de WhatsApp – Ejercicio práctico en React

Este proyecto fue realizado como ejercicio para practicar los conceptos aprendidos en clase sobre **React**, el uso de la función `.map()` de JavaScript, la estructura de componentes, y la organización de archivos en una aplicación con **Vite**.

## 📋 Descripción

El proyecto consiste en un **clon simple de la interfaz de WhatsApp**, orientado a entender cómo trabajar con componentes reutilizables, props, estilos, y estructuras de datos.

No se trata de una aplicación final ni de un diseño completo, sino de un ejercicio con fines didácticos y de práctica personal.

## ⚙️ Tecnologías utilizadas

- [React](https://reactjs.org/) – Librería para construir interfaces de usuario.
- [Vite](https://vitejs.dev/) – Herramienta de desarrollo y build rápida para proyectos modernos.
- CSS (por componente, en archivos `.css`)
- JavaScript (con JSX)


## 🗂️ Estructura del proyecto

La estructura de carpetas fue pensada con el objetivo de mantener un orden claro y facilitar la escalabilidad del proyecto. Se organizó de la siguiente manera:

```
src/
├── components/
│   ├── ChatComponent/
│   │   ├── ChatComponent.jsx
│   │   └── ChatComponent.css
│   └── MessageComponent/
│       ├── MessageComponent.jsx
│       └── MessageComponent.css
├── data/
│   └── messages.jsx     // Contiene un array de objetos con los mensajes simulados
├── App.jsx
├── index.css
├── main.jsx
```

Además, en la raíz del proyecto se incluye una carpeta `CONSIGNA/` que contiene la consigna original del ejercicio y una imagen de ejemplo.


## 🎯 Objetivo personal

El objetivo principal fue **aprender buenas prácticas desde el principio**:
- Separación clara entre componentes y estilos
- Organización por carpetas
- Simulación de datos desde un archivo separado (`messages.jsx`)
- Imitación de una interfaz real para practicar el diseño con CSS

## 🚫 Notas

- La carpeta `node_modules` **no está incluida** en el repositorio, ya que se genera automáticamente al ejecutar `npm install`.

---

**Matías Gaitán** – 2025
