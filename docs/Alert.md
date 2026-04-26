# Alert

Toast-style alert component with auto-dismiss and dismiss button.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `type` | `String` | `'info'` | No | Alert type: `'success'`, `'error'`, `'warning'`, `'info'` |
| `title` | `String` | `''` | No | Alert title (falls back to locale default) |
| `message` | `String` | - | Yes | Alert message |
| `dismissible` | `Boolean` | `true` | No | Show close button |
| `timeout` | `Number` | `0` | No | Auto-dismiss milliseconds (0 = disabled) |
| `modelValue` | `Boolean` | `true` | No | Visibility state (v-model) |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `Boolean` | Visibility state change |
| `dismiss` | - | Alert dismissed |

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
- ARIA live region (assertive for errors)
- Smooth slide transition
- Localized default title via store