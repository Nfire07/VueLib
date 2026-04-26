# LanguageChanger

EN/IT language switcher component.

## Props

None.

## Emits

| Event | Payload | Description |
|-------|---------|-------------|
| `change` | `String` | Language changed (`'en'` or `'it'`) |

## Requirements

- **Pinia Store**: Uses `useGenericStore` for state
- **Locale Files**: Imports `en.json` / `it.json`

## Usage

```vue
<LanguageChanger @change="handleLangChange" />
```

## Features

- Two-button toggle (EN/IT)
- Active state highlighting
- ARIA attributes for accessibility
- Updates Pinia store on change