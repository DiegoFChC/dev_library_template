---
title: Markdoc
description: Markdoc es una sintaxis y un conjunto de herramientas basadas en Markdown para crear sitios de documentación personalizados.
order: 1
---

## Porque usarlo?

Markdoc nos permite generar sitio web por medio de archivos .md de forma muy sencilla, y lo mejor de esto es que nos permite personalizar nuestro contenido usando `Tags` en el _.md_ usando la sintaxis `{%` y `%}`. Para el caso de este proyecto, se han usado componentes de **React JS** para el renderizado de algunas etiquetas de _html_, así como para etiquetas persnalizdas.

### Nodos
Las **Nodos** hacen refenrencia a cada una de las etiquetas por defecto que maneja _Markdoc_ a la hora de pasar nuestro _.md_ a código _html_. Dichos nodos pueden ser personalizados por medio de componentes de _React JS_ (u otras herramientas dependiendo de las tecnologías usadas).

Por ejemplo, cuando en nuestro archivo _.md_ escribimos un `# Title` **Markdoc** lo convertirá en un `<h1>Title</h1>` para que se muestre en nuestra página. El diseño con que se muestra puede ser modificado por nosotros usando estilos _css_ e incluso componentes que reemplacen dichas etiquetas.

Puede consultar más en [Markdoc Nodes](https://markdoc.dev/docs/nodes).

### Tags
Como se mensionó anteriormente, las **Tags** son etiquetas personalizadas que podemos incluir en nuestros archivos _.md_ para renderizar componentes personalizados. La configuración la veremos en la sección Configuración de etiquetas.

Podemos usarlas de la siguiente forma: `{% Tag %}` o `{% CustomTag %} Content {% /CustomTag %}`

Puede consultar más en [Markdoc Tags](https://markdoc.dev/docs/tags).

## El Flujo de Markdoc

Markdoc nos permite pasar de un archivo _.md_ a _html_ haciendo un `parse` de nuestro _.md_. Este proceso pasa por dos etapas principales.

1.  **Parsing (Análisis):**
    * **Entrada:** Texto Markdown/Markdoc (`.md`).
    * **Salida:** **Abstract Syntax Tree (AST)**. Es un objeto que representa la estructura del documento (encabezados, párrafos, listas, etiquetas), pero que aún no sabe qué componentes de React usar.
2.  **Transform (Transformación):**
    * **Entrada:** AST y el **Esquema de Configuración** (donde defines las *Tags*).
    * **Salida:** Un **Renderable Tree** (Árbol Renderizable). Aquí, los nodos genéricos (como `heading` o `CustomTag`) se reescriben para incluir las instrucciones de renderizado (por ejemplo, asociando `CustomTag` con tu componente React `CustomTagComponent`). 
3.  **Render (Renderizado):**
    * **Entrada:** Árbol Renderizable.
    * **Salida:** Componentes de React (o HTML, si no usas React). En esta etapa, el árbol renderizable se convierte en los elementos de interfaz de usuario reales en tu página.

Podemos ver una simple implementación de los dos primeros pasos en _TypeScript_.

```ts
import { parse, transform } from '@markdoc/markdoc'
import type { RenderableTreeNode, Node } from '@markdoc/markdoc'
import { configMarkdoc } from '../../../components/Marckdoc/configMarkdoc'

/**
 * Parse content markdoc
 * @param data String from markdown
 * @returns renderable tree
 */

export function parseContentMarkdoc(data: string): RenderableTreeNode {
  // data -> Markdoc content
  // ast -> abstract syntax tree
  const ast: Node = parse(data)
  // content -> renderable tree
  const content = transform(ast, configMarkdoc)

  return content
}
```