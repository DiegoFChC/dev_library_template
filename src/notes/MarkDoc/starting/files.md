---
title: La plantilla
description: Ubicación de los principales archivos de esta plantilla.
order: 2
---

## Estructura de la documentación

Los archivos _.md_ deben ir ubicados en la carpeta `src/notes` y deben tener la sigueinte estructura:

* **Carpeta principal:** Contendrá toda la información, secciones y archivos _.md_.
  * **_meta.json** es un archivo necesario donde deberás especificar que título tendrá cada sección (subcarpetas) y en que orden quieres que se muestren en la barra de navegación lateral.

```json
{
  "starting": {
    "order": 1,
    "title": "Introducción"
  },
  "tags": {
    "order": 2,
    "title": "Etiquetas"
  },
  "components": {
    "order": 3,
    "title": "Componentes"
  },
  "advanced": {
    "order": 4,
    "title": "Estructura"
  }
}
```

* **Subcarpetas:** Hacen referencia a las sección de cada tema principal.
* **Archivos .md:** Contienen la documentación o escritos.
  * Cada archivo debe tener el **front matter** al inicio. Se deben espeficiar los atributos `title`, `description` y order.

```md
---
title: La plantilla
description: Ubicación de los principales archivos de esta plantilla.
order: 2
---

...contenido md
```

> El **front matter** en Markdown es una sección de _metadatos_ al principio de un archivo, encerrada por tres guiones (---), que contiene información estructurada sobre el documento.

## Navegación

La navegación es generada automáticamente por la pantilla, ya que al usar los **Server Components** de Next.js podemos acceder al sistema de archivos donde están ubicados nuestos archivos.

## Renderizado y componentes

Podrá encontrar los archivos más relevantes acerca del renderizado de markdoc en las sigueintes direcciones:

* `/src/components/DocPage` Renderizado principal.
* `/src/components/DocNavigation` Navegación inferior.
* `/src/components/Navbar` Navegación lateral.
* `/src/components/Markdoc` Componentes personalizados (Tags).
  * `/src/components/Markdoc/configMarkdoc` Configuración para renderizado de nodos y etiquetas.
* `/src/services/server` Funciones de lectura de archivos y generación de árboles de navegación y renderizado.