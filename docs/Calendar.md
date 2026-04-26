# Calendar

Event calendar component with day modal and task creation.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `events` | `Array` | `[]` | No | Array of event objects `{ date, title, time, description }` |
| `formFields` | `Array` | (see below) | No | DynamicForm fields for adding tasks |
| `submitText` | `String` | `'Add Task'` | No | Submit button text |
| `onAddEvent` | `Function` | `null` | No | Callback when event is added |
| `formLoading` | `Boolean` | `false` | No | Loading state for form |

### Default formFields

```javascript
[
  { type: 'divider', name: 'divider_add_task', label: 'Add Task' },
  { name: 'title', label: 'Title', type: 'text', required: true, placeholder: "Insert your task's title...", fullWidth: true },
  { name: 'time', label: 'Time', type: 'time', required: false, fullWidth: true },
  { name: 'description', label: 'Description', type: 'textarea', required: false, placeholder: "Insert your task's details...", fullWidth: true }
]
```

## Emits

| Event | Payload | Description |
|-------|--------|-------------|
| `submit-form` | `Object` | Form data with `date` field added |

## Requirements

- **Pinia Store**: Uses `useGenericStore` for language state
- **Locale Files**: Imports `en.json` / `it.json`
- **Dependencies**: Requires `DynamicForm` component
- **Material Icons**: Requires Material Icons font

## Usage

```vue
<Calendar
  :events="myEvents"
  :form-fields="customFields"
  submit-text="Create Event"
  @submit-form="handleAddEvent"
/>
```

## Features

- Month navigation (prev/next)
- Today highlighting
- Event dots indicator on days
- Day modal with event list
- Embedded DynamicForm for adding tasks
- Localized weekday/month names