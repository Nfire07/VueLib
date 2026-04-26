# ThemeChanger

Light/dark theme toggle component.

## Props

None.

## Emits

None - updates Pinia store directly.

## Requirements

- **Pinia Store**: Uses `useGenericStore` for theme/language
- **Locale Files**: Imports `en.json` / `it.json`

## Usage

```vue
<ThemeChanger />
```

## Features

- Toggle between light and dark themes
- Saves preference to store
- Uses CSS variables for theming