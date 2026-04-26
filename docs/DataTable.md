# DataTable

Feature-rich data table with sorting, filtering, and pagination.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `columns` | `Array` | - | Yes | Column definitions |
| `rows` | `Array` | `[]` | No | Data rows |
| `searchPlaceholder` | `String` | `''` | No | Search input placeholder |
| `allowColumnFilters` | `Boolean` | `true` | No | Enable column filters |
| `allowColumnToggle` | `Boolean` | `true` | No | Enable column visibility toggle |
| `allowPagination` | `Boolean` | `true` | No | Enable pagination |
| `rowsPerPageOptions` | `Array` | `[10, 25, 50, 100]` | No | Rows per page options |
| `defaultRowsPerPage` | `Number` | `10` | No | Default rows per page |

### Column Structure

```javascript
{
  key: String,           // property name
  label: String,        // display label
  sortable: Boolean,    // enable sorting (default: true)
  width: String,        // column width
  align: String,       // 'left', 'center', 'right'
  badge: Boolean,      // render as badge
  badgeMap: Object,   // { value: { bg, color } }
  format: Function    // value formatter
}
```

## Emits

| Event | Payload | Description |
|-------|--------|-------------|
| `row-click` | `Object` | Row clicked |

## Requirements

- **Pinia Store**: Uses `useGenericStore` for language state
- **Locale Files**: Imports `en.json` / `it.json`
- **Material Icons**: Requires Material Icons font

## Usage

```vue
<DataTable
  :columns="columns"
  :rows="data"
  search-placeholder="Search..."
  @row-click="handleRowClick"
/>
```

## Features

- Global search
- Column-specific filters
- Sortable columns
- Column visibility toggle
- Pagination with page size selector
- Empty state
- Custom cell slots
- Badge rendering
- Value formatting