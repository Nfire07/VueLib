# Markdown

Markdown renderer using marked.js with syntax highlighting support.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `modelValue` | `String` | `''` | Yes | Markdown content to render |
| `tag` | `String` | `'div'` | No | HTML tag |
| `variant` | `String` | `'default'` | No | Style variant: `'default'`, `'minimal'`, `'docs'`, `'blog'`, `'chat'` |
| `prose` | `Boolean` | `true` | No | Enable prose styling |
| `breaks` | `Boolean` | `true` | No | Convert line breaks to `<br>` |
| `gfm` | `Boolean` | `true` | No | Enable GitHub Flavored Markdown |
| `highlight` | `Boolean` | `true` | No | Enable syntax highlighting |
| `highlightTheme` | `String` | `'auto'` | No | Code theme: `'auto'`, `'github'`, `'githubDark'`, `'atomOneDark'`, `'atomOneLight'`, `'nord'`, `'monokai'`, `'dracula'`, `'vitesse'` |
| `showCopyButton` | `Boolean` | `true` | No | Show copy button on code blocks |
| `showLanguageLabel` | `Boolean` | `true` | No | Show language label on code blocks |
| `lineNumbers` | `Boolean` | `false` | No | Show line numbers in code |
| `linkTarget` | `String` | `'_blank'` | No | Link target attribute |
| `linkRel` | `String` | `'noopener noreferrer'` | No | Link rel attribute |
| `headingIds` | `Boolean` | `false` | No | Add IDs to headings |
| `headingPrefix` | `String` | `''` | No | Prefix for heading IDs |
| `compact` | `Boolean` | `false` | No | Compact mode (reduced margins) |
| `noMargin` | `Boolean` | `false` | No | Remove first/last margins |
| `fontSize` | `String` | `null` | No | Custom font size |
| `maxWidth` | `String` | `null` | No | Max width |
| `customStyles` | `Object` | `null` | No | Custom CSS styles |
| `copyLabel` | `String` | `'Copy'` | No | Copy button label |
| `copiedLabel` | `String` | `'Copied!'` | No | Copied feedback label |

## Events

| Event | Payload | Description |
|-------|--------|-------------|
| `loaded` | - | Fired when marked.js loads |
| `error` | `{ message }` | Fired on parse error |
| `link-click` | `{ href, event }` | Fired when link clicked |

## Usage

```vue
<!-- Basic usage -->
<Markdown v-model="# Hello World" />

<!-- With variant -->
<Markdown v-model="# Title" variant="docs" />

<!-- With syntax highlighting -->
<Markdown v-model="\`\`\`javascript\nconst x = 1;\n\`\`\`" :highlight="true" />

<!-- With prose styling -->
<Markdown v-model="**Bold** and *italic*" prose="true" />

<!-- Compact mode -->
<Markdown v-model="Content" compact />

<!-- With custom styles -->
<Markdown v-model="Content" :custom-style="{ '--text-align': 'center' }" />
```

## Features

- marked.js rendering with GFM support
- Syntax highlighting with highlight.js
- Code block copy button
- Line numbers in code
- Language labels
- Custom link targets and rel
- Heading IDs with anchors
- Image figures with captions
- Prose styling variants
- Compact/no-margin modes
- Theme-aware code highlighting
- Event emissions for interactivity

## Styling Classes

| Class | Description |
|-------|-------------|
| `.md-heading` | Heading with anchor |
| `.md-h1` - `.md-h6` | Heading levels |
| `.md-link` | Links |
| `.md-code-block` | Code block wrapper |
| `.md-code-header` | Code header |
| `.md-code-lang` | Language label |
| `.md-copy-btn` | Copy button |
| `.md-lines` | Line numbers container |
| `.md-line` | Line row |
| `.md-line-num` | Line number |
| `.md-figure` | Figure wrapper |
| `.md-img` | Images |
| `.md-caption` | Image caption |
| `.md-error` | Error message |

## Dependencies

- marked.js (CDN)
- highlight.js (CDN)
- Pinia store for theme (optional)