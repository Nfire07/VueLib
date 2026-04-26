# Modal

Reusable modal dialog with Teleport, backdrop, and keyboard support.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `modelValue` | `Boolean` | `false` | No | Visibility state (v-model) |
| `width` | `String` | `'560px'` | No | Modal width |
| `maxHeight` | `String` | `'90vh'` | No | Modal max height |
| `closeOnOverlay` | `Boolean` | `true` | No | Close when clicking overlay |
| `closeOnEsc` | `Boolean` | `true` | No | Close on Escape key |
| `padding` | `String` | `'2rem'` | No | Modal padding |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `Boolean` | Visibility state change |
| `close` | - | Modal closed |

## Usage

```vue
<Modal v-model="showModal" width="600px" :close-on-esc="true">
  <h2>Modal Title</h2>
  <p>Your content here</p>
</Modal>
```

## Features

- Teleport to body
- Backdrop with blur effect
- Close on overlay click
- Close on Escape key
- Body overflow lock
- Smooth scale/translate transition
- ARIA dialog attributes