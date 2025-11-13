---
title: TypeScript
description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
order: 2
---

## CommonJS modules

Los múdulos nos permiten construir una aplicación grande dividia en diferentes archivos.
El objeto global *module* tiene algunos atributos importantes:

* **exports**: Permite exportar

Luego para importar loq ue hemos exportado, usamos el objeto global *require*.

Veamos el sigueinte ejemplo

```
/modules
  myModule.js
index.js
```

```javascript
const user = {
  name: 'Diego',
  lastName: 'Chaverra',
  age: 24
}

const bike = {
  color: 'black',
  cc: 300
}

module.exports = { user, bike }
```

```javascript
const { user, bike } = require('./modules/myModule')

console.log(user, bike)
```

## Exports individuales

Para exportar elementos de forma individual pordemos hacerlo de la sigueinte manera:

```javascript
const user = {
  name: 'Diego',
  lastName: 'Chaverra',
  age: 24
}

const bike = {
  color: 'black',
  cc: 300
}

module.exports.user = user
module.exports.bike = bike
```

> El cambiar la forma de exportar no cambia la forma de importar.