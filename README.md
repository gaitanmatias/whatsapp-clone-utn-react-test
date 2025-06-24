# Clon de WhatsApp – Ejercicio práctico en React

Este proyecto fue realizado como ejercicio para practicar los conceptos aprendidos en clase sobre **React**, el uso de la función `.map()` de JavaScript, la estructura de componentes, y la organización de archivos en una aplicación con **Vite**.

## 📋 Descripción

El proyecto consiste en un **clon simple de la interfaz de WhatsApp**, orientado a entender cómo trabajar con componentes reutilizables, props, estilos, y estructuras de datos.

No se trata de una aplicación final ni de un diseño completo, sino de un ejercicio con fines didácticos y de práctica personal.

---

## Segunda parte del ejercicio (nuevas funcionalidades)

En esta segunda etapa se incorporaron mejoras importantes:

- Se añadió un botón para eliminar mensajes, gestionando el estado y eventos para actualizar la lista dinámicamente.  
- Se creó un componente `InputMessageComponent` con un formulario para enviar nuevos mensajes, simulando emisor y hora.  
- La gestión del estado (agregar y eliminar mensajes) se centralizó en el componente principal `App.jsx` para mantener un flujo de datos claro.  
- Se organizó el nuevo componente en una carpeta propia, manteniendo una estructura modular y ordenada.

Estas mejoras permiten practicar interactividad, manejo de eventos y estados más complejos en React.


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
│   ├── MessageComponent/
│   │   ├── MessageComponent.jsx
│   │   └── MessageComponent.css
│   └── InputMessageComponent/
│       ├── InputMessageComponent.jsx
│       └── InputMessageComponent.css
├── data/
│   └── messages.jsx
├── App.jsx
├── index.css
├── main.jsx
```

Se incluye una carpeta `CONSIGNAS/` que contiene las consignas de los ejercicios.


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
