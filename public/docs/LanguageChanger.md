# LanguageChanger

EN/IT language switcher component.

## Props

None.

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `change` | `String` | Language changed (`'en'` or `'it'`) |

## Usage

```vue
<LanguageChanger @change="handleLangChange" />
```

## Features

- Two-button toggle (EN / IT)
- Active state highlighting
- ARIA radiogroup attributes
- Updates Pinia store on change
- Uses store for localization