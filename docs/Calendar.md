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

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `submit-form` | `Object` | Form data with `date` field added |

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

- Month navigation (prev/next buttons)
- Today highlighting with circle indicator
- Event dots indicator (max 3) on days with events
- Day click opens modal with event list
- Embedded DynamicForm for adding new tasks
- Localized weekday/month names via store