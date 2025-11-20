---
title: Nodos
description: Nodos personalizados.
order: 2
---

## Ejemplos

A continuacón vemos algunos ejemplos de los nodos que se renderizan en un componente. Podrá ver el código y posteriormente como se ven renderizados.

### Heading

Los **headings** se renderizan con el componente `Heading`. No requiere etiqueta.

```markdown
#### This is a Heading h4

##### This is a Heading h5

###### This is a Heading h6
```

Renderizado:
#### This is a Heading h4

##### This is a Heading h5

###### This is a Heading h6

### Fence

Los **fence** son bloques de código y se renderizan con el componente `Fence`. No requiere etiqueta.

`````markdown
```javascript
const sayHi = () => {
  console.log('Hi!!!')
}
```
`````

Renderizado

```javascript
const sayHi = () => {
  console.log('Hi!!!')
}
```

### Code

Los **code** son pequeñas líneas de código que están dentro de nuestros párrafos `como por ejemplo esta frase`.

```markdown
This is an example of `code`.
```

Renderizado:

This is an example of `code`.

### Blockquote

Las `blockquotes` nos permiten especificar citas a otros docuemtos o quizás información o frases que queramos resaltar. Se senderizan por medio del componente `Callout`.

```markdown
> The `<blockquote>` HTML element indicates that the enclosed text is an extended quotation
```

Renderizado:

> The `<blockquote>` HTML element indicates that the enclosed text is an extended quotation
