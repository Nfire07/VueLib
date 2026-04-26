# Fab

Floating action button with expandable actions menu.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `icon` | `String` | `'add'` | No | Main button icon |
| `tooltip` | `String` | `''` | No | Button tooltip |
| `position` | `String` | `'bottom-right'` | No | Position: `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'` |
| `actions` | `Array` | `[]` | No | Array of action objects |
| `showLabels` | `Boolean` | `true` | No | Show action labels |
| `offset` | `Number` | `24` | No | Offset from edge in pixels |

### Action Structure

```javascript
{
  icon: String,      // Material Icons name
  label: String,    // display label
  handler: Function // optional click handler
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `action` | `Object` | Action object clicked |
| `open` | - | Menu opened |
| `close` | - | Menu closed |

## Usage

```vue
<Fab
  icon="add"
  position="bottom-right"
  :actions="[
    { icon: 'edit', label: 'Edit', handler: () => handleEdit() },
    { icon: 'delete', label: 'Delete', handler: () => handleDelete() },
    { icon: 'share', label: 'Share' }
  ]"
  @action="handleAction"
/>
```

## Features

- Four corner positions with offset
- Expandable actions menu with stagger animation
- Icon toggle animation (open/close)
- Action labels display
- Hover zoom effect
- Material Icons integration