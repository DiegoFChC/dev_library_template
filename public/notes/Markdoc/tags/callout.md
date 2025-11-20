---
title: Callout
description: Etiquetas para mensajes.
order: 2
---

## Forma de uso

Esta etiqueta nos permite mostrar mensajes de diferente tipo en nuestra web.

```markdown
{% callout %}
**Note no prop** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}

{% callout type="caution" %}
**Caution** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}
```

## Ejemplos

{% callout type="note" %}
**Note** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}

{% callout type="caution" %}
**Caution** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}

{% callout type="danger" %}
**Danger** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}

{% callout type="info" %}
**Info** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}

{% callout type="tip" %}
**Tip** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}

### Título específico

```markdown
{% callout type="tip" title="Custom Title" %}
**Tip custom title** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}
```

{% callout type="tip" title="Custom Title" %}
**Tip custom title** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}

{% callout type="danger" title="Custom Title" %}
**Danger custom title** Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
{% /callout %}