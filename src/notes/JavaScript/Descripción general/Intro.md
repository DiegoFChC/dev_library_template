---
title: JavaScript
description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
order: 1
---

{% $markdoc.frontmatter.title %}

## TypeScript
Lenguage de programación de código abierto realizado por Microsoft para extender JavaScript. Permite incluir **tipado estricto** en JS. Permite tipar las aplicaciones JS, dando más herramientas y robustés.
El tipado permite evitar errores y además clarifica la estrucutra de nuestro código, al identificar los tipos de variables, funciones y demás.

TypeScript se ejecuta sobre Node JS, por lo que es necesario instalarlo.

```javascript
const a = function() {
  return math.random()
}
```

```jsx
function Button(props) {
  let { children } = props;

  return <button>{children}</button>;
}
```

```jsx
import { Tag } from '@markdoc/markdoc';
import type { MarkdocNextJsSchema } from '@markdoc/next.js';

import { Fence } from '@/components/fence';

const markdoc: MarkdocNextJsSchema = {
  render: Fence,
  attributes: {},
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const { content, language } = node.children[0].attributes;

    return new Tag(
      this.render as string,
      {
        ...attributes,
        language,
      },
      [content]
    );
  },
};

export default markdoc;
```