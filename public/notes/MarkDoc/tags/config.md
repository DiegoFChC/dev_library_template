---
title: Configuración de etiquetas
description: Configuración de markdoc para renderizado de nodos personalizados
order: 1
---

## Configuración de etiquetas

Markdoc nos permite crear nuestras propias etiquetas, las cuales podemos incluir dentro de los archivos _.md_ y markdoc se encargará de interpretarlas.

### Configuración

Para más información acerca de las etiquetas puede ir a [Markdoc Tags](https://markdoc.dev/docs/tags). Nuestra configuración es la siguiente:

```typescript
const tags: Config['tags'] = {
  callout: {
    render: 'Callout',
    attributes: {
      type: {
        type: String,
        matches: ['note', 'caution', 'danger', 'tip', 'info'],
        default: 'note'
      },
      title: { type: String }
    }
  }
}
```

> Se debe especificar el **nombre** de la etiqueta, luego que **elemento** ha de renderizar y finalmente sus **atributos** o parámetos.