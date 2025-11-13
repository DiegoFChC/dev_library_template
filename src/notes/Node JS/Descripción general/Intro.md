---
title: TypeScript
description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
order: 1
---

# Node JS

Node JS es un ambiente de ejecución de JavaScript. Permite aplciaciones de servidor, da a javaScript la facilidad de no ser sólo para la web sino para el servidor.

## REPL

Este es un interprete que interactua con nuestro sistema operativo.

```javascript
node
```

## Node JS vs Navegador

Node permite interactuar con el sistema interactivo (os, process, etc), y JS en el navegador permite acceder a características únicas del navegador (document, window, etc).

## Objetos globales

Son objetos incluidos cuando abrimos un interprete, en este caso Node JS

* **__diraname**: Permite acceder a la dirección donde me encuentro.
* **__filename**: Ruta completa con el archivo.
* **module**: Puede separar una aplicación JS en múltiples archivos
* **require**: Permite importar esos archivos separados por *module*.
* **process**: Da información del sistema.

## Timers

* **setInterval**: Ejecuta codigo cada cierto tiempo.

```javascript
setInterval(() => {
  console.log('Hello world')
}, 1000)
```

* **settimeout**: Ejecuta codigo después de cierto tiempo.

```javascript
setTimeout(() => {
  console.log('Hello world')
}, 5000)
```