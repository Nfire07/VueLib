# DataTable

Feature-rich data table with sorting, filtering, and pagination.

## Props

| Prop | Type | Default | Required | Description |
|------|------|--------|---------|-------------|
| `columns` | `Array` | - | Yes | Column definitions array |
| `rows` | `Array` | `[]` | No | Data rows array |
| `searchPlaceholder` | `String` | `''` | No | Search input placeholder |
| `allowColumnFilters` | `Boolean` | `true` | No | Enable column filters |
| `allowColumnToggle` | `Boolean` | `true` | No | Enable column visibility toggle |
| `allowPagination` | `Boolean` | `true` | No | Enable pagination |
| `rowsPerPageOptions` | `Array` | `[10, 25, 50, 100]` | No | Rows per page options |
| `defaultRowsPerPage` | `Number` | `10` | No | Default rows per page |

### Column Structure

```javascript
{
  key: String,         // property name (required)
  label: String,      // display label (required)
  sortable: Boolean, // enable sorting (default: true)
  width: String,      // column width
  align: String,    // 'left', 'center', 'right'
  badge: Boolean,    // render as badge
  badgeMap: Object,  // { value: { bg, color } }
  format: Function   // value formatter
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `row-click` | `Object` | Row data clicked |

## Usage

```vue
<DataTable
  :columns="columns"
  :rows="data"
  search-placeholder="Search..."
  @row-click="handleRowClick"
>
  <template #cell-status="{ value }">
    <span class="status-badge">{{ value }}</span>
  </template>
</DataTable>
```

## Features

- Global search across all columns
- Column-specific filters
- Sortable columns with direction toggle
- Column visibility toggle dropdown
- Pagination with page size selector
- Page navigation (first, prev, numbered, next, last)
- Empty state with icon
- Custom cell slots per column
- Badge rendering with color map
- Value formatting
- Alternating row colors