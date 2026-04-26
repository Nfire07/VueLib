# Gantt

Gantt chart component for task timeline visualization.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `tasks` | `Array` | (default tasks) | No | Array of task objects |
| `initialStartDate` | `Date` | `null` | No | Initial view start date |
| `colWidth` | `Number` | `44` | No | Column width in pixels |

### Task Structure

```javascript
{
  id: Number,
  name: String,           // task name
  start: Date,           // start date
  end: Date,             // end date
  progress: Number,      // 0-100
  assignee: String,      // assignee name
  color: String         // bar color
}
```

## Emits

None - component is self-contained.

## Requirements

- **Pinia Store**: Uses `useGenericStore` for language state
- **Locale Files**: Imports `en.json` / `it.json`
- **Material Icons**: Requires Material Icons font

## Usage

```vue
<Gantt
  :tasks="myTasks"
  :initial-start-date="new Date()"
  col-width="50"
/>
```

## Views

- **1W**: 7 days
- **2W**: 14 days (default)
- **1M**: 30 days
- **3M**: 90 days

## Features

- Multiple view ranges (1W, 2W, 1M, 3M)
- Today highlighting
- Weekend highlighting
- Task bars with progress
- Tooltip on hover
- Scroll horizontal
- Task color per task
- Month segment headers
- Localized weekday/month names