# Fab (Floating Action Button)

Floating action button with expandable actions menu.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `icon` | `String` | `'add'` | No | Main button icon |
| `tooltip` | `String` | `''` | No | Button tooltip |
| `position` | `String` | `'bottom-right'` | No | Position: `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'` |
| `actions` | `Array` | `[]` | No | Array of `{ icon, label, handler }` |
| `showLabels` | `Boolean` | `true` | No | Show action labels |
| `offset` | `Number` | `24` | No | Offset from edge in pixels |

## Emits

| Event | Payload | Description |
|-------|--------|-------------|
| `action` | `Object` | Action object clicked |
| `open` | - | Menu opened |
| `close` | - | Menu closed |

## Requirements

- **Pinia Store**: Uses `useGenericStore` for language state
- **Locale Files**: Imports `en.json` / `it.json`
- **Material Icons**: Requires Material Icons font

## Usage

```vue
<Fab
  icon="add"
  position="bottom-right"
  :actions="[
    { icon: 'edit', label: 'Edit', handler: () => handleEdit() },
    { icon: 'delete', label: 'Delete', handler: () => handleDelete() }
  ]"
  @action="handleAction"
/>
```

## Features

- Four corner positions
- Expandable actions with stagger animation
- Click outside to close
- Tooltip fallback from locale files
- Body overflow handling