# Alert

Toast-style alert component with auto-dismiss and dismiss button.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `type` | `String` | `'info'` | No | Alert type: `'success'`, `'error'`, `'warning'`, `'info'` |
| `title` | `String` | `''` | No | Alert title |
| `message` | `String` | - | Yes | Alert message |
| `dismissible` | `Boolean` | `true` | No | Show close button |
| `timeout` | `Number` | `0` | No | Auto-dismiss milliseconds (0 = disabled) |
| `modelValue` | `Boolean` | `true` | No | Visibility state (v-model) |

## Emits

| Event | Payload | Description |
|-------|--------|-------------|
| `update:modelValue` | `Boolean` | Visibility state change |
| `dismiss` | - | Alert dismissed |

## Requirements

- **Pinia Store**: Uses `useGenericStore` for language state
- **Locale Files**: Imports `en.json` / `it.json`
- **Material Icons**: Requires Material Icons Round font

## Usage

```vue
<Alert
  type="success"
  title="Success!"
  message="Operation completed successfully"
  :timeout="3000"
  v-model="visible"
  @dismiss="handleDismiss"
/>
```

## Features

- Auto-dismiss with progress bar animation
- Dismissible with close button
- ARIA attributes for accessibility
- Smooth slide transition
- Localized title fallback via locale files