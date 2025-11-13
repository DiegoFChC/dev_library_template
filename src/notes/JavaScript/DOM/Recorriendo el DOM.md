---
title: Recorriendo el DOM
description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
order: 2
---

# Traversing: Recorriendo el DOM
Traversing se refiere a la acción de recorrer el DOM. Esto lo podemos hacer por medio del objeto global `document`.

```javascript
// Este es un comentario largo porque necesito probar que pasar con los campos de codigo ssi el texto es muy largo, quiero que el scroll no se vea feo
document // Objeto global
document.body // Referencia al body del HTML
```

Esta herramienta nos permite acceder a los difernetes nodos, al igual que cambiar sus características e añadir interactividad.

Cabe destacar que los únicos nodos superiores a los que se puede acceder directamente desde el document son: `body`, `head`, `DOCTYPE` y `HTML`.

## Tipos de nodos
El DOM nos da acceso a diferentes tipos de nodos:

* __Nodos de tipo elemento:__ Representan cualquier etiqueta de HTML.
* __Nodos de tipo texto:__ Representan los textos.
* __Nodos de tipo atributo:__ Representan los atributos de las etiquetas.
* __Nodos de tipo comentario:__ Representan los comentarios del HTML.
* __Nodo raíz:__ Representa el objeto `document`.

## Acceso a los hijos de los nodos
11:19