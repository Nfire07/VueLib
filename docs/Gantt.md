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
  name: String,         // task name
  start: Date,        // start date
  end: Date,          // end date
  progress: Number,     // 0-100 percentage
  assignee: String,   // assignee name
  color: String       // task bar color
}
```

## Events

None - the component is self-contained.

## Usage

```vue
<Gantt
  :tasks="myTasks"
  :initial-start-date="new Date()"
  :col-width="50"
/>
```

## Views

- **1W**: 7 days view
- **2W**: 14 days view (default)
- **1M**: 30 days view
- **3M**: 90 days view

## Features

- Multiple view ranges (1W, 2W, 1M, 3M)
- Today column highlighting
- Weekend column highlighting
- Task bars with progress overlay
- Task color customization
- Tooltip on hover with details
- Horizontal scrolling
- Month segment headers
- Today line indicator
- Localized weekday/month names