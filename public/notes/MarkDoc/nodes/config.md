---
title: Configuración de nodos
description: Configuración de markdoc para renderizado de nodos personalizados
order: 1
---

## Configuración de nodos

Markdoc nos permite renderizar los nodos con componentes personalizados. A continuacón vemos como se han configurado en esta plantilla la renderización de los nodos de tipo `heading`, `fence`, `code` y `blockquote`.

{% callout type="info" %}
Tenga en cuenta que los **Nodes** no son **Tags**, los nodos permiten renderizar etiquetas html de forma personaliza y las tags son literalmente etiquetas nuevas que se escriben en el archivo .md.
{% /callout %}

```md

## Esto es un nodo que pasará a ser un h2 en html

{% callout type="info" %}
Esto es una Tag personalizada.
{% /callout %}
```

### Configuración

Para más información acerca de los nodos que nos provee markdoc puede ir a [Markdoc Nodes](https://markdoc.dev/docs/nodes). Nuestra configuración es la siguiente:

```typescript
const nodes: Config['nodes'] = {
  heading: {
    render: 'Heading',
    attributes: {
      level: { type: Number, required: true }
    }
  } satisfies Schema,
  fence: {
    render: 'Fence',
    attributes: {
      content: { type: String, required: true },
      language: { type: String, required: true }
    },
  } satisfies Schema,
  code: {
    render: 'Code',
    attributes: {
      content: { type: String, required: true }
    }
  } satisfies Schema,
  blockquote: {
    render: 'Callout',
    attributes: {
      type: { type: String, default: 'note' }
    }
  } satisfies Schema
}
```

> Se debe especificar el **nodo** que va a ser afectado, que **componente** se renderizará en su lugar y los **atributos** que requiere (personalizados y los que provee markdoc). Este archivo lo puede encontrar en `/src/components/Markdoc/configMarkdoc`.